import Cookies from "js-cookie";
import queryString from "query-string";

var authEvent = new Event('authwallCleared');

export default class AuthWall {
  constructor(el) {
    this.el = el;
    this.toaster = el.querySelector('.auth-toaster');
    this.site = document.getElementById('MainContent');
    this.footer = document.querySelector('.site-footer')
    this.form = el.querySelector("[data-hubspot-form]");
    this.emailInput = document.getElementById("authEmail");
    this.nameInput = document.getElementById('authName');
    this.preAuth = this.getPreAuth();

    this.hide = this.hideFunc.bind(this)
    this.handleForm = this.handleFormFunc.bind(this)
    this.open = this.openForm.bind(this)
    this.clear = this.clearFunc.bind(this)

    this.init()
  }

  init() {
    if (!this.preAuth) {
      this.hide()
    } else {
      window.addEventListener('load', this.clear)
    }
  }

  hideFunc() {
    var self = this;
    self.cacheContent();
    document.body.classList.add("authwall--up");
    window.addEventListener("resize", self.authBodySize);
    self.open();

  }
  cacheContent() {
    this.cache = this.site.cloneNode(true);
    this.site.remove();
  }

  clearFunc() {
      window.dispatchEvent(authEvent);
      document.body.classList.add("authwall--down");
      document.body.classList.add("authwall--precleared");
      setTimeout(() => {
        document.body.classList.add("authwall--cleared");
      }, 800);
  }

  authBodySize() {
    document.body.style.minHeight = window.innerHeight + 'px';
    document.body.style.overflow = 'hidden';
    this.footer.style.marginTop = window.innerHeight + "px";
  }

  getPreAuth() {
    if (window.preAuth != true){
      var parsed = queryString.parse(location.search);

      if (parsed.preAuth == 'true' ) {
        var preAuth = true;
      }
    } else {
      var preAuth = window.preAuth;
    }

    if (Cookies.get("hubspotAuthorized") == "yup") {
      return true;
    }
    return preAuth
  }

  openForm() {
    if (this.nameInput) {
      this.nameInput.focus();
    } else {
      this.emailInput.focus();
    }
    this.form.addEventListener("submit", this.handleForm, true);
  }

  resetForm(removeProcessing = true) {
     this.toaster.classList.remove("error");
     this.toaster.classList.remove("success");
     this.toaster.classList.remove("blocked-email");
     this.toaster.classList.remove("invalid-email");
     this.toaster.classList.remove("other-error");
     if (removeProcessing == true) {
       this.form.classList.remove("processing");
     }
  }

  prepareData() {
    var authData = {};
    let authConsentText = this.toaster.querySelector(".toaster-footer").innerText;
    authData.submittedAt = Date.now();
    authData.fields = [];
    authData.fields[0] = { name: "email", value: this.emailInput.value };
    if (this.nameInput) {
      authData.fields[1] = { name: "firstname", value: this.nameInput.value };
    }
    authData.legalConsentOptions = {
      legitimateInterest: {
        value: true,
        text: authConsentText,
        subscriptionTypeId: 999,
        legalBasis: "LEAD"
      }
    };
    authData.context = {};
    authData.context.pageUri = window.location.href;
    authData.context.pageName = document.title;

    if (Cookies.get("hubspotutk")) {
      authData.context.hutk = Cookies.get("hubspotutk");
    }
    return authData;
  }

  updateDriftWithName() {
     const driftCookie = Cookies.get('driftInfo');
  let email, name, domain;
   if (driftCookie != undefined) {
      name = driftCookie.split('||')[0];
      email = driftCookie.split('||')[1].replace('||', '');

   } else if (this.nameInput && this.emailInput) {
     name = this.nameInput.value;
     email = this.emailInput.value;
    }
    if (typeof(drift) == 'object' && name != '' && email != '') {
      domain = email.split('@')[1];
      drift.on('ready', function() {
        drift.api.setUserAttributes({
          email: authEmail.value,
          firstName: this.nameInput.value,
          domain: domain
        })
      })
    }
  }

 handleFormFunc(event) {
   //Stop Default
  event.preventDefault();
  //REset form classes
  this.resetForm();

  //Start processing
  this.form.classList.add('processing');

  //Get correct data
  var authData = this.prepareData();
  //Update drift with the right name
  this.updateDriftWithName();

  //Handling delay to let people wait
  var delay = 0;
  if (this.toaster.classList.contains('try-again')) {
    delay = 600;
  }
var self = this;
    setTimeout(() => {
      this.submitForm(authData).then(data => {
        console.log(data)
        console.log(this.toaster)
        this.resetForm();
        //Handle Error

          if (data.status == 'error') {

            this.toaster.classList.add('try-again');
            this.toaster.classList.add('error');

            setTimeout(() => {
              this.emailInput.value = '';
              this.emailInput.placeholder = 'Try again';
            }, 300);

            if (data.errors && data.errors.length > 0) {
              //Specific error handling
              if (data.errors[0].errorType == 'BLOCKED_EMAIL') {
                this.toaster.classList.add('blocked-email')
              }
              else if (data.errors[0].errorType == 'INVALID_EMAIL') {
                this.toaster.classList.add('invalid-email')
              }
              else {
                this.toaster.classList.add('other-error');
              }
            }
            else {
              this.toaster.classList.add('other-error');
            }
          }
          //Handle success
          else if (data.status == 'success' || data.inlineMessage == "Thanks for submitting the form." || data.errors.length <= 0) {
            this.resetForm();

            this.toaster.classList.remove('try-again');
            this.toaster.classList.add('success');

            this.clearWall();

          } else {
            this.resetForm();
            //Other error we don't know
            this.toaster.classList.add('other-error');
            this.toaster.classList.add('error');
          }
        })
      }, delay);

  }

  async submitForm(data) {
    const formId = this.form.getAttribute('data-hubspot-form');
    const formPortal = this.form.getAttribute('data-hubspot-portal');
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${formPortal}/${formId}`;

    const response = await fetch(url,
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
      });
    var jsonData = await response.json();
    return jsonData;
  }

  clearWall() {
    Cookies.set("hubspotAuthorized", "yup", { expires: 30, path: "" });
    var infoToSet = "this.emailInput.value";
    if (this.nameInput) {
      infoToSet = this.nameInput.value + "||" + this.emailInput.value;
    }
    Cookies.set("driftInfo", infoToSet, { expires: 30, path: "" });

    if (this.cache) {
      var page = document.getElementById("app");
      page.insertBefore(this.cache, this.el);
    }

    setTimeout(() => {
      document.body.classList.add("authwall--down");
      setTimeout(() => {
        document.body.classList.remove("authwall--up");
        document.body.classList.add("authwall--cleared");
        document.body.style.height = "auto";
        document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";

        this.footer.style.marginTop = 0 + "px";

      }, 1000);
      window.dispatchEvent(authEvent);
    }, 2000);

    window.removeEventListener("resize", this.authBodySize);
  }
}
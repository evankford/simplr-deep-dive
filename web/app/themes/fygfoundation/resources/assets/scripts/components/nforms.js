class NFormLoader {
  constructor(
    args = {
      debug:false,
      selectors: ['.ninja-shortcode-fix', '[data-ninja-id]'],
    }
  ) {

    this.defaults = {
      debug: false,
      selectors: ['.ninja-shortcode-fix', '[data-ninja-id]'],
    };
    this.props = Object.assign({}, this.defaults, args);

    (this.props.selectors);

    this.loadForm = this.loadSingleForm.bind(this);
  }

  loadForms(element) {
    this.props.selectors.forEach((selector) => {
      const childForms = element.querySelectorAll(selector);
      if (childForms.length > 0) {
        childForms.forEach((form) => {
          this.loadForm(form);
        });
      }
    });
  }

  loadSingleForm(form) {
    var id = form.getAttribute('data-ninja-id');
    var myNewForm = new NForm(form, id)
    myNewForm.fetch();
  }
}

class NForm {
  constructor(el, id ) {

    this.formID = id;
    this.targetContainer = el;

    if (!this.formID) {
      console.error('ERROR: Must define a form ID to initate NForm')
      return false;
    }

    if (!this.targetContainer) {
      console.error('ERROR: Must define a TargetContainer to initate NForm');
      return false;
    }


    this.formHTML;
    this.formTemplates;
    this.formScripts;

    this.load = this.loader.bind(this);
    this.fetch = this.fetcher.bind(this);
    this.handleData = this.dataHandler.bind(this);
  }



  loader() {
    if (this.alreadyLoaded()) return true;
    this.form = document.createElement('div');
    this.form.classList.add('ninja-form-loaded');
    this.form.innerHTML = this.formHTML;
    this.loadTemplates(this.formTemplates);
    this.loadFormHTML(this.form, this.targetContainer);
    this.loadScripts(this.formScripts);
  }
  dataHandler(raw) {
    const response = JSON.parse(raw);
    window.nfFrontEnd = window.nfFrontEnd || response.nfFrontEnd;
    window.nfi18n = window.nfi18n || response.nfi18n || {};
    this.formTemplates = response.templates;
    this.formScripts = response.scripts;
    this.formHTML = response.form;
    setTimeout(() => {
      this.load();
    }, 100);
  }

  alreadyLoaded() {
    if (this.targetContainer.querySelector('.ninja-form-loaded')) {
      return true
    }
    return false;
  }

  fetcher() {
    var self = this;
    const data = 'async_form=true&form_id=' + this.formID;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        self.handleData(request.response);
      }
    };
    request.open('POST', '/', true);
    request.setRequestHeader(
      'Content-Type',
      'application/x-www-form-urlencoded; charset=UTF-8'
    );
    request.send(data);
  }

  loadFormHTML(form, targetContainer) {
    $(targetContainer).append(form);
    $(targetContainer).addClass('loaded');
  }

  loadTemplates(templates) {
    if (!this.templatesLoaded) {
      this.templatesLoaded = true;

      const scripts = $.parseHTML(templates, document, true);
      if (scripts.length) {
        scripts.forEach(script => {
          var scriptId = script.id;
          if (scriptId && !$('script#' + scriptId).length) {
            $(document.body).append(script);
          }
        })
      }
    }
  }
  loadScripts(scripts) {
    if (!this.scriptsLoaded) {
      const keys = Object.keys(scripts)
      this.scriptsLoaded = true;
      keys.forEach((key) => {
        var myScript = scripts[key];
        var script = document.createElement('script');

        if (myScript.extra.data) {
          var dataScript = document.createElement('script');
          dataScript.innerHTML = (myScript.extra.data)
          jQuery(document.head).append(dataScript);
        }
        //eslint-disable-next-line
        window.nfFrontEnd = window.nfFrontEnd || nfFrontEnd;
        script.setAttribute('src', myScript.src);
        jQuery(document.head).append(script);
      });
    }
  }
}

export { NFormLoader }
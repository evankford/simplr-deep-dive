<div class="inline-block signup-popup-wrap" data-auto="false" data-auto-delay="5" data-module="signup">

  <div class="signup-popup " data-signup-form="">
    <div class="signup-popup-inner" >

      @php echo do_shortcode("[ninja_form id=" . $mc_form . "]") @endphp
      <div class="signup-popup__closer" data-close=""><i class="icon-times" aria-label="Close Popup"></i></div>
    </div>
  </div>
  <a data-text="{{$signup_form_button_text}}" class="m-2 text-white button background-pink" data-open target="_blank" rel="noreferrer nofollow" href="{{$signup_form_button_fallback}}"><span>{{$signup_form_button_text}}<span></a>
</div>


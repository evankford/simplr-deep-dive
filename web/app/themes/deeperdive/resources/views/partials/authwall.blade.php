


<?php
  // Stash all but first two sections in JS cache.

  //Add class to body for ease

  //Background markup/fade in
?>
<aside data-module="authwall" class="fixed z-0 w-full h-screen pointer-events-none">
  <div class="fixed top-0 left-0 z-20 w-full h-screen authwall-images">
    <div class="block mobile-image authwall-image psuedoish md:hidden">
      <div class="normal">
        @include('partials.image-element', ['image'=>$mobile_blurry, 'args' => ['is_bg' => true]])
      </div>
      <div class="blurred">
        @include('partials.image-element', ['image'=>$mobile_normal, 'args' => ['is_bg' => true]])
      </div>
    </div>
    <div class="hidden tablet-image authwall-image psuedoish md:block lg:hidden">
      <div class="normal">
        @include('partials.image-element', ['image'=>$tablet_blurry, 'args' => ['is_bg' => true]])
      </div>
    <div class="blurred">
      @include('partials.image-element', ['image'=>$tablet_normal, 'args' => ['is_bg' => true]])
    </div>
  </div>
  <div class="hidden desktop-image authwall-image lg:block">
      <div class="normal">
        @include('partials.image-element', ['image'=>$desktop_blurry, 'args' => ['is_bg' => true]])
      </div>
      <div class="blurred">
        @include('partials.image-element', ['image'=>$desktop_normal, 'args' => ['is_bg' => true]])
      </div>
  </div>
</div>

<div class="auth-toaster " id="AuthToaster">
  <?php $text = get_field('lockout_text', 'option');?>
  <span class="w-32 logo">

    @include('partials.image-element', ['image' => $auth_logo, 'args' => ['max_width' => 600]])
  </span>
  <div class="auth-toaster__inner">
    <h2 class="font-bold toaster-header h2 main-color"><span class="text" data-text="{{$auth_greeting}}">{{$auth_greeting}}</span></h2>
     <div class="greeting-content">
      {!!$main_content!!}
  </div>
    <form class="toaster-form" data-hubspot-portal="{{$portal_id}}" data-hubspot-form="{{$form_id}}" id="hubspotAuth">
      <div class="toaster-form__inputs">
        <label class="sr-only hidden-text">First Name</label>
        <input shadow-mdtype="text" id="authName" required placeholder="Your First Name">
        <label class="sr-only hidden-text">Work Email</label>
        <input shadow-mdtype="email" id="authEmail" required placeholder="Your Work Email">
        <button class="button"><span>Log In <i class="icon-right"></i></span></button>
      </div>
    </form>


     <div class="greeting-content after-form-content">
      {!!$contact_content!!}
  </div>
    <div class="toaster-footer">
    {!!$cookie_text!!}
    </div>
    <div class="toaster-message-wrap">
      <p class="error blocked-email">{{$forbidden}}</p>
      <p class="error invalid-email">{{$not_an_email}}</p>
      <p class="error other-error">{{$other_error}}</p>
      <p class="success ">{{$success}}</p>
    </div>
  </div>
</div>
</aside>
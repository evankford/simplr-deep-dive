<?php

?>
<aside  class="fixed flex w-full h-screen text-white z-101 lg:hidden bg-blue">

  <div class="m-auto w-85p">
    <div data-anim-in class="w-48 mx-auto my-4 max-w-3xs">
      @include('partials.image-element', ['image'=> $mobile_logo, 'args' => ['max_width' => 600]])
    </div>
    <h2 class="header-resp">{{$mobile_title}}</h2>
    <h3 data-anim-in class="mt-3 subheader-resp">{!!$mobile_text !!}</h3>
  </div>

</aside>
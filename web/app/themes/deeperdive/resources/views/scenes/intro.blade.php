<div class="fixed z-40 flex flex-col items-center justify-center w-full h-full min-h-screen p-8 text-black introduction" data-scene="intro" data-status="current">
  <div class="absolute top-0 left-0 z-0 w-full h-full intro-bg bg-offwhite backdrop-blur opacity-90"></div>
  <div class="relative z-10 max-w-lg m-auto text-center intro-content w-85p">
     <div data-anim-in class="mx-auto my-4 max-w-3xs">
       @include('partials.image-element', ['image'=> $intro_logo, 'args' => ['max_width' => 600]])
      </div>

      <h2 data-anim-in class="my-8 text-black header-resp">{{$intro_text}}</h2>


    <x-button href="#" attrs="data-anim-in" scene="intro" button="next" classes="text-blue" icon="right-1">{{$intro_button_text}}</x-button>

  </div>
</div>
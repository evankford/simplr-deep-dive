<section class="relative z-20 flex flex-wrap items-center justify-center w-full min-h-screen px-3 py-20 py-24 m-0 -my-16 overflow-hidden section-impact clip-top lg:-my-24 bg-red lg:py-48">
  <div class="absolute top-0 left-0 z-0 w-screen h-full">
    @include('partials.image-element', ['image' => $impact_bg, 'args' => ['is_bg' => true, 'rellax' => true]])
  </div>

  {{-- <div data-impact-header="" dclass="h-16 lg:h-20 my-10 flex-full relative z-20 sr-only">

    <h2 id="copy" data-canvas-value="{{$impact_title}}" class="header-mega">{{$impact_title}}</h2>
  </div> --}}
  <div data-impact-content="" class="container relative z-20 flex flex-wrap items-center justify-center lg:-mt-20">

    <div class=" flex-200 m-3 max-w-md pr-8 md:pr-16 text-white text-{{$impact_1_align}}">
      @include('partials.flex-content', ['content' => $impact_1_content])
    </div>
    <div class=" flex-300 m-3 max-w-lg text-white text-{{$impact_2_align}}">
      @include('partials.flex-content', ['content' => $impact_2_content])
    </div>
  </div>
</section>

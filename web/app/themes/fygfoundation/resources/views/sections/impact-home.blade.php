<section class="section-impact relative z-20 clip-both -my-16 lg:-my-24 deco-bottom bg-red relative m-0 w-full py-20  py-24 lg:py-48 px-3 min-h-screen overflow-hidden flex flex-wrap items-center justify-center">
  <div class="absolute w-screen h-full z-0 top-0 left-0">
    @include('partials.image-element', ['image' => $impact_bg, 'args' => ['is_bg' => true, 'rellax' => true]])
  </div>

  <div data-impact-header="" data-module="particle-header" class="h-16 lg:h-20 my-10 flex-full relative z-20 h">
    <canvas id="scene" class="particle-scene inset-half transform -translate-x-1/2 -translate-y-1/2 absolute "></canvas>
    <h2 id="copy" data-canvas-value="{{$impact_title}}" class="sr-only">{{$impact_title}}</h2>
  </div>
  <div data-impact-content="" class="lg:-mt-20 relative z-20 container flex flex-wrap items-center justify-center">

    <div class=" flex-200 m-3 max-w-md pr-8 md:pr-16 text-white text-{{$impact_1_align}}">
      @include('partials.flex-content', ['content' => $impact_1_content])
    </div>
    <div class=" flex-300 m-3 max-w-lg text-white text-{{$impact_2_align}}">
      @include('partials.flex-content', ['content' => $impact_2_content])
    </div>
  </div>
</section>

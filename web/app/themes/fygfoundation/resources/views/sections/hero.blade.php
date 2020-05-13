<section class="relative flex flex-wrap items-center justify-center w-full overflow-hidden section-hero max-w-screen bg-blacker min-h-90h lg:flex-no-wrap">
  <div hero-bg="" class="absolute z-10 overflow-hidden opacity-50 hero-bg md:opacity-90" data-module="gallery-timeline">
    @include('partials.gallery-hover')
  </div>
  @if ($main_title)
    <h1 data-anim-in class="relative z-20 flex-auto max-w-full p-6 m-4 mt-20 text-5xl font-black leading-none tracking-wider text-center uppercase main-title lg:text-huge flex-some">{{$main_title}}</h1>
  @endif
  <div class="container relative z-20 flex flex-wrap items-center justify-start p-3 pb-32 mt-16 flex-400 hero-content lg:-mt-20 lg:justify-center">
    <div  class="flex-300 m-3 max-w-xs pr-20 sm:pr-12 text-white text-{{$hero_1_align}}">
      @include('partials.flex-content', ['content' => $hero_1_content])
    </div>
    <div class="flex-300 m-3 max-w-lg text-white text-{{$hero_2_align}}">
      @include('partials.flex-content', ['content' => $hero_2_content])
    </div>
  </div>
</section>

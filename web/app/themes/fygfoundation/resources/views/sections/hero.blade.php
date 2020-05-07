<section class="section-hero max-w-screen overflow-hidden bg-black relative w-full min-h-90h overflow-hidden flex flex-wrap flex lg:flex-no-wrap items-center justify-center">
  <div hero-bg="" class="hero-bg md:opacity-90 opacity-50 absolute overflow-hidden z-10" data-module="gallery-timeline">
    @include('partials.gallery-hover')
  </div>
  @if ($main_title)
    <h1 data-anim-in class="main-title flex-auto font-black text-5xl lg:text-huge uppercase relative z-20 p-6 text-center m-4 mt-20 tracking-wider leading-none flex-some max-w-full">{{$main_title}}</h1>
  @endif
  <div class=" flex-400 mt-16 hero-content lg:-mt-20 relative z-20 p-3 container flex flex-wrap items-center justify-start lg:justify-center pb-32">
    <div  class="flex-300 m-3 max-w-xs pr-20 sm:pr-12 text-white text-{{$hero_1_align}}">
      @include('partials.flex-content', ['content' => $hero_1_content])
    </div>
    <div class="flex-300 m-3 max-w-lg text-white text-{{$hero_2_align}}">
      @include('partials.flex-content', ['content' => $hero_2_content])
    </div>
  </div>
</section>

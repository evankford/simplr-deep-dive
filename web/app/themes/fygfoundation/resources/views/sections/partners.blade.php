
<section class="relative z-20 pb-32 text-white section-partners clip-bottom bg-darkblue">
  <div class="top-0 z-0 block w-full h-full max-h-screen pt-12 partners-bg max-absolute">
    @include('partials.image-element', ['image' => $partner_bg, 'args' => ['is_bg' => true]])
  </div>
   <div class="container relative z-20 flex flex-wrap items-center justify-start max-w-5xl p-6 mx-auto lg:mt-24 lg:justify-center ">
    <div  class="max-w-lg pr-24 m-3 text-white flex-300 sm:pr-12 ">
      @include('partials.flex-content', ['content' => $partner_content_1])
    </div>
    <div class="max-w-xl m-3 text-white flex-300">
      @include('partials.flex-content', ['content' => $partner_content_2])
    </div>
  </div>
  <div class="container max-w-5xl mx-auto mt-4 mb-24 partners-list">
    @if ($partners_header)
       <h4 data-anim-in class="my-8 text-center header-label">[{{$partners_header}}]</h2>
    @endif
      <div data-anim-in-children class="flex flex-wrap items-center justify-center">
        @foreach($partners as $partner)
          <div class="m-5 flex-140 max-w-3xs icon-image">
            @include('partials.image-element', ['image'=> $partner, 'args' => ['max_width' => 600]])
          </div>
        @endforeach

      </div>
  </div>
</section>


<section class="section-partners text-white clip-bottom bg-darkblue relative pb-32">
  <div class="pt-12 partners-bg max-h-screen top-0 w-full h-full max-absolute z-0 block">
    @include('partials.image-element', ['image' => $partner_bg, 'args' => ['is_bg' => true]])
  </div>
   <div class="lg:mt-24 mx-auto relative z-20 max-w-5xl p-6 container flex flex-wrap items-center justify-start lg:justify-center ">
    <div  class="flex-300 m-3 max-w-lg pr-24 sm:pr-12 text-white ">
      @include('partials.flex-content', ['content' => $partner_content_1])
    </div>
    <div class="flex-300 m-3 max-w-xl text-white">
      @include('partials.flex-content', ['content' => $partner_content_2])
    </div>
  </div>
  <div class="partners-list container mb-24 mt-4 max-w-5xl mx-auto">
    @if ($partners_header)
       <h4 data-anim-in class="header-label text-center my-8">[{{$partners_header}}]</h2>
    @endif
      <div data-anim-in-children class="flex flex-wrap items-center justify-center">
        @foreach($partners as $partner)
          <div class="flex-140 m-5 max-w-3xs icon-image">
            @include('partials.image-element', ['image'=> $partner, 'args' => ['max_width' => 600]])
          </div>
        @endforeach
      </div>
  </div>
</section>

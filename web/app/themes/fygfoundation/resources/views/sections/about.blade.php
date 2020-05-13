<section class="relative z-10 flex flex-wrap items-center justify-center w-full px-1 px-3 py-12 pt-24 m-0 -mt-12 overflow-hidden text-white lg:-mt-40 lg:-mt-32 xl:-mt-40 section-about md:px-6 lg:pt-48 lg:px-8 min-h-90h">
  <div class="absolute left-0 z-0 w-screen h-full max-h-screen">
    @include('partials.image-element', ['image' => $about_bg, 'args' => ['is_bg' => true, 'rellax' => true, 'classes' => 'about-bg-image']])
  </div>
  <div class="relative z-20 flex flex-wrap items-start justify-center px-2 mx-auto lg:flex-no-wrap md:px-6">
    <div class="max-w-2xl my-10 mb-8 text-center flex-200 lg:max-w-md lg:pr-12 lg:pt-40 lg:text-left">
      @if ($about_title)
       <h2 data-anim-in class="mb-4 text-5xl header-mega lg:text-6xl">{{$about_title}}</h2>
      @endif
    @if($about_subtitle)
       <h4 data-anim-in class="header-label">[{{$about_subtitle}}]</h2>
      @endif
    </div>
    <div class="flex flex-wrap justify-center max-w-4xl px-2 my-10 flex-400 item-center ">
      @foreach($about_content as $item)
        @unless($item['button']['URL']['url'] == get_the_permalink())
        <div data-anim-in class="relative block max-w-2xl m-2 mb-12 about-item md:first:-ml-6 md:last:-mr-6 flex-300 last:mb-0">
          <div class="absolute top-0 left-0 z-0 w-full h-full about-bg">
            @include('partials.image-element', ['image' => $item['background'], 'args' => ['is_bg' => true]])
          </div>
          <div class="relative z-10 flex flex-wrap items-center justify-center about-content ">
            @if ($item['title_image'])
              <h3 class="p-4 mb-auto mr-auto -mt-12 flex-140 max-w-2xs" aria-label="{{$item['title']}}">
                @include('partials.image-element', ['image' => $item['title_image']])
              </h3>
              @elseif($item['title'])
                <h3 class="p-4 mb-auto mr-auto -mt-12 flex-140 max-w-2xs">{{$item['title']}}</h3>
              @endif
            <div class="p-4 flex-200">
              <div class="my-4">{{$item['content']}}</div>
              @if ($item['button'])
                <x-button icon="right-circled" class="test" href="{{$item['button']['URL']['url']}}" target="{{$item['button']['URL']['target']}}">{{$item['button']['URL']['title']}}</x-button>
              @endif
            </div>

          </div>
        </div>
        @endunless
      @endforeach
    </div>
  </div>
</section>

<section class="section-about overflow-hidden bg-black text-white relative m-0 w-full px-1 md:px-6 py-12 pt-24 lg:pt-48 px-3 lg:px-8 min-h-90h overflow-hidden flex flex-wrap items-center justify-center">
  <div class="absolute w-screen h-full z-0 left-0 max-h-screen">
    @include('partials.image-element', ['image' => $about_bg, 'args' => ['is_bg' => true, 'rellax' => true, 'classes' => 'about-bg-image']])
  </div>
  <div class="flex items-start justify-center flex-wrap lg:flex-no-wrap mx-auto px-2 md:px-6 relative z-20">
    <div class="flex-200 max-w-2xl lg:max-w-md text-center mb-8 lg:pr-12 lg:pt-40 lg:text-left my-10">
      @if ($about_title)
       <h2 data-anim-in class="header-mega text-5xl lg:text-6xl mb-4">{{$about_title}}</h2>
      @endif
      @if($about_subtitle)
       <h4 data-anim-in class="header-label">[{{$about_subtitle}}]</h2>
      @endif
    </div>
    <div class="my-10 flex-400 flex max-w-4xl px-2 flex-wrap item-center justify-center ">
      @foreach($about_content as $item)
        @unless($item['button']['URL']['url'] == get_the_permalink())
        <div data-anim-in class="about-item max-w-2xl md:first:-ml-6 md:last:-mr-6 flex-300 m-2 mb-12 last:mb-0  block relative">
          <div class="about-bg absolute z-0 w-full h-full top-0 left-0">
            @include('partials.image-element', ['image' => $item['background'], 'args' => ['is_bg' => true]])
          </div>
          <div class="about-content relative z-10 flex items-center justify-center flex-wrap ">
            @if ($item['title_image'])
              <h3 class="flex-140 p-4 mr-auto max-w-2xs -mt-12 mb-auto" aria-label="{{$item['title']}}">
                @include('partials.image-element', ['image' => $item['title_image']])
              </h3>
              @elseif($item['title'])
                <h3 class="flex-140 p-4 mr-auto max-w-2xs -mt-12 mb-auto">{{$item['title']}}</h3>
              @endif
            <div class="flex-200 p-4">
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

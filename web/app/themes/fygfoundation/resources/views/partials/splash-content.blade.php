
    <div class="relative z-10 flex flex-col justify-between w-full max-w-6xl px-4 lg:h-full lg:px-12 align-center pt-25 lg:justify-between lg:flex-row items-between title-wrap">
       <h2 id="name" class="fade-in-now lg:hidden lg:pl-0 pl-50p ">
        @if($name_image)
          @include('partials.image-element', [
            "image" => $name_image,
            "args" => ['is_bg' => false, "max_width"=> 1200]
          ])
        @elseif($name_svg)

            {!!$name_svg!!}

        @else
        {!! $name_text !!}
        @endif
      </h2>
        <h1 class="pl-50p fade-in-now lg:pl-0" id="title">
      @if ($title_image)
        @include('partials.image-element', [
          "image" => $title_image,
          "args"=> ['is_bg' => false, "max_width"=> 1200]
        ])
      @elseif($title_svg)
          {!!$title_svg!!}
      @else
        {!! $title_text !!}
      @endif
    </h1>
    <div id="right" class="p-4 px-6 mx-auto mt-64 text-center button-bg lg:mr-0 lg:mt-0 max-w-90">
      <h2 id="namesmall" class="hidden -mb-1 lg:block fade-in-now">
        @if($name_image)
          @include('partials.image-element', [
            "image" => $name_image,
            "args" => ['is_bg' => false, "max_width"=> 1200, 'classes' => 'lazypreload']
          ])
        @elseif($name_svg)

            {!!$name_svg!!}

        @else
        {!! $name_text !!}
        @endif
      </h2>
      @if ($buttons)
    <div class="inline-block w-auto mx-auto fade-sooner">
      @include('partials.buttons', $buttons)
    </div>
    @endif
    @if ($icons)
    <div class="inline-block w-auto mx-auto mb-2 color-white fade-sooner text-pink">
      @include('partials.icons', $icons)
    </div>
    @endif
    </div>
    </div>

    @if ($introduction)
<div class="w-screen p-10 mt-auto mb-12 text-center">
  <div class="pr-6 text-center flex-some md:pl-12 font-bigger">
    <div class="text-lg text-center text-opacity-75 rte">{!!$introduction!!}</div>
  </div>
</div>
@endif



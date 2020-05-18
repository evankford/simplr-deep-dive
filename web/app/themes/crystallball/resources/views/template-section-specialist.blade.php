{{--
{{--
  Template Name: Specialist
  Template Post Type: section, shortsection
--}}

<section id="{{$id}}" data-title="{{$title}}"   data-position="ahead" class="section-wrap bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>
  @include('partials.icon-header')
  <div class="container p-8 md:p-12 lg:pt-16 m-auto items-center flex flex-wrap lg:flex-nowrap">
    <div class="flex-300 lg:pr-6">
      @include('partials.section-header')
      <ul class="flex flex-wrap -ml-2" data-anim-in-chilren="">
        @foreach($icons as $icon)
        <li class="flex-none p-2 text-var-accent">
          @svg($icon['Icon']['url'], 'fill-paths  w-20 h-24 last:w-24 last:h-auto')
        </li>
        @endforeach
      </ul>
    </div>
    <div class="flex-300 p-8  " data-anim-in-chilren="">
      <div class="rounded-full max-w-sm block overflow-hidden border-white border-8 w-full relative">
        <div class="pb-full"></div>
        @include('partials.image-element', ['image'=> $specialist_image, 'args' => ['is_bg' => true, 'max_width' => 750]])
      </div>
      <div class="max-w-2xs mt-4 mx-auto">
        <h4 class="font-bold text-lg my-4">{{$name}}</h4>
        <div class="rte -mt-4">{!!$info!!}</div>
      </div>
    </div>
  </div>
</section>
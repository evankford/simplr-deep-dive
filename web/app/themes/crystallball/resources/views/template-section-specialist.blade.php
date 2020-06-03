{{--
{{--
  Template Name: Specialist
  Template Post Type: section, shortsection
--}}

<section id="{{$id}}" data-title="{{$title}}"   data-position="ahead" data-index="{{$index}}"  class="section-wrap @if ($full_height) md:min-h-screen @endif  bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>
  @include('partials.icon-header')
  <div class="container flex-wrap items-center block p-8 py-20 m-auto sm:p-12 md:p-12 lg:pt-16 lg:flex lg:flex-no-wrap lg:flex-row-reverse">
    <div class="flex flex-col p-4 mx-auto flex-300 md:p-8">
      <div class="flex flex-wrap items-center justify-center" data-anim-in-chilren>
        <div class="relative block w-full overflow-hidden border-8 border-white rounded-full max-w-2xs md:max-w-sm flex-300">
          <div class="pb-full"></div>
          @include('partials.image-element', ['image'=> $specialist_image, 'args' => ['is_bg' => true, 'max_width' => 750]])
        </div>
        <div class="p-4 mx-auto mt-4 flex-200 max-w-2xs">
          <h4 class="my-6 text-xl font-bold lg:text-2xl">{{$name}}</h4>
          <div class="-mt-4 rte lg:text-xl">{!!$info!!}</div>
        </div>
      </div>
      <h3 class="hidden mt-2 text-2xl font-normal leading-tight text-center lg:block lg:mt-12 md:mt-4 md:text-3xl" data-anim-in>{{$below}}</h3>
    </div>
    <div class=" flex-300 lg:pr-6">
      @include('partials.section-header')
      <ul data-anim-in-children class="flex flex-wrap -ml-2" data-anim-in-chilren="">
        @foreach($icons as $icon)
        <li class="flex-none p-2 text-var-accent">
          @svg($icon['Icon']['url'], 'fill-paths  w-20 h-24 last:w-24 last:h-auto')
        </li>
        @endforeach
      </ul>
      <h3 class="block my-8 text-2xl font-normal leading-tight text-left lg:hidden" data-anim-in>{{$below}}</h3>
    </div>

  </div>
</section>
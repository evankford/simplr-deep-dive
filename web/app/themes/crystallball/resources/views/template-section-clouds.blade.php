{{--
  Template Name: Clouds Section
  Template Post Type: section, shortsection
--}}

<section id="{{$id}}" data-title="{{$title}}"  data-position="ahead" data-index="{{$index}}"  class="section-wrap bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>
  <div class="container relative z-40 p-6 m-auto">
    <h2 data-anim-in class="max-w-4xl m-auto my-16 text-4xl font-bold leading-tight text-center lg:text-5xl lg:mt-24 xl:mt-32">{{$header}}</h2>
    <ul data-anim-in-children class="flex flex-wrap items-center justify-center w-full max-w-5xl px-12 problems-list lg:px-30" data-cloud-wrap>
      @foreach ($problems as $problem)
      <li class="p-8 text-center flex-140 md:flex-300">
        <h4 class="text-2xl font-medium leading-tight margin-random transform--back lg:text-3xl">{{$problem['Title']}}</h4>
      </li>
      @endforeach

    </ul>
  </div>
  <div class="absolute bottom-0 z-20 w-full pointer-events-none cloud-deco burn-bottom min-h-600x min-w-600x">
    @include('partials.clouds')
    </div>
</section>
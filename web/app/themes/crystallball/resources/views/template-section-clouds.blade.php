{{--
  Template Name: Clouds Section
  Template Post Type: section, shortsection
--}}

<section id="{{$id}}" data-title="{{$title}}"  data-position="ahead" class="section-wrap bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>
  <div class="container m-auto p-6">
    <h2 data-anim-in class="text-4xl leading-tight lg:text-5xl font-bold max-w-4xl my-16 lg:mt-24 xl:mt-32 text-center m-auto">{{$header}}</h2>
    <ul data-anim-in-children class="problems-list w-full max-w-5xl px-12 lg:px-30 flex flex-wrap items-center justify-center" data-cloud-wrap>
      @foreach ($problems as $problem)
      <li class="flex-140 md:flex-300 p-8 text-center">
        <h4 class="text-2xl margin-random leading-tight transform--back lg:text-3xl font-medium">{{$problem['Title']}}</h4>
      </li>
      @endforeach

    </ul>
  </div>
  <div class="cloud-deco burn-bottom absolute bottom-0 pointer-events-none z-75 w-full min-h-600x min-w-600x">
    @include('partials.clouds')
    </div>
</section>
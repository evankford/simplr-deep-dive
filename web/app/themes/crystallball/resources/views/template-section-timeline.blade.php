{{--
{{--
  Template Name: Timeline
  Template Post Type: section, shortsection
--}}

<section id="{{$id}}" data-title="{{$title}}"   data-position="ahead" class="section-wrap py-0 bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>
  @include('partials.icon-header')
  <div class="container m-auto p-6 md:p-8 py-32 first:py-8 flex flex-col items-center justify-center max-w-5xl">
    @include('partials.section-header')
    <ul class="py-8 flex relative flex w-full" data-timeline="">
      @foreach ($timeline as $item)
          <li class="flex-1/4 flex items-end justify-center p-2 md:p-4 text-sm md:text-base text-center leading-tight pb-12 relative timeline-item"><span>{{$item['Text']}}</span></li>
      @endforeach
      <div class="absolute bottom-0 h-4 w-full timeline-grad -mx-24" data-timeline-grad></div>
    </ul>
  </div>
</section>
</section>
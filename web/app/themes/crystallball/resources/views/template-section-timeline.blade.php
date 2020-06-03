{{--
{{--
  Template Name: Timeline
  Template Post Type: section, shortsection
--}}

<section id="{{$id}}" data-title="{{$title}}"   data-position="ahead" data-index="{{$index}}"  class="section-wrap @if ($full_height > 0) md:min-h-screen @endif  py-0 bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>
  @include('partials.icon-header')
  <div class="container flex flex-col items-center justify-center max-w-5xl p-6 py-24 m-auto md:p-8 first:py-8" data-timeline>
    @include('partials.section-header')
    <ul class="relative flex w-full py-8" data-timeline="">
      @foreach ($timeline as $item)
          <li data-timeline-item class="relative flex items-end justify-center p-2 pb-12 text-sm leading-tight text-center flex-1/4 md:p-4 md:text-base timeline-item"><span>{{$item['Text']}}</span></li>
      @endforeach
      <div data-timeline-timeline class="absolute bottom-0 w-full h-4 -mx-24 timeline-grad" data-timeline-grad></div>
    </ul>
  </div>
</section>
</section>
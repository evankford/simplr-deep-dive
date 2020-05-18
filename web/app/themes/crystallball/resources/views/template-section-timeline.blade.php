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
  <div class="container m-auto py-32 first:py-8 flex flex-col items-center justify-center max-w-5xl">
    @include('partials.section-header')
    <ul class="p-8 flex relative flex w-full" data-timeline="">
      @foreach ($timeline as $item)
          <li class="flex-1/4 p-4 timeline-item">{{$item['Text']}}</li>
      @endforeach
      <div class="absolute bottom-0 h-4 w-full timeline-grad -mx-24" data-timeline-grad></div>
    </ul>
  </div>
</section>
</section>
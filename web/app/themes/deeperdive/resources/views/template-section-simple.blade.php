{{--
{{--
  Template Name: Simple
  Template Post Type: section, shortsection
--}}

<section id="{{$id}}" data-title="{{$title}}"   data-position="ahead" data-index="{{$index}}"  class="section-wrap @if ($full_height) md:min-h-screen md:p-12 @endif   p-8  bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>
  @include('partials.icon-header')
  <div class="container m-auto @if ($full_height) py-24 @else pt-24 @endif flex flex-col items-center justify-center max-w-5xl">
    @include('partials.section-header')
  </div>
</section>
<section id="{{$id}}" data-page="{{get_the_id()}}"   data-position="ahead" data-index="{{$index}}"  class="template--icons hidden section-wrap min-h-screen flex-col items-center justify-center  py-0 bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>
  <header>
  @include('partials.section-header')
  </header>
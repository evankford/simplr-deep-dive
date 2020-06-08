{{--
  Template Name: Crystal Ball Header
  Template Post Type: section, shortsection
--}}

<section id="{{$id}}" data-page="{{get_the_id()}}"  data-position="ahead" data-index="{{$index}}"  class="section-ball w-full p-4 md:p-12 flex flex-col items-center content-center min-h-screen relative bg-var-bg text-var-text bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>
  <div data-ball-wrap="" data-anim-ball="{{$ball_animated}}" class="w-full max-w-6xl m-auto mx-0 lg:p-12">
    {!!$ball_svg!!}
    <div class="ball-bg" style="background-color: {{$ball_bottom}};" class="w-full mt-0"></div>
  </div>

</section>
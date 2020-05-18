{{--
{{--
  Template Name: Footer
  Template Post Type: section, shortsection
--}}

<section id="{{$id}}" data-title="{{$title}}"   data-position="ahead" class="section-wrap  pt-24 px-16 sm:px-24 bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>
  <div class="container mt-auto flex flex-col items-center justify-center max-w-lg">

   @include('partials.image-element', ['image'=> get_field('Footer Logo'), 'args' => ["classes"=>"max-w-2xs mb-8 lg:mb-20", "max_width" => 300]])
   @include('partials.image-element', ['image'=> get_field('Footer Image'), 'args' => ["max_width" => 300]])
  </div>
</section>
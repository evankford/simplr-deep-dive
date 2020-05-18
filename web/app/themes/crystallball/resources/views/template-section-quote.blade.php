{{--
{{--
  Template Name: Quote
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
  <div class="container m-auto py-32 flex items-start justify-center max-w-5xl">
    <div data-anim-in class="flex-140 rounded-full border-8 border-white overflow-hidden">
      @include('partials.image-element', ['image'=> $testimonial_image, 'args' => ["max_width" => 300]])
    </div>
    <div class="flex-most lg:pl-12">
      <h3data-anim-in  class="font-bold text-2xl md:text-3xl lg:text-4xl my-6 leading-tight tracking-tight">{{$testimonial_quote}}</h3>
      <p><span data-anim-in class="text-lg lg:text-xl font-bold inline-block mr-1">- {{$testimonial_name}}</span> <span data-anim-in class="lg:text-lg font-light">{{$testimonial_title}}</span></p>
    </div>
  </div>
</section>
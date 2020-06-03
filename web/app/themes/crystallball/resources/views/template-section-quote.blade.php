{{--
{{--
  Template Name: Quote
  Template Post Type: section, shortsection
--}}

<section id="{{$id}}" data-title="{{$title}}"   data-position="ahead" data-index="{{$index}}"  class="section-wrap @if ($full_height) md:min-h-screen @endif  py-0 bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>
  <div class="container flex flex-wrap items-start justify-center max-w-5xl p-6 py-24 m-auto md:p-8">
    <div data-anim-in class="max-w-sm m-auto flex-200 ">
      <div class="overflow-hidden border-8 border-white rounded-full ">
        @include('partials.image-element', ['image'=> $testimonial_image, 'args' => ["max_width" => 300]])
      </div>
    </div>
    <div class="p-4 flex-400 lg:pl-12">
      <h3 data-anim-in  class="my-6 text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl">{{$testimonial_quote}}</h3>
      <p><span data-anim-in class="inline-block mr-1 text-lg font-bold lg:text-xl">- {{$testimonial_name}}</span> <span data-anim-in class="font-light lg:text-lg">{{$testimonial_title}}</span></p>
    </div>
  </div>
</section>
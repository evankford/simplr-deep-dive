{{--
{{--
  Template Name: Standard
  Template Post Type: section, shortsection
--}}
<section id="{{$id}}" data-page="{{get_the_id()}}"   data-position="ahead" data-index="{{$index}}"  class="section-wrap @if ($full_height) md:min-h-screen @endif  p-8 md:p-12 bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>
  @include('partials.icon-header')
  <div class="container m-auto lg:pt-32 first:py-8 md:flex-row flex-col-reverse flex flex-wrap items-center justify-center ">
    <div data-anim-in class="flex-full w-full md:w-auto md:flex-1/2 p-6">
      @include('partials.section-header')
      @include('partials.image-element', ['image'=> $left_image, 'args' => ["classes"=>"mt-8 max-w-md", "max_width" => 750]])
    </div>
    <div data-anim-in class="transform--front flex-full w-full md:w-auto md:flex-1/2 p-6">
      @include('partials.image-element', ['image'=> $right_image, 'args' => ["classes"=> "max-w-lg", "max_width" => 750]])
      <div>
  </div>
</section>
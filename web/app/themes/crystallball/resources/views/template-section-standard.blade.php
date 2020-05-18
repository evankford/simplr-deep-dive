{{--
{{--
  Template Name: Standard
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
  <div class="container m-auto py-32 first:py-8 flex items-center justify-center ">
    <div class="flex-full md:flex-1/2 p-6">
      @include('partials.section-header')
      @include('partials.image-element', ['image'=> $left_image, 'args' => ["classes"=>"mt-8 max-w-md", "max_width" => 750]])
    </div>
    <div class="flex-full md:flex-1/2 p-6">
      @include('partials.image-element', ['image'=> $right_image, 'args' => ["classes"=> "max-w-lg", "max_width" => 750]])
      <div>
  </div>
</section>
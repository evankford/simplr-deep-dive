{{--
{{--
  Template Name: Quality
  Template Post Type: section, shortsection
--}}

<section id="{{$id}}" data-page="{{get_the_id()}}"   data-position="ahead" data-index="{{$index}}"  class="section-wrap @if ($full_height) md:min-h-screen @endif  bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>
  @include('partials.icon-header')
  <div class="container p-8 md:p-12 py-20 lg:pt-32 m-auto items-center flex flex-wrap lg:flex-no-wrap">
    <div class="flex-300 lg:pr-6">
      @include('partials.section-header')
    </div>
    <div class="flex-300 p-8">
      <div class="image-weirdo transform--front" data-anim-in-children>
      <div class="image-1 text-5xl rounded-xl rounded-tl-half rounded-br-half overflow-hidden">@include('partials.image-element', ['image'=> $quality_image_1, 'args' => ['max_width' => 750]])</div>
        <div class="image-2  text-4xl  rounded-xl rounded-tl-half rounded-br-half overflow-hidden">@include('partials.image-element', ['image'=> $quality_image_2, 'args' => ['max_width' => 600]])</div>
        <div class="image-3 rounded-xl text-4xl  rounded-tl-half rounded-br-half overflow-hidden">@include('partials.image-element', ['image'=> $quality_image_3, 'args' => ['max_width' => 600]])</div>
        <div class="image-4 w-48 lg:w-56 h-24 text-3xl  block rounded-xl round'e'd-tr-half rounded-bl-half overflow-hidden" style="background-color: {{$quality_color}};"></div>
      </div>
      <ul data-anim-in-children class="flex flex-wrap z-10">
        <li class="flex-some p-4">@include('partials.image-element', ['image'=> $quality_bottom_1, 'args' => ['max_width' => 750]])</li>
        <li class="flex-some p-4">@include('partials.image-element', ['image'=> $quality_bottom_2, 'args' => ['max_width' => 750]])</li>
      </ul>

    </div>
  </div>
</section>
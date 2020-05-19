{{--
{{--
  Template Name: Chat
  Template Post Type: section, shortsection
--}}

<section id="{{$id}}" data-title="{{$title}}"   data-position="ahead" data-index="{{$index}}"  class="section-wrap py-0 bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>
  <div class="block lg:flex items-stretch justify-center min-h-screen w-full relative">
    <div class="absolute w-full-h-auto top z-50 p-12 lg:px-24 xl:px-32">
      <h2 class="container max-w-3xl mx-auto header-resp text-center">
        {{$chat_header}}</h2>
      </div>
    <div class="flex-1/2 p-8 pt-48  bg-var-bg relative flex flex-col items-center justify-center">
      <div data-anim-loader="" class="absolute inset-half">
        @include('partials.dot-loader')
      </div>
      @svg($chat_svg['url'], 'w-full max-w-md mx-auto')
    </div>
    <div class="bg-white flex-1/2">
    <ul class=" flex-wrap p-8 max-w-lg lg:pt-64 flex flex-wrap items-center justify-center" data-anim-in-children>

      @foreach ($improvements as $image)
      <li  class="w-full p-2 flex-200  min-h-0 lg:flex-1/2 ">
        @include('partials.image-element', ['image'=> $image, 'args' => ['max_width' => 600]])
      </li>
      @endforeach
    </ul>
  </div>

  </div>
</section>
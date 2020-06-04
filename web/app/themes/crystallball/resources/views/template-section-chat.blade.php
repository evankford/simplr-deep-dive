{{--
{{--
  Template Name: Chat
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
  <div class="relative items-stretch justify-center block w-full min-h-screen lg:flex">
    <div class="absolute z-50 p-12 w-full-h-auto top lg:px-24 xl:px-32">
      <h2 class="container max-w-3xl mx-auto text-center header-resp">
        {{$chat_header}}</h2>
      </div>
    <div class="relative flex flex-col items-center justify-center p-8 pt-48 flex-1/2 bg-var-bg" data-chat>
      <div data-anim-loader="" class="absolute inset-half">
        @include('partials.dot-loader')
      </div>
      <div class="block w-full max-w-md mx-auto overflow-hidden chat-outer">

        <div class="block translate-y-full opacity-0 chat-inner">

          @svg($chat_svg['url'], 'w-full')
        </div>
      </div>
    </div>
    <div class="bg-white flex-1/2">
    <ul class="flex flex-wrap items-center justify-center max-w-2xl p-8 lg:pt-64" data-anim-in-children>

      @foreach ($improvements as $image)
      <li class="w-full min-h-0 p-2 flex-200 lg:flex-1/2 try-shadow">
        @include('partials.image-element', ['image'=> $image, 'args' => ['max_width' => 600]])
      </li>
      @endforeach
    </ul>
  </div>

  </div>
</section>
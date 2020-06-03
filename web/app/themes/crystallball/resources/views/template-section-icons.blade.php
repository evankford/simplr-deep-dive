{{--
  Template Name: Icons
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
  <div class="block w-full h-auto m-auto lg:flex max-w-7xl">
    <div class="relative p-12 py-24 overflow-hidden flex-1/2 rounded-tl-huge rounded-br-huge bg-var-text lg:px-24">
      <div class="max-w-md mx-auto text-left inner bg-var-text text-var-bg">
        @include('partials.image-element', ['image'=> $left_logo, 'args' => ["classes" => 'inline-block max-w-3xs h-12 object-contain-child']])
        <p class="my-6 text-lg">{{$left_text}}</p>
        <ul data-anim-in-children class="flex flex-wrap">
          @foreach($left_gallery as $icon)
          <li class="p-2 flex-1/2 ">
            @include('partials.image-element', ['image'=> $icon, 'args' => ["classes" => ' inline-block max-w-3xs h-12 object-contain-child']])
          </li>
          @endforeach
        </ul>
      </div>
      <div class="absolute"></div>
    </div>
    <div class="p-12 flex-1/2 lg:p-24">
      <div class="text-left inner mx-automax-w-md ">
        @include('partials.image-element', ['image'=> $right_logo, 'args' => ["classes" => ' max-w-3xs w-32 inline-block max-w-full h-20 object-contain-child mr-auto']])
        <p class="my-6 text-lg">{{$right_text}}</p>
        <ul data-anim-in-children class="flex flex-wrap">
          @foreach($right_gallery as $icon)
          <li class="w-24 p-2 flex-1/2">
            @include('partials.image-element', ['image'=> $icon, 'args' => ["classes" => '  max-w-3xs  inline-blockmax-w-full h-12 object-contain-child mr-auto']])
          </li>
          @endforeach
        </ul>
      </div>
    </div>
  </div>
</section>
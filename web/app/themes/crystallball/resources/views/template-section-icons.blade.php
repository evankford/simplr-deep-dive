{{--
  Template Name: Icons
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
  <div class="block lg:flex w-full h-auto max-w-7xl m-auto">
    <div class="flex-1/2 overflow-hidden relative rounded-tl-huge rounded-br-huge bg-var-text p-12 py-24 lg:px-24">
      <div class="inner mx-auto max-w-md text-left bg-var-text text-var-bg">
        @include('partials.image-element', ['image'=> $left_logo, 'args' => ["classes" => 'inline-block max-w-3xs h-12 object-contain-child']])
        <p class="my-6 text-lg">{{$left_text}}</p>
        <ul data-anim-in-children class="flex flex-wrap">
          @foreach($left_gallery as $icon)
          <li class="p-2 flex-1/2 md:flex-1/3 ">
            @include('partials.image-element', ['image'=> $icon, 'args' => ["classes" => ' inline-block max-w-4xs h-12 object-contain-child']])
          </li>
          @endforeach
        </ul>
      </div>
      <div class="absolute"></div>
    </div>
    <div class="flex-1/2 p-12 lg:p-24">
      <div class="inner  mx-automax-w-md text-left ">
        @include('partials.image-element', ['image'=> $right_logo, 'args' => ["classes" => ' max-w-3xs w-32 inline-block max-w-full h-20 object-contain-child mr-auto']])
        <p class="my-6 text-lg">{{$right_text}}</p>
        <ul data-anim-in-children class="flex flex-wrap">
          @foreach($right_gallery as $icon)
          <li class="p-2  flex-1/2 md:flex-1/3 w-24">
            @include('partials.image-element', ['image'=> $icon, 'args' => ["classes" => '  max-w-4xs  inline-blockmax-w-full h-12 object-contain-child mr-auto']])
          </li>
          @endforeach
        </ul>
      </div>
    </div>
  </div>
</section>
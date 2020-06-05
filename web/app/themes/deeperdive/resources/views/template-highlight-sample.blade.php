{{--
  Template Name: Sample
  Template Post Type: highlight
--}}
@extends('layout.popup')
@section('content')
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
          @foreach($icons as $icon)
          <li class="p-2 flex-1/2 ">
            @include('partials.image-element', ['image'=> $icon, 'args' => ["classes" => ' inline-block max-w-3xs h-12 object-contain-child']])
          </li>
          @endforeach
        </ul>
      </div>
    </div>
  </div>
</section>
@endsection
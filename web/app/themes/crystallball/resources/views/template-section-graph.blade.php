{{--
{{--
  Template Name: Flexibility Graph
  Template Post Type: section, shortsection
--}}

<section id="{{$id}}" data-title="{{$title}}"   data-anim-steps="graph" data-position="ahead" data-index="{{$index}}"  class="section-wrap @if ($full_height) md:min-h-screen @endif  bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>

 @include('partials.icon-header')
  <div class="container p-8 mx-auto my-auto md:p-12 lg:pt-16">
    <div class="flex flex-wrap items-center justify-center lg:flex-no-wrap">
      <div class="max-w-lg flex-300 lg:pr-6">
        @include('partials.single-graph')
      </div>
      <div class="my-6 flex-300 lg:pl-12">
        <h2 data-anim-in class="mb-6 header-resp">{{$single_graph_content['Title']}}</h2>
        <ul data-anim-in-children  class="my-6 md:text-lg">
           @foreach($graph_footer as $item)
        <li class="flex items-center justify-center p-4 flex-200">
          <span class="section-icon"> @include('partials.image-element', ['image' => $item['Icon'], 'args'=> ['max_width' => 300]])</span>
          <span class="w-px h-8 bg-var-accent"></span>
          <span class="pl-8 text-lg text-left flex-140">{{$item['Text']}}</span>
        </li>
      @endforeach
        </ul>
      </div>
    </div>
  </div>

  {{-- <div class="block w-full my-6 my-auto" style="background-color: {{$graph_bar_color}}">
    <ul data-anim-in-children class="container flex flex-wrap items-center justify-center mx-auto">

    </ul>
  </div> --}}
</section>
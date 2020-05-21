{{--
{{--
  Template Name: Flexibility Graph
  Template Post Type: section, shortsection
--}}

<section id="{{$id}}" data-title="{{$title}}"   data-anim-steps="graph" data-position="ahead" data-index="{{$index}}"  class="section-wrap bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>

 @include('partials.icon-header')
  <div class="container p-8 md:p-12  mx-auto mt-auto lg:pt-16">
    <div class="flex flex-wrap lg:flex-no-wrap items-center justify-center">
      <div class="flex-300 max-w-lg lg:pr-6">
        @include('partials.single-graph')
      </div>
      <div class="flex-300 my-6 lg:pl-12">
        <h2 data-anim-in class="header-resp mb-6">{{$single_graph_content['Title']}}</h2>
        <ul data-anim-in-children  class="my-6 md:text-lg">
          @foreach($single_graph_content['List'] as $item)
          @if ($single_graph_content['List Style'] == 'months')
          <li class="my-4 list-none">
            <span class="inline-block mr-3 rounded-full bg-var-accent color-var-bg uppercase text-sm">{{$item['label']}}</span>
            {{$item['Content']}}
          </li>
          @else
          <li class="my-4 list-disc list-inside">
            {{$item['Content']}}
          </li>
          @endif
          @endforeach
        </ul>
      </div>
    </div>
  </div>

  <div class="w-full my-6 block my-auto" style="background-color: {{$graph_bar_color}}">
    <ul data-anim-in-children class="container  mx-auto flex flex-wrap items-center justify-center">
      @foreach($graph_footer as $item)
        <li class="p-4 flex-200 items-center justify-center flex">
          <span class="section-icon"> @include('partials.image-element', ['image' => $item['Icon'], 'args'=> ['max_width' => 300]])</span>
          <span class="w-px h-8 bg-var-accent"></span>
          <span class=" pl-8 flex-140 text-lg text-left">{{$item['Text']}}</span>
        </li>
      @endforeach
    </ul>
  </div>
</section>
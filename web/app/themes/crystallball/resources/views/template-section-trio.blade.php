{{--
{{--
  Template Name: Graph Trio
  Template Post Type: section, shortsection
--}}

<section id="{{$id}}" data-title="{{$title}}"   data-anim-steps="graph" data-position="ahead" class="section-wrap p-8 bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>
  <div class="container w-full m-auto p-8 md:p-12 lg:16">
    <h1 class="text-3xl lg:text-5xl font-medium leading-tight text-center">{{$header}}</h1>
    @include('partials.trio-graph')
    <ul class="flex flex-wrap lg:flex-nowrap graph-list text-lg">
      <li data-step="1" class="p-4 md:p6 lg:p-8 text-darkgray step">
        <span class="block uppercase">A.</span>
        {!!$graph1!!}
      </li>
      <li data-step="2" class="p-4 md:p6 lg:p-8 text-darkgray">
        <span class="block uppercase">B.</span>
        {!!$graph2!!}
      </li>
      <li data-step="3" class="p-4 md:p6 lg:p-8 text-darkgray">
        <span class="block uppercase">C.</span>
        {!!$graph3!!}
      </li>
    </ul>
  </div>

  <hr class="h-1 bg-gray w-full max-w-3xl m-4 lg:m-10">

  <div class="container mx-auto  max-w-3xl mx-auto py-6 md:py-12 ">
    <h2 data-anim-in class="header-resp line-accent max-w-3xl mb-6 lg:mb-8">{{$more_title}}</h2>
    <ul data-anim-in-children="">
      @foreach ($icon_list as $item)
        <li class="flex m-4 text-lg">
          <div class="section-icon">
            @include('partials.image-element', ['image'=>$item['Icon'], 'args' => ["max_width", 450]])
          </div>
          <div class="py-4 text-left">
            <h4 class="text-bold uppercase tracking-wide font-bold">{{$item['Title']}}</h4>
            <p class="text-lg">{{$item['Text']}}</p>
          </div>
        </li>
      @endforeach

    </ul>
  </div>
</section>
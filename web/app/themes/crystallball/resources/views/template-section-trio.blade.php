{{--
{{--
  Template Name: Graph Trio
  Template Post Type: section, shortsection
--}}

<section id="{{$id}}" data-title="{{$title}}"   data-anim-steps="graph" data-position="ahead" data-index="{{$index}}"  class="section-wrap p-8 py-12 md:py-16 lg:pt-24 bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>
  <div class="container w-full p-8 m-auto md:p-12 lg:16">
    <h1 data-anim-in class="text-3xl font-medium leading-tight tracking-tight text-center transform--middle lg:text-5xl">{{$header}}</h1>
    @include('partials.trio-graph')
    <ul class="flex flex-wrap text-lg lg:flex-nowrap graph-list">
      <li data-step="1" class="p-4 text-lg hover-up md:p6 lg:p-8 text-darkgray md:text-xl text-step ">
        <span class="block uppercase">A.</span>
        {!!$graph1!!}
      </li>
      <li data-step="2" class="p-4 text-lg hover-up md:p6 lg:p-8 text-darkgray md:text-xl text-step ">
        <span class="block uppercase">B.</span>
        {!!$graph2!!}
      </li>
      <li data-step="3" class="p-4 text-lg hover-up md:p6 lg:p-8 text-darkgray md:text-xl text-step ">
        <span class="block uppercase">C.</span>
        {!!$graph3!!}
      </li>
    </ul>
  </div>

  <hr class="w-full h-1 max-w-3xl m-4 bg-gray lg:m-10">

  <div class="container max-w-3xl py-6 mx-auto md:py-12 ">
    <h2 data-anim-in class="max-w-3xl mb-6 header-resp line-accent lg:mb-8">{{$more_title}}</h2>
    <ul data-anim-in-children="200">
      @foreach ($icon_list as $item)
        <li class="flex m-4 text-lg">
          <div class="section-icon">
            @include('partials.image-element', ['image'=>$item['Icon'], 'args' => ["max_width", 450]])
          </div>
          <div class="py-4 text-left">
            <h4 class="font-bold tracking-wide uppercase text-bold">{{$item['Title']}}</h4>
            <p class="text-lg">{{$item['Text']}}</p>
          </div>
        </li>
      @endforeach

    </ul>
  </div>
</section>
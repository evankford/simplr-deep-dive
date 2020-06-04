{{--
{{--
  Template Name: Goodbye - Hello
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

  <div class="flex flex-wrap items-start w-auto max-w-5xl p-8 py-24 pt:0 md:items-start md:mt-32 lg:pt-64 md:py-12 md:min-h-90h" data-module="goodbyes">
    <h2 data-anim-in class="z-20 flex-none block min-w-full pt-64 mt-auto md:pt-0 header-resp md:min-w-0 md:m-3 bg-var-bg">Goodbye</h1>
    <div class="flex-none mb-auto goodbye-list__outer md:m-3 ">
      <ul class="goodbye-list" data-anim-in>
        @foreach($goodbyes as $goodbye)
          <li class="mb-4 header-resp goodbye-item">{{$goodbye['Text']}}</li>
        @endforeach
      </ul>
      <div class="absolute top-0 right-0 w-full overflow-visible z-75">@include('partials.clouds')</div>
    </div>
</div>
  <div class="items-center justify-center w-full max-w-6xl pb-32 hello-section lg:pb-48">
    <div class="container flex-wrap items-center justify-center block max-w-2xl mx-auto md:max-w-6xl md:flex">
      <div class="p-6 mx-auto text-center flex-300 md:text-left">
        <h2 data-anim-in class="mb-4 header-resp">{{$title1}} <span class="text-var-accent">{{$title2}}</span></h2>
        <h3 data-anim-in class="text-2xl font-medium subheader-resp ">{{$subtitle}}</p>
      </div>
      <div data-anim-in class="relative -m-12 blocktransform--front flex-400">
        {!! $svg !!}
      </div>
    </div>
  </div>

</section>
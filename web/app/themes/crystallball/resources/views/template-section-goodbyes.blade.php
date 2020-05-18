{{--
{{--
  Template Name: Goodbye - Hello
  Template Post Type: section, shortsection
--}}

<section id="{{$id}}" data-title="{{$title}}"   data-anim-steps="graph" data-position="ahead" class="section-wrap bg-style--{{$bg_style}}">
  <style>
    section#{{$id}} {
      --color-background: {{$color_bg}};
      --color-text: {{$color_text}};
      --color-accent: {{$color_accent}};
      --color-background-end: {{$color_bg_end}}
    }
  </style>

  <div class="flex flex-wrap items-center md:items-start md:mt-32 lg:pt-64 w-auto max-w-5xl min-h-90h">
    <h2 class="header-resp flex-none min-w-full md:min-w-0 mt-auto md:m-3">Goodbye</h1>
    <div class="goodbye-list__outer mb-auto md:m-3 flex-none">
      <ul class="goodbye-list">
        @foreach($goodbyes as $goodbye)
          <li class="header-resp mb-4 goodbye-item">{{$goodbye['Text']}}</li>
        @endforeach
      </ul>
    </div>
</div>
  <div class="hello-section w-full max-w-6xl py-24 lg:py-32 items-center justify-center">
    <div class="container max-w-2xl mx-auto md:max-w-6xl block md:flex flex-wrap items-center justify-center">
      <div class="flex-300 p-6 mx-auto text-center md:text-left">
        <h2 class="header-resp mb-4">{{$title1}} <span class="text-var-accent">{{$title2}}</span></h2>
        <h3 class="font-medium subheader-resp text-2xl ">{{$subtitle}}</p>
      </div>
      <div class="flex-400 -m-12">
        {!! $svg !!}
      </div>
    </div>
  </div>
</section>
<div class="fixed z-30 flex flex-col items-center justify-center w-full h-full min-h-screen p-8 text-black expanded all-links" data-scene="expanded" data-status="pre">
  <h1 data-anim-in class="absolute top-0 w-full h-auto p-6 pt-12 text-center header-resp text-blue">We work hard to keep things simple</h1>

  <div class="invisible customer-links">
    <div class="links-wrap">

      <h2 class="mt-2 mb-4 text-2xl font-semibold leading-tight text-center text-white ">{{$customer_title}}</h2>
      <div class="links-box">
        @foreach ($customer_links as $link)
          @php
          $img = get_field('Icon', $link);
          @endphp
          <button class="text-lg sample-button" data-id="{{$link}}"><i class="flex items-center justify-center w-8 h-6 m-1 text-lightblue">@svg($img)</i><span>@title($link)</span></button>
        @endforeach
      </div>
    </div>
  </div>
  <div class="invisible simplr-links">
      <div class="links-box">
        @foreach ($simplr_links as $link)
          @php
          $img = get_field('Icon', $link);
          @endphp
          <button class="text-lg sample-button" data-id="{{$link}}"><i class="flex items-center justify-center w-8 h-6 m-1 text-lightblue">@svg($img)</i><span>@title($link)</span></button>
        @endforeach
      </div>
  </div>
  <div class="invisible specialist-links">
    <div class="links-wrap">

      <h2 class="mt-2 mb-4 text-2xl font-semibold leading-tight text-center text-white ">{{$specialist_title}}</h2>
      <div class="links-box">
        @foreach ($specialist_links as $link)
          @php


          $img = get_field('Icon', $link);

          @endphp
          <button class="text-lg sample-button" data-id="{{$link}}"><i class="flex items-center justify-center w-8 h-6 m-1 text-lightblue">@svg($img)</i><span>@title($link)</span></button>
        @endforeach
      </div>
    </div>
  </div>

  <div class="whip">
    <svg class="hidden"  data-whip xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1413.22 606.27"><defs><style>.whip-path{fill:none;stroke:#3fafe1;stroke-miterlimit:10;stroke-width:10px;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="whip-path" d="M1312.76,604.52c-15.38-41.34,33.73-122.36,59-192,6.09-16.77,77.33-174.43,2.34-264.13C1290.49,48.33,975,5.66,763,5.05,597.35,4.57,149.59,5,39.86,149.51-62.3,284,89.17,399.41,123.93,454.3s19.69,150.22,19.69,150.22"/></g></g></svg>
    <div class="absolute hidden bg-white rounded-full w-line h-line blob"></div>
    <div class="absolute hidden rounded-full w-line h-line blob bg-offwhite"></div>
    <div class="absolute hidden rounded-full w-line h-line blob bg-offwhite"></div>
    <div class="absolute hidden rounded-full w-line h-line blob bg-offwhite"></div>
    <div class="absolute hidden bg-white rounded-full w-line h-line blob"></div>
    <div class="absolute hidden rounded-full w-line h-line blob bg-offwhite"></div>
    <div class="absolute hidden bg-white rounded-full w-line h-line blob"></div>
    <div class="absolute hidden rounded-full w-line h-line blob bg-offwhite"></div>
    <div class="absolute hidden rounded-full w-line h-line blob bg-offwhite"></div>
  </div>

  <div class="invisible chat-timeline z-75" data-timeline>
    @foreach ($timeline as $item)
    @php
      $highlights = '';
      $counter = 0;
      foreach($item['Settings']['Highlighted Links'] as $link) {
        if (counter > 0)  {
          $highlights .= ',';
        }
        $highlights .= $link;
      }
    @endphp

      @if ($item['acf_fc_layout'] == 'Message' )
      <div class="invisible message expanded" data-status="inactive" data-author="{{$item['Settings']['Author']}}"  data-links="{{$highlights}}"><div class="speech-bubble" >{{$item['Message']}}</div></div>
      @elseif ($item['acf_fc_layout'] == 'Simplr')
      <div class="invisible text-xl simplr-message" data-status="inactive" data-author="Simplr" data-links="{{$highlights}}">{{$item['Message']}}</div>
      @endif
    @endforeach
  </div>
</div>
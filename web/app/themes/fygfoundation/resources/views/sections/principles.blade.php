<section class="relative z-10 flex flex-wrap items-center justify-center w-full px-1 px-3 py-12 py-32 m-0 overflow-hidden text-white bg-blacker clip-bottom section-principles bg-gradient-midnight deco-bottom md:px-6 lg:py-32 lg:px-8 min-h-90h">
  <div data-anim-in-children class="container flex flex-wrap items-center justify-center py-20 mx-auto my-24px">
    @if ($principles_title)
      <h4 class="px-6 mb-24 text-center header-label flex-full font-size-xl">
          [{{$principles_title}}]
      </h4>
    @endif
    @foreach($principles_content as $item)
    <div class="flex items-center justify-start max-w-3xl p-6 flex-some">
      <div class="flex-spacer max-w-2xs ">
        @include('partials.image-element', ['image'=>$item['Icon']])
      </div>
      <div class="pl-12 text-left flex-200">
        @if ($item['Content'])
        <h5 class=" header-label text-aqua">
          [{{$item['Title']}}]
        </h5>
        @else
        <h2 class="header-mega">{{$item['Title']}}</h2>
        @endif
        <p class="mt-4 font-size-sm lg:font-size-md">{{$item['Content']}}</p>

      </div>
    </div>
    @endforeach
  </div>
</section>
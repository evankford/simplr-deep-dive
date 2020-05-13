
<section class="relative z-50 pt-32 pb-24 -my-24 text-white lg:-my-32 xl:-mb-48 bg-gradient-midnight clip-both section-team lg:pb-32">
  <div class="container max-w-5xl px-3 mx-auto mt-4 mb-24 ">
    @if ($team_header)
       <h4 data-anim-in class="mb-8 text-center header-label">[{{$team_header}}]</h2>
    @endif
      <div data-anim-in-children class="flex flex-wrap items-center justify-center">
        @foreach($team as $member)
          <div class="flex flex-wrap items-start justify-center p-3 px-6 m-4 my-8 text-black bg-white rounded shadow-fun flex-full">
              <div class="relative max-w-md mb-8 -mt-12 -ml-12 overflow-hidden rounded shadow-lg flex-300 lg:mb-4">
                <div class="relative image-square pb-full">
                  @include('partials.image-element', ['image'=> $member['Header']['Image'], 'args' => ['max_width' => 600, 'is_bg' => true]])
                </div>
              </div>
              <div class="my-5 p-7 flex-most md:my-0 md:pl-12">
                <h4 class="my-4 text-3xl font-bold md:text-4xl text-salmon">{{$member["Header"]['Name']}}</h4>
                <h6 class="my-4 header-label">[{{$member["Header"]['Title']}}]</h6>
                <div class="text-sm rte">
                  {!!$member['About']!!}
                </div>
              </div>
          </div>
        @endforeach
      </div>
  </div>
</section>

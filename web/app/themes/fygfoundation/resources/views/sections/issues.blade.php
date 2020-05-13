<section class="pt-8 pb-24 mt-8 impact-wrap clip-top lg:pb-32 lg:mt-12" >
  @foreach($issue_pairs as $pair)
    <div data-anim-in-issue class="container flex flex-wrap items-center justify-center p-8 mx-auto lg:flex-nowrap">
      <div class="pr-12 flex-300 lg:pb-32 md:pr-0">
        <div class="my-4 header-label">{{$pair['Issue Title']}}</div>
        <div class="text-lg rte">{!!$pair['Issue Content']!!}</div>
      </div>
      <div class="h-32 p-8 mt-12 text-white opacity-50 fill-current md:opacity-75 max-w-2xs flex-200 small-arrows md:h-auto">
        @svg('images.arrow')
      </div>
      <div class="pl-12 flex-300 lg:pt-32 md:pl-0">
        <div class="my-4 header-label">{{$pair['Approach Title']}}</div>
        <div class="text-lg rte">{!!$pair['Approach Content']!!}</div>
      </div>
    </div>
  @endforeach
</section>

<section class="section-team text-white clip-bottom bg-orange relative pb-24 lg:pb-32">
  <div class="partners-bg max-h-75h top-0 w-full h-full absolute z-0 block">
    @include('partials.image-element', ['image' => $team_bg, 'args' => ['is_bg' => true]])
  </div>
   <div class="mt-16 lg:mt-24 mx-auto relative z-20 max-w-5xl p-6 container flex flex-wrap items-center justify-start lg:justify-center ">
    <div  class="flex-300 m-3 max-w-lg pr-24 sm:pr-12 text-white ">
      @include('partials.flex-content', ['content' => $team_content_1])
    </div>
    <div class="flex-300 m-3 max-w-xl text-white">
      @include('partials.flex-content', ['content' => $team_content_2])
    </div>
  </div>
  <div class="partners-list container mb-24 px-3 mt-4 max-w-5xl mx-auto">
    @if ($team_header)
       <h4 data-anim-in class="header-label text-center mb-8">[{{$team_header}}]</h2>
    @endif
      <div data-anim-in-children class="flex flex-wrap items-stretch justify-center">
        @foreach($team as $member)
          <div class="flex-some md:flex-300  m-2 md:m-3 p-3 text-black bg-white rounded shadow-lg flex flex-wrap items-start justify-center">
              <div class="max-w-xs flex-some rounded overflow-hidden">
                @include('partials.image-element', ['image'=> $member['Image'], 'args' => ['max_width' => 600]])
              </div>
              <div class="flex-most my-5 md:my-0 pl-0 md:pl-5">
                <h4 class="header-label">[{{$member['Name']}}]</h4>
                <p class="text-md">{{$member['Title']}}</h4>
              </div>
          </div>
        @endforeach
      </div>
  </div>
</section>

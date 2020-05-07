<div class="page-header container w-full max-w-4xl text-center mx-auto my-12 lg:mt-24">
  <h1 data-anim-in class="header-mega text-5xl lg:text-6xl xl:text-huge">{!! $title !!}</h1>

  @if ($subtitle = get_field('subtitle'))
  <h4 data-anim-in class="header-label">{{$subtitle}}</h4>
  @endif

</div>

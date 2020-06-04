<div class="relative z-40 w-full overflow-y-visible page-header">
@if ($header_image)
<div class="@if ($background_style == 'offset') container my-12 md:my-18 lg:my-24 w-full @else image-header-full @endif relative z-10 block w-full mx-auto overflow-visible text-center image-header clip-bottom pb-16 lg:pb-24 -mb-24 lg:-mb-36" >

  <div data-anim-in class="opacity-60 absolute top-0 z-0 w-screen h-full @if ($background_style == 'offset') ml-24 lg:ml-48 @endif ">
    @include('partials.image-element', ['image'=>$header_image, 'args' => ['is_bg' => true]])
  </div>
  <div data-anim-in-children class="relative z-20 flex flex-col items-start justify-center h-32 max-w-3xl p-10 mx-auto text-left md:pl-0 md:pb-48 md:pt-24 min-h-50h md:min-h-wide xl:min-h-600x aspect-widescreen">
    @if (is_single())
      <a href="{{get_post_type_archive_link(get_post_type())}}" class="underline transform hover:translate-x-2"><h4 class="header-label">{{post_type_archive_title('', false)}}</h4></a>
    @elseif ($introduction)
    <h4  class="header-label">{{$introduction}}</h4>
    @endif
  <h1  class="my-4 text-6xl header-mega xl:text-huge">{!! $title !!}</h1>
  @if (get_post_type() == 'partnership' && !is_archive() && is_single())
    @include('partials.partner-nav')
  @elseif ($subtitle)
  <h4  class="header-label">{{$subtitle}}</h4>
  @endif
  </div>

</div>

@else

<div data-anim-in-children class="container w-full max-w-4xl mx-auto my-8 text-center page-header lg:mt-24">
  @if ($introduction)
  <h4  class="header-label">{{$introduction}}</h4>
  @endif
  <h1  class="my-4 md:text-6xl header-mega xl:text-huge">{!! $title !!}</h1>
  @if ($subtitle)
  <h4  class="header-label">[{{$subtitle}}]</h4>
  @endif
</div>

@endif
</div>


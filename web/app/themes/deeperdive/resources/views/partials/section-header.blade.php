<div class="max-w-3xl mx-auto my-12 text-center">
  @if($section_header)
    <h2 data-anim-in class="header-resp my-8 @if ($section_decoration) line-accent @endif">{{$section_header}}</h2>
    @if($section_content)
    <h3 data-anim-in class="mt-3 text-opacity-75 subheader-resp">{!!$section_content !!}</h3>
    @endif
  @endif
</div>

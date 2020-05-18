<div class="my-4">
  @if($section_header)
    <h2 data-anim-in class="text-left header-resp @if ($section_decoration) line-accent @endif">{{$section_header}}</h2>
    @if($section_content)
    <h3 data-anim-in class="subheader-resp">{!!$section_content !!}</h3>
    @endif
  @endif
</div>

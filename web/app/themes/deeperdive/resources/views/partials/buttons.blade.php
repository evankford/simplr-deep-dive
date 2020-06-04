

<div class="button-wrap">
  @foreach($buttons as $button)
    <a data-text="{{$button['URL']['title']}}" class="m-2 text-white button color-pink" href="{{$button['URL']['url']}}"
    {{ App\Helpers\Buttoner::getTarget($button['URL'])}}
    aria-label="{{$button['URL']['title']}}">
    @if (isset($button['button']) && $button['button'] != null)
      <i class="button-{{$button['button']}}"></i>
    @endif
    <span  class="button-title">{{$button['URL']['title']}}</span>
    </a>
  @endforeach
</div>
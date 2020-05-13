
<div class="tracking-wider post-nav">

  @php $prev_post = get_adjacent_post(false, '', true); @endphp
  @if ($prev_post)
  <x-button icon="" classes="uppercase text-sm tracking-wider mr-4" href="{{get_permalink($prev_post->ID)}}"><i class="icon-left-circled"></i> {{ $prev_post->post_title }}</x-button>
  @endif
  @php $next_post = get_adjacent_post(false, '', false); @endphp
  @if ($next_post)
  <x-button icon="right-circled" classes="uppercase tracking-wider text-sm" href="{{get_permalink($next_post->ID)}}">{{ $next_post->post_title }}</x-button>
  @endif

</div>

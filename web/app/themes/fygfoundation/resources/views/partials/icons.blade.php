<?php
use App\Helpers\Buttoner;
?>
<div class="icon-wrap">
  {{$icon['icon_url']}}
    @foreach($icons as $icon)
    <x-icon
      href="{{$icon['URL']['url']}}"
      icon="{{$icon['icon']['U']}}"
      title="{{$icon['URL']['title']}}"
      :show_title="$icon['Show Title']">
    </x-icon>
  @endforeach
</div>
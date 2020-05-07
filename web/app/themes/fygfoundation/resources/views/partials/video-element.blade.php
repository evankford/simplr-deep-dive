
  <div data-play="{{ $play }}" data-vidbox-type="{{$type}}" data-module="vidbox" class="vidbox{{ $rellax }} {{ $classes }} type--{{$type}}"   style="background-color: {{ $bg }}; color: {{ $text }};">
  <style>
    .vidbox {
      --background-color: {{ $bg }};
      --text-color: {{ $text }};
    }
    </style>

    @if ($type == 'URL')
    <div class="vidbox__video"  data-vidbox-video="{{ $url }}" >
    <div class="vidbox-content">Watch The New Video</div>
    </div>
    @else
    <video autoplay muted loop playsinline class="top-0 left-0 z-20 hidden object-cover object-center w-full h-auto max-w-full min-h-full opacity-50 lg:block vidbox__video" data-large-mp4="{{ $mp4 }}" data-large-webm="{{ $webm }}" poster="{{ $poster }}">
      <source type="video/webm" src="{{ $webm_small }}">
      <source type="video/mp4" src="{{ $mp4_small }}">
      </video>
      <video autoplay muted loop playsinline class="fixed top-0 left-0 z-20 w-auto h-full vertical lg:hidden" class="vidbox__video" data-large-mp4="{{ $mp4_vertical }}" data-large-webm="{{ $webm_vertical }}" poster="{{ $poster }}">
        <source type="video/webm" src="{{ $webm_small_vertical }}">
          <source type="video/mp4" src="{{ $mp4_small_vertical }}">
        </video>
      @endif
    <div data-fallback-image class="absolute w-full h-full">
    @include('partials.image-element', ['image' => $fallback_image, 'args' => ['classes'=> 'z-0', 'is_bg' => true, 'small_width' => 900]])
    </div>
  </div>
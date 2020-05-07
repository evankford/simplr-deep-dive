@if ($gallery)
<div class="gallery-hover">
  @foreach ($gallery as $gallery_image)
      @include('partials.image-element', ['image'=> $gallery_image, 'args' => ["classes" => "gallery-image"]])
  @endforeach
</div>
@endif
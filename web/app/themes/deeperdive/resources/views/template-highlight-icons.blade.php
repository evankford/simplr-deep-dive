{{--
  Template Name: Icons
  Template Post Type: highlight
--}}
@include('partials.highlight-starter')
  <main >
    <div class="flex flex-wrap items-center justify-center icon-grid" data-anim-in-children>

      @foreach ($logos as $logo)
        <div class="w-32 h-24 m-4 object-contain-child">
          @include('partials.image-element', ['image' => $logo])
        </div>
      @endforeach
    </div>
    <div class="my-6 text-center button-wrap" data-anim-in>

      <x-button icon="right-1">See How It Works</x-button>
    </div>
  </main>
</section>

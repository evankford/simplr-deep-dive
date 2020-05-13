
<section class="relative z-50 p-8 py-40 mx-auto -mt-24 overflow-hidden md:-mt-32 lg:-mt-48 bg-gradient-midnight deco-top clip-both-notfirst" data-module="animate-gradient">
  @if($title)
  <h2 data-anim-in class="max-w-3xl mx-auto mb-12 header-mega">{{$title}}</h2>
  @endif
  <div data-anim-in-children class="container flex flex-wrap items-stretch justify-start mx-auto my-8">
    @if ($post_type)
    @query([
      'post_type' => $post_type,
      'posts_per_page' => $limit
    ])
    @hasposts
      @posts
        @include('partials.excerpt')
      @endposts
    @endhasposts
    @endif
  </div>

  @if($button_text && $button_url)
  <div class="max-w-md mx-auto my-6 text-center">
    <x-button icon="right-circled" href="{{$button_url}}">{{$button_text}}</x-button>
  </div>
  @endif
</section>

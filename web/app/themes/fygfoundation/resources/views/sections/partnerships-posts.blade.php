
<section class="relative z-50 p-8 py-40 mx-auto -my-24 overflow-hidden md:-my-32 lg:-my-48 bg-salmon deco-top clip-both">
  @if($title)
  <h2 class="max-w-3xl mx-auto mb-12 header-mega">{{$title}}</h2>
  @endif
  <div class="container flex flex-wrap items-stretch justify-start mx-auto my-8">
    @php $perpage = $limit ? -1 : $limit @endphp
    @query([
      'post_type' => 'partnership',
      'posts_per_page' => $perpage
    ])
    @hasposts
      @posts
        @include('partials.excerpt')
      @endposts
    @endhasposts
  </div>

  @if($button_text && $button_url)
    <x-button icon="right-circled" href="{{$button_url}}">{{$button_text}}</x-button>
  @endif
</section>

@extends('layouts.app')

@section('content')
<section>
  @include('partials.page-header')
</section>
<section class="relative z-50 p-8 py-40 mx-auto -mt-24 overflow-hidden md:-mt-32 lg:-mt-48 bg-gradient-midnight deco-top clip-both" data-module="animate-gradient">
  @if($title)
  <h2 class="max-w-3xl mx-auto mb-12 header-mega">{{$title}}</h2>
  @endif
  <div class="container flex flex-wrap items-stretch justify-start mx-auto my-8">
    @hasposts
      @posts
        @include('partials.excerpt')
      @endposts
    @endhasposts

    @noposts
    <p class="text-xl">No posts found. Please try again via the menu above!</p>
    @endnoposts
  </div>

  {!! get_the_posts_navigation() !!}

</section>
@endsection

{{-- @section('sidebar')
  @include('partials.sidebar')
@endsection --}}

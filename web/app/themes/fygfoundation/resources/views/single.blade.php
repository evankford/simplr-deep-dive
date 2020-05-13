@extends('layouts.app')

@section('content')
<section class="flex flex-col items-center content-center pb-16 page-standard deco-top bg-gradient-brick min-h-90h md:pb-24" data-module="animate-gradient">
  @include('partials.page-header')

  @while(have_posts()) @php(the_post())
   <div class="my-12 lg:max-w-5xl standard-content">
      @includeFirst(['partials.content-single-' . get_post_type(), 'partials.content-single'])
    </div>
  @endwhile
  </div>
@endsection

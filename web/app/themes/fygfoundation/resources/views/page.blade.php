@extends('layouts.app')

@section('content')
<section class="flex flex-col items-center content-center pb-16 page-standard deco-top bg-gradient-brick min-h-90h md:pb-24" data-module="animate-gradient">
  @while(have_posts()) @php(the_post())
    @include('partials.page-header')
    <div data-anim-in class="container relative px-6 pb-32 z-80 standard-content">
      @includeFirst(['partials.content-page', 'partials.content'])
    </div>
    @endwhile
</section>

@if ($include_about)
@include('partials.about')
@endif
@endsection

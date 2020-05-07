@extends('layouts.app')

@section('content')
<section class="page-standard px-6 deco-top bg-gradient-brick min-h-90h flex flex-col items-center content-center pb-32" data-module="animate-gradient">
  @while(have_posts()) @php(the_post())

    @include('partials.page-header')
    @includeFirst(['partials.content-page', 'partials.content'])


    @endwhile
</section>
@endsection

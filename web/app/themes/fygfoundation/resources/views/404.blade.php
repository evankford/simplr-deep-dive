@extends('layouts.app')

@section('content')
<section class="page-standard page-404 px-6 deco-top bg-gradient-brick min-h-90h flex flex-col items-center content-center pb-32" data-module="animate-gradient">
  @include('partials.page-header')

  @if (! have_posts())
    <x-alert type="warning">
      {!! __('Sorry, but the page you are trying to view does not exist.', 'sage') !!}
    </x-alert>

    {!! get_search_form(false) !!}
  @endif
  </section>
@endsection

@extends('layouts.app')

@section('content')
<section class="flex flex-col items-center content-center px-6 pb-32 clip-bottom page-standard deco-top bg-gradient-brick min-h-90h" data-module="animate-gradient">
    @include('partials.page-header', ['title' => '404', 'subtitle' => 'Page Not Found'])
    <div class="container standard-content ">
      @if (! have_posts())
    <x-alert type="warning">
      {!! __('Sorry, but the page you are trying to view does not exist.', 'sage') !!}
    </x-alert>
    @endif
</section>

@include('sections.about')
@endsection
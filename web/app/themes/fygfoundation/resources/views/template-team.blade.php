{{--
  Template Name: Team Page
  Template Post Type: page, post
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
  <section>
    @include('partials.page-header')
  </section>
  @include('sections.team')

    @include('sections.about')

  @endwhile

@if ($include_about)
@include('partials.about')
@endif
@endsection

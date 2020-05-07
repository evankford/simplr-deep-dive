{{--
  Template Name: Home Page
  Template Post Type: page, post
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())

  @include('sections.hero')
  @include('sections.impact-home')
  @include('sections.about')

  @endwhile
@endsection

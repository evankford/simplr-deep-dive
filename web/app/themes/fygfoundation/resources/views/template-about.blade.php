{{--
  Template Name: About Page
  Template Post Type: page, post
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())

  @include('sections.hero')
  @include('sections.principles')

  @unless(get_field('include_more') == false)
    @include('sections.about')
  @endunless

  @endwhile
@endsection

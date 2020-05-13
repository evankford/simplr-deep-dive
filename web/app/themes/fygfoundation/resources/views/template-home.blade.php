{{--
  Template Name: Home Page
  Template Post Type: page, post
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())

  @include('sections.hero')
  @include('sections.impact-home')
  @include('sections.posts', ['post_type' => 'partnership', 'limit' => 2, 'title' => 'Featured Partnerships', 'button_text'=>"More Partnerships", 'button_url' => get_post_type_archive_link('partnership')])
  @include('sections.about')

  @endwhile
@endsection

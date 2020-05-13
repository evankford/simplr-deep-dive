{{--
  Template Name: Partners Page
  Template Post Type: page, post
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())

  @include('sections.posts', ['post_type' => 'partnership', 'limit' => -1, 'title' => "Our Partnerships", 'button_text'=> 'More Partnerships','button_url' => get_post_type_archive_link('partnership')])
  @include('sections.partners')
  {{-- @include('sections.posts', ['post_type' => 'activation', 'limit' => 2, 'title' => "Featured Activations"]) --}}

  @unless(get_field('include_more') == false)
    @include('sections.about')
  @endunless

  @endwhile
@endsection

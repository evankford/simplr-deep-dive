{{--
  Template Name: Impact Page
  Template Post Type: page, post
--}}

@extends('layouts.app')

@section('content')
<div class="flex flex-col items-center content-center pb-16 page-standard deco-top bg-gradient-midnight min-h-90h md:pb-24" data-module="animate-gradient">
  <section>
    @include('partials.page-header')
  </section>

  @include('sections.issues')
</div>
  @include('sections.posts', ['post_type' => 'partnership', 'limit' => 2, 'title' => "Featured Partnerships", 'button_text'=> 'More Partnerships','button_url' => get_post_type_archive_link('partnership')])

@if ($include_about)
@include('partials.about')
@endif
@endsection

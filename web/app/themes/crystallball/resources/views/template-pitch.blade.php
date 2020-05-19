{{--
  Template Name: Pitch
  Template Post Type: page, pitch
--}}

@extends('layouts.app')

@section('content')

<?php if (current_user_can('edit_posts')) {
	echo '<script>var preAuth = true;</script>';
}?>


@php $sectionIds = array_column($sections, 'ID')@endphp
@query(
  [
    'post_type' => 'section',
    'post__in' => $sectionIds,
    'orderby' => $sectionIds,
    'order' => "ASC",
    'posts_per_page'=> -1
  ]
)
@include('partials.pitch-header')

{{-- {{var_dump($query)}} --}}
@php $loopIndex = 0; @endphp
@posts
  @php $slug = str_replace('.blade.php' , '' , get_page_template_slug());@endphp
  @include($slug, ['index' => $loopIndex])

  @php $loopIndex++; @endphp
@endposts


@endsection

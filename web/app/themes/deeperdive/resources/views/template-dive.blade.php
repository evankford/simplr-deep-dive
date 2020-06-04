{{--
  Template Name: Dive
  Template Post Type: page, dive
--}}

@extends('layouts.app')

@section('content')

<?php if (current_user_can('edit_posts')) {
	echo '<script>var preAuth = true;</script>';
}?>


@include('scenes.intro')
@include('scenes.chat')
@include('scenes.expanded')



@endsection

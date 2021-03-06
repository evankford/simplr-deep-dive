@extends('layouts.app')

@section('content')
  @include('partials.page-header')

  @if (! have_posts())
    <x-alert type="warning">
      {!! __('Sorry, no results were found.', 'sage') !!}
    </x-alert>

    {!! get_search_form(false) !!}
  @endif

  @while(have_posts()) @php(the_post())
  <div class="my-12 standard-content">
    @includeFirst(['partials.content-' . get_post_type(), 'partials.content'])
  </div>
  @endwhile

  {!! get_the_posts_navigation() !!}
@endsection

{{-- @section('sidebar')
  @include('partials.sidebar')
@endsection --}}

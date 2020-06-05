
@include('partials.authwall')
@include('partials.mobilewall')

  <main class="min-h-screen text-white main bg-offwhite" id="MainContent">
    @yield('content')
  </main>

{{-- @include('partials.footer') --}}

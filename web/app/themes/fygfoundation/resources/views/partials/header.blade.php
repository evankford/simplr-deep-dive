<header class="banner" data-module="header">
  <div class="block w-full h-6 spacer lg:h-12"></div>
  <div class="container flex items-center justify-between px-4 mx-auto md:px-6 ">
    <a class="relative pr-24 mr-auto brand flex-200 md:pr-18 min-w40 max-w-2xs z-101" href="{{ home_url('/') }}" data-header-logo>
      @if ($header_logo)
      @include('partials.image-element', ["image"=> $header_logo, "max_width" => 900])
      @else
      {{ $siteName }}
      @endif
    </a>

    <nav class="hidden max-w-md md:block nav-primary flex-200" data-header-menu>
      @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
      @endif
    </nav>

     @if($header_socials && $socials)
      <div class="hidden block mx-4 text-left social-list lg:block text-aqua">
        @foreach ($socials as $icon)
              <x-icon
              class="p-1 mr-1"
              target="{{$icon['URL']['target']}}"
              href="{{$icon['URL']['url']}}"
              icon="{{$icon['icon']}}"
              title="{{$icon['URL']['title']}}"
              :show-title="$icon['Show Title']">
            </x-icon>
        @endforeach
      </div>
    @endif

    <button class="relative block p-3 px-4 text-xl text-white md:hidden bg-blue z-101" data-mobile-menu-toggle=""><i class="icon-times" aria-label="Close Menu" data-close aria-hidden="true"></i><i class="icon-menu" data-open aria-label="Open Menu"></i></button>

    <div class="fixed top-0 left-0 flex flex-col items-center justify-center w-screen h-screen p-12 text-white mobile-nav-wrap bg-blue z-100" data-mobile-menu>
      <nav class="max-w-md max-w-xl nav-mobile w-90" data-header-menu>
        @if (has_nav_menu('primary_navigation'))
          {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
        @endif
      </nav>

        @if($header_socials && $socials)
        <div class="block mt-12 -ml-2 text-left social-list text-aqua">
          @foreach ($socials as $icon)
                <x-icon
                class="p-1 mr-1"
                target="{{$icon['URL']['target']}}"
                href="{{$icon['URL']['url']}}"
                icon="{{$icon['icon']}}"
                title="{{$icon['URL']['title']}}"
                :show-title="$icon['Show Title']">
              </x-icon>
          @endforeach
        </div>
        @endif
    </div>
  </div>
  <div class="block w-full h-6 spacer lg:h-12"></div>
</header>
<div class="header-bg"></div>
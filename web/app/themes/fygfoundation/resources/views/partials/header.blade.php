<header class="banner" data-module="header">
  <div class="spacer h-6 block w-full lg:h-12"></div>
  <div class="container mx-auto flex items-center justify-between px-4 md:px-6 ">
    <a class="brand mr-auto flex-200 pr-24 md:pr-18 min-w40 max-w-2xs mr-auto relative z-101" href="{{ home_url('/') }}" data-header-logo>
      @if ($header_logo)
      @include('partials.image-element', ["image"=> $header_logo, "max_width" => 900])
      @else
      {{ $siteName }}
      @endif
    </a>

    <nav class="hidden md:block nav-primary flex-200 max-w-sm" data-header-menu>
      @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
      @endif
    </nav>

     @if($header_socials && $socials)
      <div class="social-list hidden lg:block text-left block  -ml-2 text-aqua">
        @foreach ($socials as $icon)
              <x-icon
              class="mr-1 p-1"
              target="{{$icon['URL']['target']}}"
              href="{{$icon['URL']['url']}}"
              icon="{{$icon['icon']}}"
              title="{{$icon['URL']['title']}}"
              :show-title="$icon['Show Title']">
            </x-icon>
        @endforeach
      </div>
    @endif

    <button class=" p-3 px-4 block md:hidden bg-blue text-white text-xl relative z-101" data-mobile-menu-toggle=""><i class="icon-times" aria-label="Close Menu" data-close aria-hidden="true"></i><i class="icon-menu" data-open aria-label="Open Menu"></i></button>

    <div class="mobile-nav-wrap p-12 bg-blue fixed flex flex-col items-center justify-center h-screen w-screen z-100 top-0 left-0 text-white" data-mobile-menu>
      <nav class="nav-mobile max-w-xl w-90 max-w-sm" data-header-menu>
        @if (has_nav_menu('primary_navigation'))
          {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
        @endif
      </nav>

        @if($header_socials && $socials)
        <div class="social-list mt-12 text-left block  -ml-2 text-aqua">
          @foreach ($socials as $icon)
                <x-icon
                class="mr-1 p-1"
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
  <div class="spacer h-6 block w-full lg:h-12"></div>
</header>
<div class="header-bg"></div>
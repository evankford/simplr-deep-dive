<div class="relative z-20 p-3 py-12 pt-24 -mt-20 text-white md:pt-32 lg:pt-48 site-footer-wrap bg-blacker clip-top-subtle">
  <footer class="content-info site-footer " role="contentinfo">
    <div class="container flex flex-wrap items-start justify-start mx-auto md:justify-between">
      <div class="m-5 mr-auto text-center flex-200 first:mt-0 md:mr-12">
          <a href="{{$logo_url}}" class="relative block w-40 md:ml-0 md:w-56 max--sm image-link" target="_blank" rel="noreferrer">
             @if ($logo)
             @include('partials.image-element', ['image'=> $logo, 'args'=>['max_width'=> 600]])
             @endif
          </a>
          @if($socials_enabled && $socials)
          <div class="block mt-4 -ml-2 text-left social-list text-aqua">
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
            {{-- Mailchimp signup with logo/socials --}}
            @if ($signup_enabled && $signup_display == 'button' )
              <a data-signup-button></a>
            @endif
          @endif
      </div>
      @if ($signup_enabled == true && $signup_display == 'inline')

      <div class="m-5 flex-300 lg:mr-12">
          @php echo do_shortcode("[ninja_form id=" . $signup_form . "]") @endphp
        </div>
      @endif
      @if ($menus_enabled && has_nav_menu('footer_navigation'))
      <div class="m-5 text-left flex-140 max-w-2xs lg:mx-8">
        @if($menu_title_1)
        <h4 class="mb-3 font-bold tracking-wider uppercase text-10 opacity-80">{{$menu_title_1}}</h4>
        @endif
          {{wp_nav_menu(['theme_location' => 'footer_navigation', 'walker' => new \App\Helpers\Walker(), "container" => false, "items_wrap" => '<ul id="%1$s" class="%2$s" role="menubar">%3$s</ul>'])}}
      </div>
      @endif
      @if ($menus_enabled && has_nav_menu('footer_navigation_2'))
      <div class="m-5 text-left flex-140 max-w-2xs lg:mx-8 last:mr-0">
        @if($menu_title_2)
        <h4 class="mb-3 font-bold tracking-wider uppercase text-10 opacity-80">{{$menu_title_2}}</h4>
        @endif
        {{wp_nav_menu(['theme_location' => 'footer_navigation_2', 'walker' => new \App\Helpers\Walker(), "container" => false, "items_wrap" => '<ul id="%1$s" class="%2$s" role="menubar">%3$s</ul>'])}}
      </div>
      @endif
    </div>
    <div class="mx-4 mt-6 text-sm text-center text-white text-opacity-75 footer-super lg:mt-12 lg:mx-8">
      <p class="">&copy; {{ date("Y") }} {{$copyright}}</p>
      <p class="mt-4 align-top">An <a class="mx-1 -mb-px align-top hover-after" href="https://evankerrickford.com" target="_blank"  rel="nofollow noopener">ekf</a> site</p>
    </div>
  </footer>
  @include('partials.browser-update')
</div>

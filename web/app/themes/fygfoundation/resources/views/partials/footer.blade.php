<div class=" site-footer-wrap bg-black text-white p-3 py-12 pt-40 -mt-20 clip-top-subtle">
  <footer class="content-info site-footer " role="contentinfo">
    <div class="flex flex-wrap container mx-auto items-start justify-start md:justify-between">
      <div class="flex-200 first:mt-0 m-5 mr-auto md:mr-12 text-center">
          <a href="{{$logo_url}}" class="relative block w-40  md:ml-0 md:w-56 max--sm image-link" target="_blank" rel="noreferrer">
             @if ($logo)
             @include('partials.image-element', ['image'=> $logo, 'args'=>['max_width'=> 600]])
             @endif
          </a>
          @if($socials_enabled && $socials)
          <div class="social-list text-left block mt-4 -ml-2 text-aqua">
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
            {{-- Mailchimp signup with logo/socials --}}
            @if ($signup_enabled && $signup_display == 'button' )
              <a data-signup-button></a>
            @endif
          @endif
      </div>
      @if ($signup_enabled == true && $signup_display == 'inline')

      <div class="flex-300 m-5 lg:mr-12">
          @php echo do_shortcode("[ninja_form id=" . $signup_form . "]") @endphp
        </div>
      @endif
      @if ($menus_enabled && has_nav_menu('footer_navigation'))
      <div class="flex-140 max-w-2xs text-left m-5 lg:mx-8">
        @if($menu_title_1)
        <h4 class="font-bold text-10 uppercase tracking-wider mb-3 opacity-80">{{$menu_title_1}}</h4>
        @endif
          {{wp_nav_menu(['theme_location' => 'footer_navigation', 'walker' => new \App\Helpers\Walker(), "container" => false, "items_wrap" => '<ul id="%1$s" class="%2$s" role="menubar">%3$s</ul>'])}}
      </div>
      @endif
      @if ($menus_enabled && has_nav_menu('footer_navigation_2'))
      <div class="flex-140 max-w-2xs text-left m-5 lg:mx-8 last:mr-0">
        @if($menu_title_2)
        <h4 class="font-bold text-10 uppercase tracking-wider mb-3 opacity-80">{{$menu_title_2}}</h4>
        @endif
        {{wp_nav_menu(['theme_location' => 'footer_navigation_2', 'walker' => new \App\Helpers\Walker(), "container" => false, "items_wrap" => '<ul id="%1$s" class="%2$s" role="menubar">%3$s</ul>'])}}
      </div>
      @endif
    </div>
    <div class="footer-super text-center mt-6 lg:mt-12 mx-4 lg:mx-8 text-white text-opacity-75 text-sm">
      <p class="">&copy; {{ date("Y") }} {{$copyright}}</p>
      <p class="mt-4 align-top">An <a class="hover-after -mb-px align-top mx-1" href="https://evankerrickford.com" target="_blank"  rel="nofollow noopener">ekf</a> site</p>
    </div>
  </footer>
  @include('partials.browser-update')
</div>

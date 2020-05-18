
<header class="banner pitch-header w-full absolute z-100 flex justify-between items-start" data-module="header">
  <div class="site-logo w-32 inline-block md:w-40 flex flex-col items-center justify-center h-16  md:h-20 p-4">@include('partials.image-element', ['image' => $logo, 'args' =>[ 'max_width' => 450]])</div>
  <button data-mobile-menu-toggle class="relative z-100 w-16 h-16  text-xl lg:text-2xl flex items-center justify-center bg-lightblue text-white text-xl"><i data-open aria-label="Open Menu" class="inline-block icon-menu"></i> <i data-close aria-label="Open Menu" class="inline-block icon-times" aria-hidden="true"></i></button>
</header>
<div data-mobile-menu class="z-75 fixed header-menu top-0 left-0 w-full h-full flex items-stretch justify-end">
    <div class="header-bg bg-black " data-close-menu ></div>
    <div class="relative z-20 container max-w-3xl p-6 lg:pt-32 md:px-12 max-w-3xl w-85p bg-lightblue text-white">
      <ul class="max-w-xl mx-auto">
        @posts
        <li data-index="{{$loop->index}}" class="block my-2 @if (get_field('Main') > 0) font-bold text-lg lg:text-xl mt-4 @else lg:text-lg pl-4 @endif">
            <a href="#{{get_field('Handle')}}">{{get_field('Title')}}</a>
        </li>
        @endposts
      </ul>
    </div>
  </div>
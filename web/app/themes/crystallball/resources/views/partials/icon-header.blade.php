@if ($section_icon || $section_icon_title)
<div class="flex mr-auto items-center justify-start mb-4 p-4 md:pl-12 lg:absolute lg:left-0 lg:w-full">
    @if ($section_icon)<div data-anim-in class="section-icon">@svg($section_icon['url'], 'w-full h-full')</div>@endif
    @if ($section_icon_title) <h4 data-anim-in class="header-label">{{$title}}</h4> @endif
</div>
@endif
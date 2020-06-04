<a
    data-anim-in
    data-text="{{ $text ?? $slot }}"
    {{$attrs}}
    data-button="{{$button}}"
    data-button-scene="{{$scene}}"
    href="{{$href}}" {{$target}}
    class=" hover-blue button {{$classes}}"><span class="leading-none align-center">{!! $text ?? $slot !!}</span>@unless ($icon == false) <i class="relative inline-block align-center z-10 ml-1 icon-{{$icon}}"></i>@endunless</a>
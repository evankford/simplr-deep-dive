<a
{{-- data-text="{{ $text ?? $slot }}" --}}
    href="{{$href}}" {{$target}}
    class=" hover-blue inline-block  bg-black text-white px-5  py-2 leading-tight rounded-full my-3 button {{$classes}}">{!! $text ?? $slot !!}@unless ($icon == false) <i class="relative inline-block z-10 ml-2 icon-{{$icon}}"></i>@endunless</a>
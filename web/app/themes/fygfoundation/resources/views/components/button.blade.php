<a  data-text="{{ $text ?? $slot }}"
    href="{{$href}}" {{$target}}
    class="{{$class}} hover-blue inline-block text-lg bg-black text-white px-5 lowercase py-2 leading-tight rounded-full my-3">{{ $text ?? $slot }}@unless ($icon == false)<i class="relative inline-block z-10 ml-2 icon-{{$icon}}"></i>@endunless</a>
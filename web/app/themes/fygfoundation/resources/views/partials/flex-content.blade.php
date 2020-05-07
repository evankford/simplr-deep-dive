<div class="flex-content" data-anim-in-children>
  @foreach($content as $item)
    @if($item['acf_fc_layout'] == 'paragraph')

    <div class="flex-content__paragraph sm:text-lg">
      {!!$item['text']!!}
    </div>

    @elseif($item['acf_fc_layout'] == 'image')

    @include('partials.image-element', ['image'=>$item['image'], ['args' => ['classes' => 'flex-content__image']]])

    @elseif($item['acf_fc_layout'] == 'header')
      @if ($item['type'] == 'label')
        <h4 data-style="{{$item['type']}}" class="header-label flex-content__header">
          [{{$item['header']}}]
        </h4>
      @elseif ($item['type'] == 'mega')
      <h2 data-style="{{$item['type']}}" class="header-mega lg:text-6xl break-words flex-content__header">
          {{$item['header']}}
        </h2>
      @else

      @endif
    @elseif($item['acf_fc_layout'] == 'button')
      <x-button icon="right-circled" class="test" href="{{$item['button']['URL']['url']}}" target="{{$item['button']['URL']['target']}}">{{$item['button']['URL']['title']}}</x-button>
    @endif
  @endforeach
</div>
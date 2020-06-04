<div class="fixed top-0 left-0 z-20 w-full h-full p-12 text-black" data-scene="chat"  data-status="pre">
  <style>

    body {
      --color-specialist: {{$specialist['Details']['Color']}};
      --color-customer: {{$customer['Details']['Color']}};
    }
  </style>
  <div class="min-h-full conversation">
      <div class="p-2 conversation__specialist" data-person>
      <div class="max-w-lg m-auto">
        @include('partials.image-element', ['image' => $specialist['Images']['Large Image']])
      </div>
      <hr class="h-1 mb-3 border-none bg-lightblue">
      <div class="flex items-end justify-start overflow-hidden specialist-details">
        <h4 class="mr-2 -mb-px text-2xl font-bold leading-none text-blue">{{$specialist['Details']['Name']}}</h4>
        <h5 class="text-lg font-normal leading-none text-lightblue">{{$specialist['Details']['Title']}}</h5>
      </div>

    </div>
    <div class="conversation__content">
      <div class="chat-outer">
        <div class="chat-inner">
      @foreach ($messages as $message)
      @if ($message['acf_fc_layout'] == 'Message')
      @php $author = strtolower($message['Settings']['Author']) @endphp
        <div class="message" data-author="{{$author}}" data-bubbles="{{$msesage['Settings']['Typing Bubbles?']}}" data-delay="{{$msesage['Settings']['Delay']}}">
          <div class="w-auto m-2 chat-icon">
              @if ($author == 'specialist')
              <div class="block mx-auto mb-1 overflow-hidden rounded-full w-14 bg-var-specialist">
                @include('partials.image-element', ['image' => $specialist['Images']['Icon']])
              </div>
              <div class="p-1 px-2 text-sm leading-none text-center text-white rounded-full bg-var-specialist">Specialist</div>
              @elseif ($author == 'customer')
              <div class="block mx-auto mb-1 overflow-hidden rounded-full w-14 bg-var-customer">@include('partials.image-element', ['image' => $customer['Images']['Icon']])</div>
              <div class="p-1 px-2 text-sm leading-none text-center text-white rounded-full bg-var-customer">Customer</div>
              @endif
          </div>

          <div class="bg-white speech-bubble">
            <div class="text-black message">{{$message['Message']}}</div>
          </div>
        </div>
        @endif
        @endforeach
        @if (isset($review['Review Text']))
          <div class="review">
            <p class="p-2 m-2 font-light text-center">{{$review["Review Text"]}}</p>
            <div class="stars" data-active="false">★★★★★</div>
          </div>
        @endif
        <button class="button"><span>Dive Deeper</span> <i class="ml-1 icon-right-1 "></i></button>
      </div>
    </div>
  </div>
      <div class="p-2 conversation__customer" data-person>
      <div class="max-w-lg m-auto">
        @include('partials.image-element', ['image' => $customer['Images']['Large Image']])
      </div>
      <hr class="h-1 mb-3 border-none bg-var-customer">
      <div class="flex items-end justify-start overflow-hidden specialist-details">
        <h4 class="mr-2 -mb-px text-2xl font-bold leading-none text-blue">{{$customer['Details']['Name']}}</h4>
        <h5 class="text-lg font-normal leading-none text-var-customer">{{$customer['Details']['Title']}}</h5>
      </div>


    </div>

  </div>
</div>
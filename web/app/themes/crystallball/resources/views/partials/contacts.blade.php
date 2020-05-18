<div class="flex flex-wrap items-center justify-center py-6 md:justify-start contacts-wrap">
  @foreach ($contacts as $contact)
  <div class="max-w-xs mb-6 mr-6 text-left  flex-small contact">
    <h4 class="flex-auto text-xl text-heading">{{$contact['Title']}}</h4>
    <div class="flex-auto details">
      @if ($contact['Details']['Company'])
        <div class="flex-small">{{$contact['Details']['Company']}}</div>
      @endif
      @if ($contact['Details']['Name'])
        <div class="flex-small">{{$contact['Details']['Name']}}</div>
      @endif
      @if ($contact['Details']['Location'])
        <div class="flex-small">{{$contact['Details']['Location']}}</div>
      @endif
    </div>
      @include('partials.buttons', ['buttons' => $contact['Links']])
  </div>
  @endforeach
</div>
<div class="flex flex-wrap items-stretch justify-center m-2 text-black bg-white md:flex-nowrap shadow-fun flex-full lg:flex-some">
  <div class="relative h-auto pb-48 flex-200">
    @include('partials.image-element' , ['image' => get_post_thumbnail_id(), 'args' => ['is_bg' => true, 'max_width' => 600]])
  </div>
  <div class="p-8 pb-4 flex-300">
    <h3 class="mb-2 text-3xl font-black leading-none uppercase md:text-4xl">{{get_the_title()}}</h3>
    <div class="rte">{!! get_the_excerpt()!!}</div>
    <x-button icon="right-circled" classes="mt-6 " href="@permalink">{{__("Read More")}}</x-button>
  </div>
</div>
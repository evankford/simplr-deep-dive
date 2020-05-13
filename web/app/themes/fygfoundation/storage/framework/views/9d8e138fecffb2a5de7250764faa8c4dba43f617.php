<section class="relative z-20 block p-6 pb-40 mt-40 -mb-40 overflow-hidden section-vision md:p-12 clip-both">
  <div class="absolute top-0 left-0 z-0 w-screen h-full opacity-75">
    <?php echo $__env->make('partials.image-element', ['image' => $vision_bg, 'args' => ['is_bg' => true, 'rellax' => true]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  </div>
  <div data-impact-content="" class="container relative z-20 flex flex-wrap items-center justify-center mx-auto min-h-90h lg:-mt-20">
    <div class=" flex-200 m-3 max-w-md pr-8 md:pr-16 text-white}">
      <?php echo $__env->make('partials.flex-content', ['content' => $vision_1_content], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
    <div class="max-w-lg m-3 text-white flex-300">
      <?php echo $__env->make('partials.flex-content', ['content' => $vision_2_content], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
  </div>
</section><?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/sections/vision.blade.php ENDPATH**/ ?>
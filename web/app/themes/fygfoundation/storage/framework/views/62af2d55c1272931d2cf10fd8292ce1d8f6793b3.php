<section class="relative z-20 flex flex-wrap items-center justify-center w-full min-h-screen px-3 py-20 py-24 m-0 -my-16 overflow-hidden section-impact clip-top lg:-my-24 bg-red lg:py-48">
  <div class="absolute top-0 left-0 z-0 w-screen h-full">
    <?php echo $__env->make('partials.image-element', ['image' => $impact_bg, 'args' => ['is_bg' => true, 'rellax' => true]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  </div>

  
  <div data-impact-content="" class="container relative z-20 flex flex-wrap items-center justify-center lg:-mt-20">

    <div class=" flex-200 m-3 max-w-md pr-8 md:pr-16 text-white text-<?php echo e($impact_1_align); ?>">
      <?php echo $__env->make('partials.flex-content', ['content' => $impact_1_content], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
    <div class=" flex-300 m-3 max-w-lg text-white text-<?php echo e($impact_2_align); ?>">
      <?php echo $__env->make('partials.flex-content', ['content' => $impact_2_content], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
  </div>
</section>
<?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/sections/impact-home.blade.php ENDPATH**/ ?>
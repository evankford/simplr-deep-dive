<section class="section-impact relative z-20 clip-both -my-16 lg:-my-24 deco-bottom bg-red relative m-0 w-full py-20  py-24 lg:py-48 px-3 min-h-screen overflow-hidden flex flex-wrap items-center justify-center">
  <div class="absolute w-screen h-full z-0 top-0 left-0">
    <?php echo $__env->make('partials.image-element', ['image' => $impact_bg, 'args' => ['is_bg' => true, 'rellax' => true]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  </div>

  <div data-impact-header="" data-module="particle-header" class="h-16 lg:h-20 my-10 flex-full relative z-20 h">
    <canvas id="scene" class="particle-scene inset-half transform -translate-x-1/2 -translate-y-1/2 absolute "></canvas>
    <h2 id="copy" data-canvas-value="<?php echo e($impact_title); ?>" class="sr-only"><?php echo e($impact_title); ?></h2>
  </div>
  <div data-impact-content="" class="lg:-mt-20 relative z-20 container flex flex-wrap items-center justify-center">

    <div class=" flex-200 m-3 max-w-md pr-8 md:pr-16 text-white text-<?php echo e($impact_1_align); ?>">
      <?php echo $__env->make('partials.flex-content', ['content' => $impact_1_content], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
    <div class=" flex-300 m-3 max-w-lg text-white text-<?php echo e($impact_2_align); ?>">
      <?php echo $__env->make('partials.flex-content', ['content' => $impact_2_content], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
  </div>
</section>
<?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/sections/impact-home.blade.php ENDPATH**/ ?>
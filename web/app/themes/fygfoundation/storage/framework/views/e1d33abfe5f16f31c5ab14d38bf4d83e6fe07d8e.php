
<section class="relative z-20 pb-32 text-white section-partners clip-bottom bg-darkblue">
  <div class="top-0 z-0 block w-full h-full max-h-screen pt-12 partners-bg max-absolute">
    <?php echo $__env->make('partials.image-element', ['image' => $partner_bg, 'args' => ['is_bg' => true]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  </div>
   <div class="container relative z-20 flex flex-wrap items-center justify-start max-w-5xl p-6 mx-auto lg:mt-24 lg:justify-center ">
    <div  class="max-w-lg pr-24 m-3 text-white flex-300 sm:pr-12 ">
      <?php echo $__env->make('partials.flex-content', ['content' => $partner_content_1], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
    <div class="max-w-xl m-3 text-white flex-300">
      <?php echo $__env->make('partials.flex-content', ['content' => $partner_content_2], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
  </div>
  <div class="container max-w-5xl mx-auto mt-4 mb-24 partners-list">
    <?php if($partners_header): ?>
       <h4 data-anim-in class="my-8 text-center header-label">[<?php echo e($partners_header); ?>]</h2>
    <?php endif; ?>
      <div data-anim-in-children class="flex flex-wrap items-center justify-center">
        <?php $__currentLoopData = $partners; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $partner): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <div class="m-5 flex-140 max-w-3xs icon-image">
            <?php echo $__env->make('partials.image-element', ['image'=> $partner, 'args' => ['max_width' => 600]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
          </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

      </div>
  </div>
</section>
<?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/sections/partners.blade.php ENDPATH**/ ?>
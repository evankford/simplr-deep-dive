<section class="relative z-10 flex flex-wrap items-center justify-center w-full px-1 px-3 py-12 py-32 m-0 overflow-hidden text-white bg-blacker clip-bottom section-principles bg-gradient-midnight deco-bottom md:px-6 lg:py-32 lg:px-8 min-h-90h">
  <div data-anim-in-children class="container flex flex-wrap items-center justify-center py-20 mx-auto my-24px">
    <?php if($principles_title): ?>
      <h4 class="px-6 mb-24 text-center header-label flex-full font-size-xl">
          [<?php echo e($principles_title); ?>]
      </h4>
    <?php endif; ?>
    <?php $__currentLoopData = $principles_content; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <div class="flex items-center justify-start max-w-3xl p-6 flex-some">
      <div class="flex-spacer max-w-2xs ">
        <?php echo $__env->make('partials.image-element', ['image'=>$item['Icon']], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      </div>
      <div class="pl-12 text-left flex-200">
        <?php if($item['Content']): ?>
        <h5 class=" header-label text-aqua">
          [<?php echo e($item['Title']); ?>]
        </h5>
        <?php else: ?>
        <h2 class="header-mega"><?php echo e($item['Title']); ?></h2>
        <?php endif; ?>
        <p class="mt-4 font-size-sm lg:font-size-md"><?php echo e($item['Content']); ?></p>

      </div>
    </div>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
  </div>
</section><?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/sections/principles.blade.php ENDPATH**/ ?>
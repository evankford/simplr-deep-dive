<section class="section-principles relative z-10 text-white -my-5 text-white clip-weird bg-gradient-midnight deco-bottom overflow-hidden bg-black text-white relative m-0 w-full px-1 md:px-6 py-12 py-32 lg:py-48 px-3 lg:px-8 min-h-90h overflow-hidden flex flex-wrap items-center justify-center">
  <div data-anim-in-children class="container mx-auto my-24px py-20  flex flex-wrap items-center justify-center">
    <?php if($principles_title): ?>
      <h4 class="header-label text-center flex-full font-size-xl mb-24 px-6">
          [<?php echo e($principles_title); ?>]
      </h4>
    <?php endif; ?>
    <?php $__currentLoopData = $principles_content; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <div class="flex-some max-w-3xl p-6 items-center justify-start flex">
      <div class="flex-spacer max-w-2xs ">
        <?php echo $__env->make('partials.image-element', ['image'=>$item['Icon']], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      </div>
      <div class="flex-200 pl-12 text-left">
        <h5 class="header-label text-aqua">[<?php echo e($item['Title']); ?>]</h5>
        <p class="font-size-sm lg:font-size-md mt-4"><?php echo e($item['Content']); ?></p>

      </div>
    </div>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
  </div>
</section><?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/sections/principles.blade.php ENDPATH**/ ?>
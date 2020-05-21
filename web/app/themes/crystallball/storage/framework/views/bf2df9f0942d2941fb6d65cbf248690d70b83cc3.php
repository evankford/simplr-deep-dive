

<section id="<?php echo e($id); ?>" data-title="<?php echo e($title); ?>"   data-position="ahead" data-index="<?php echo e($index); ?>"  class="section-wrap bg-style--<?php echo e($bg_style); ?>">
  <style>
    section#<?php echo e($id); ?> {
      --color-background: <?php echo e($color_bg); ?>;
      --color-text: <?php echo e($color_text); ?>;
      --color-accent: <?php echo e($color_accent); ?>;
      --color-background-end: <?php echo e($color_bg_end); ?>

    }
  </style>
  <?php echo $__env->make('partials.icon-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  <div class="container p-8 py-20 md:p-12 lg:pt-16 m-auto items-center block lg:flex flex-wrap lg:flex-no-wrap">
    <div class="flex-300 lg:pr-6">
      <?php echo $__env->make('partials.section-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      <ul class="flex flex-wrap -ml-2" data-anim-in-chilren="">
        <?php $__currentLoopData = $icons; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $icon): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <li class="flex-none p-2 text-var-accent">
          <?php echo e(get_svg($icon['Icon']['url'], 'fill-paths  w-20 h-24 last:w-24 last:h-auto')); ?>
        </li>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      </ul>
    </div>
    <div data-anim-in class="flex-300 flex p-4 md:p-8   flex-wrap items-center justify-center mx-auto" data-anim-in-chilren="">
      <div class="flex-200 rounded-full md:max-w-sm block overflow-hidden border-white border-8 w-full relative">
        <div class="pb-full"></div>
        <?php echo $__env->make('partials.image-element', ['image'=> $specialist_image, 'args' => ['is_bg' => true, 'max_width' => 750]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      </div>
      <div class="flex-140 p-4 max-w-2xs mt-4 mx-auto">
        <h4 class="font-bold text-lg lg:text-xl my-6"><?php echo e($name); ?></h4>
        <div class="rte  lg:text-xl -mt-4"><?php echo $info; ?></div>
      </div>
    </div>
  </div>
</section><?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/template-section-specialist.blade.php ENDPATH**/ ?>
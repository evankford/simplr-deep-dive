

<section id="<?php echo e($id); ?>" data-title="<?php echo e($title); ?>"   data-position="ahead" data-index="<?php echo e($index); ?>"  class="section-wrap py-0 bg-style--<?php echo e($bg_style); ?>">
  <style>
    section#<?php echo e($id); ?> {
      --color-background: <?php echo e($color_bg); ?>;
      --color-text: <?php echo e($color_text); ?>;
      --color-accent: <?php echo e($color_accent); ?>;
      --color-background-end: <?php echo e($color_bg_end); ?>

    }
  </style>
  <?php echo $__env->make('partials.icon-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  <div class="container flex flex-col items-center justify-center max-w-5xl p-6 py-32 m-auto md:p-8 first:py-8" data-timeline>
    <?php echo $__env->make('partials.section-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <ul class="relative flex w-full py-8" data-timeline="">
      <?php $__currentLoopData = $timeline; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <li data-timeline-item class="relative flex items-end justify-center p-2 pb-12 text-sm leading-tight text-center flex-1/4 md:p-4 md:text-base timeline-item"><span><?php echo e($item['Text']); ?></span></li>
      <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      <div data-timeline-timeline class="absolute bottom-0 w-full h-4 -mx-24 timeline-grad" data-timeline-grad></div>
    </ul>
  </div>
</section>
</section><?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/template-section-timeline.blade.php ENDPATH**/ ?>
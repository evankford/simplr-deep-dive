

<section id="<?php echo e($id); ?>" data-title="<?php echo e($title); ?>"   data-position="ahead" data-index="<?php echo e($index); ?>"  class="section-wrap  p-8 md:p-12 bg-style--<?php echo e($bg_style); ?>">
  <style>
    section#<?php echo e($id); ?> {
      --color-background: <?php echo e($color_bg); ?>;
      --color-text: <?php echo e($color_text); ?>;
      --color-accent: <?php echo e($color_accent); ?>;
      --color-background-end: <?php echo e($color_bg_end); ?>

    }
  </style>
  <?php echo $__env->make('partials.icon-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  <div class="container m-auto py-32 flex flex-col items-center justify-center max-w-5xl">
    <?php echo $__env->make('partials.section-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  </div>
</section><?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/template-section-simple.blade.php ENDPATH**/ ?>
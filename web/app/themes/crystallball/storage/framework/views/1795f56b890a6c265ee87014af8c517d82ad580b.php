

<section id="<?php echo e($id); ?>" data-title="<?php echo e($title); ?>"   data-position="ahead" data-index="<?php echo e($index); ?>"  class="section-wrap  pt-24 px-16 sm:px-24 bg-style--<?php echo e($bg_style); ?>">
  <style>
    section#<?php echo e($id); ?> {
      --color-background: <?php echo e($color_bg); ?>;
      --color-text: <?php echo e($color_text); ?>;
      --color-accent: <?php echo e($color_accent); ?>;
      --color-background-end: <?php echo e($color_bg_end); ?>

    }
  </style>
  <div data-anim-in-children class="container mt-auto flex flex-col items-center justify-center max-w-lg">

   <?php echo $__env->make('partials.image-element', ['image'=> get_field('Footer Logo'), 'args' => ["classes"=>"max-w-2xs mb-8 lg:mb-20", "max_width" => 300]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
   <?php echo $__env->make('partials.image-element', ['image'=> get_field('Footer Image'), 'args' => ["max_width" => 300]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  </div>
</section><?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/template-section-footer.blade.php ENDPATH**/ ?>
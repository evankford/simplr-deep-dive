
<section id="<?php echo e($id); ?>" data-title="<?php echo e($title); ?>"   data-position="ahead" data-index="<?php echo e($index); ?>"  class="section-wrap p-8 md:p-12 bg-style--<?php echo e($bg_style); ?>">
  <style>
    section#<?php echo e($id); ?> {
      --color-background: <?php echo e($color_bg); ?>;
      --color-text: <?php echo e($color_text); ?>;
      --color-accent: <?php echo e($color_accent); ?>;
      --color-background-end: <?php echo e($color_bg_end); ?>

    }
  </style>
  <?php echo $__env->make('partials.icon-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  <div class="container m-auto lg:pt-32 first:py-8 md:flex-row flex-col-reverse flex flex-wrap items-center justify-center ">
    <div data-anim-in class="flex-full w-full md:w-auto md:flex-1/2 p-6">
      <?php echo $__env->make('partials.section-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      <?php echo $__env->make('partials.image-element', ['image'=> $left_image, 'args' => ["classes"=>"mt-8 max-w-md", "max_width" => 750]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
    <div data-anim-in class="transform--front flex-full w-full md:w-auto md:flex-1/2 p-6">
      <?php echo $__env->make('partials.image-element', ['image'=> $right_image, 'args' => ["classes"=> "max-w-lg", "max_width" => 750]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      <div>
  </div>
</section><?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/template-section-standard.blade.php ENDPATH**/ ?>
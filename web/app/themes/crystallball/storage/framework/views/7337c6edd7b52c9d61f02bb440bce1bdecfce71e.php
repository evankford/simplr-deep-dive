

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
  <div class="container p-8 md:p-12 py-20 lg:pt-32 m-auto items-center flex flex-wrap lg:flex-no-wrap">
    <div class="flex-300 lg:pr-6">
      <?php echo $__env->make('partials.section-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
    <div class="flex-300 p-8">
      <div class="image-weirdo transform--front" data-anim-in-children>
      <div class="image-1 text-5xl rounded-xl rounded-tl-half rounded-br-half overflow-hidden"><?php echo $__env->make('partials.image-element', ['image'=> $quality_image_1, 'args' => ['max_width' => 750]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?></div>
        <div class="image-2  text-4xl  rounded-xl rounded-tl-half rounded-br-half overflow-hidden"><?php echo $__env->make('partials.image-element', ['image'=> $quality_image_2, 'args' => ['max_width' => 600]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?></div>
        <div class="image-3 rounded-xl text-4xl  rounded-tl-half rounded-br-half overflow-hidden"><?php echo $__env->make('partials.image-element', ['image'=> $quality_image_3, 'args' => ['max_width' => 600]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?></div>
        <div class="image-4 w-48 lg:w-56 h-24 text-3xl  block rounded-xl round'e'd-tr-half rounded-bl-half overflow-hidden" style="background-color: <?php echo e($quality_color); ?>;"></div>
      </div>
      <ul data-anim-in-children class="flex flex-wrap z-10">
        <li class="flex-some p-4"><?php echo $__env->make('partials.image-element', ['image'=> $quality_bottom_1, 'args' => ['max_width' => 750]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?></li>
        <li class="flex-some p-4"><?php echo $__env->make('partials.image-element', ['image'=> $quality_bottom_2, 'args' => ['max_width' => 750]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?></li>
      </ul>

    </div>
  </div>
</section><?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/template-section-quality.blade.php ENDPATH**/ ?>
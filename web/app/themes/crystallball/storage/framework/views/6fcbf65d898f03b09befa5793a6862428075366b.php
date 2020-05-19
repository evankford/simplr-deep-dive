

<section id="<?php echo e($id); ?>" data-title="<?php echo e($title); ?>"   data-position="ahead" data-index="<?php echo e($index); ?>"  class="section-wrap py-0 bg-style--<?php echo e($bg_style); ?>">
  <style>
    section#<?php echo e($id); ?> {
      --color-background: <?php echo e($color_bg); ?>;
      --color-text: <?php echo e($color_text); ?>;
      --color-accent: <?php echo e($color_accent); ?>;
      --color-background-end: <?php echo e($color_bg_end); ?>

    }
  </style>
  <div class="container m-auto py-32 flex flex-wrap p-6 md:p-8 items-start justify-center max-w-5xl">
    <div data-anim-in class="flex-140 m-auto max-w-3xs ">
      <div class=" rounded-full border-8 border-white overflow-hidden">
        <?php echo $__env->make('partials.image-element', ['image'=> $testimonial_image, 'args' => ["max_width" => 300]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      </div>
    </div>
    <div class="flex-400 p-4 lg:pl-12">
      <h3 data-anim-in  class="font-bold text-2xl md:text-3xl lg:text-4xl my-6 leading-tight tracking-tight"><?php echo e($testimonial_quote); ?></h3>
      <p><span data-anim-in class="text-lg lg:text-xl font-bold inline-block mr-1">- <?php echo e($testimonial_name); ?></span> <span data-anim-in class="lg:text-lg font-light"><?php echo e($testimonial_title); ?></span></p>
    </div>
  </div>
</section><?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/template-section-quote.blade.php ENDPATH**/ ?>
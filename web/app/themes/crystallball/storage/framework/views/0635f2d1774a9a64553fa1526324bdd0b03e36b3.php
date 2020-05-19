

<section id="<?php echo e($id); ?>" data-title="<?php echo e($title); ?>"   data-position="ahead" data-index="<?php echo e($index); ?>"  class="section-wrap py-0 bg-style--<?php echo e($bg_style); ?>">
  <style>
    section#<?php echo e($id); ?> {
      --color-background: <?php echo e($color_bg); ?>;
      --color-text: <?php echo e($color_text); ?>;
      --color-accent: <?php echo e($color_accent); ?>;
      --color-background-end: <?php echo e($color_bg_end); ?>

    }
  </style>
  <div class="block lg:flex w-full h-auto max-w-7xl m-auto">
    <div class="flex-1/2 overflow-hidden relative rounded-tl-huge rounded-br-huge bg-var-text p-12 py-24 lg:px-24">
      <div class="inner mx-auto max-w-md text-left bg-var-text text-var-bg">
        <?php echo $__env->make('partials.image-element', ['image'=> $left_logo, 'args' => ["classes" => 'inline-block max-w-3xs h-12 object-contain-child']], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        <p class="my-6 text-lg"><?php echo e($left_text); ?></p>
        <ul data-anim-in-children class="flex flex-wrap">
          <?php $__currentLoopData = $left_gallery; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $icon): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <li class="p-2 flex-1/2 md:flex-1/3 ">
            <?php echo $__env->make('partials.image-element', ['image'=> $icon, 'args' => ["classes" => ' inline-block max-w-4xs h-12 object-contain-child']], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
          </li>
          <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </ul>
      </div>
      <div class="absolute"></div>
    </div>
    <div class="flex-1/2 p-12 lg:p-24">
      <div class="inner  mx-automax-w-md text-left ">
        <?php echo $__env->make('partials.image-element', ['image'=> $right_logo, 'args' => ["classes" => ' max-w-3xs w-32 inline-block max-w-full h-20 object-contain-child mr-auto']], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        <p class="my-6 text-lg"><?php echo e($right_text); ?></p>
        <ul data-anim-in-children class="flex flex-wrap">
          <?php $__currentLoopData = $right_gallery; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $icon): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <li class="p-2  flex-1/2 md:flex-1/3 w-24">
            <?php echo $__env->make('partials.image-element', ['image'=> $icon, 'args' => ["classes" => '  max-w-4xs  inline-blockmax-w-full h-12 object-contain-child mr-auto']], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
          </li>
          <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </ul>
      </div>
    </div>
  </div>
</section><?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/template-section-icons.blade.php ENDPATH**/ ?>


<section id="<?php echo e($id); ?>" data-title="<?php echo e($title); ?>"  data-position="ahead" data-index="<?php echo e($index); ?>"  class="section-wrap bg-style--<?php echo e($bg_style); ?>">
  <style>
    section#<?php echo e($id); ?> {
      --color-background: <?php echo e($color_bg); ?>;
      --color-text: <?php echo e($color_text); ?>;
      --color-accent: <?php echo e($color_accent); ?>;
      --color-background-end: <?php echo e($color_bg_end); ?>

    }
  </style>
  <div class="container m-auto p-6">
    <h2 data-anim-in class="text-4xl leading-tight lg:text-5xl font-bold max-w-4xl my-16 lg:mt-24 xl:mt-32 text-center m-auto"><?php echo e($header); ?></h2>
    <ul data-anim-in-children class="problems-list w-full max-w-5xl px-12 lg:px-30 flex flex-wrap items-center justify-center" data-cloud-wrap>
      <?php $__currentLoopData = $problems; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $problem): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
      <li class="flex-140 md:flex-300 p-8 text-center">
        <h4 class="text-2xl margin-random leading-tight transform--back lg:text-3xl font-medium"><?php echo e($problem['Title']); ?></h4>
      </li>
      <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

    </ul>
  </div>
  <div class="cloud-deco burn-bottom absolute bottom-0 pointer-events-none z-75 w-full min-h-600x min-w-600x">
    <?php echo $__env->make('partials.clouds', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
</section><?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/template-section-clouds.blade.php ENDPATH**/ ?>
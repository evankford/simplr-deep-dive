

<section id="<?php echo e($id); ?>" data-title="<?php echo e($title); ?>"   data-anim-steps="graph" data-position="ahead" data-index="<?php echo e($index); ?>"  class="section-wrap bg-style--<?php echo e($bg_style); ?>">
  <style>
    section#<?php echo e($id); ?> {
      --color-background: <?php echo e($color_bg); ?>;
      --color-text: <?php echo e($color_text); ?>;
      --color-accent: <?php echo e($color_accent); ?>;
      --color-background-end: <?php echo e($color_bg_end); ?>

    }
  </style>

  <div class="flex flex-wrap items-center w-auto max-w-5xl p-8 py-32 md:items-start md:mt-32 lg:pt-64 md:py-12 md:min-h-90h" data-module="goodbyes">
    <h2 data-anim-in class="flex-none min-w-full mt-auto header-resp md:min-w-0 md:m-3">Goodbye</h1>
    <div class="flex-none mb-auto goodbye-list__outer md:m-3">
      <ul class="goodbye-list" data-anim-in>
        <?php $__currentLoopData = $goodbyes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $goodbye): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <li class="mb-4 header-resp goodbye-item"><?php echo e($goodbye['Text']); ?></li>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      </ul>
      <div class="absolute top-0 right-0 w-full overflow-visible"><?php echo $__env->make('partials.clouds', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?></div>
    </div>
</div>
  <div class="items-center justify-center w-full max-w-6xl pb-32 hello-section lg:pb-48">
    <div class="container flex-wrap items-center justify-center block max-w-2xl mx-auto md:max-w-6xl md:flex">
      <div class="p-6 mx-auto text-center flex-300 md:text-left">
        <h2 data-anim-in class="mb-4 header-resp"><?php echo e($title1); ?> <span class="text-var-accent"><?php echo e($title2); ?></span></h2>
        <h3 data-anim-in class="text-2xl font-medium subheader-resp "><?php echo e($subtitle); ?></p>
      </div>
      <div data-anim-in class="relative -m-12 blocktransform--front flex-400">
        <?php echo $svg; ?>

      </div>
    </div>
  </div>

</section><?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/template-section-goodbyes.blade.php ENDPATH**/ ?>
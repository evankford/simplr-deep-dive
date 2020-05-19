

<section id="<?php echo e($id); ?>" data-title="<?php echo e($title); ?>"   data-anim-steps="graph" data-position="ahead" data-index="<?php echo e($index); ?>"  class="section-wrap bg-style--<?php echo e($bg_style); ?>">
  <style>
    section#<?php echo e($id); ?> {
      --color-background: <?php echo e($color_bg); ?>;
      --color-text: <?php echo e($color_text); ?>;
      --color-accent: <?php echo e($color_accent); ?>;
      --color-background-end: <?php echo e($color_bg_end); ?>

    }
  </style>

  <div class="flex flex-wrap items-center md:items-start md:mt-32 p-8 lg:pt-64 w-auto max-w-5xl py-32 md:py-12 md:min-h-90h" data-module="goodbyes">
    <h2 data-anim-in class="header-resp flex-none min-w-full md:min-w-0 mt-auto md:m-3">Goodbye</h1>
    <div class="goodbye-list__outer mb-auto md:m-3 flex-none">
      <ul class="goodbye-list">
        <?php $__currentLoopData = $goodbyes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $goodbye): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <li class="header-resp mb-4 goodbye-item"><?php echo e($goodbye['Text']); ?></li>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      </ul>
    </div>
</div>
  <div class="hello-section w-full max-w-6xl py-24 lg:py-32 items-center justify-center">
    <div class="container max-w-2xl mx-auto md:max-w-6xl block md:flex flex-wrap items-center justify-center">
      <div class="flex-300 p-6 mx-auto text-center md:text-left">
        <h2 data-anim-in class="header-resp mb-4"><?php echo e($title1); ?> <span class="text-var-accent"><?php echo e($title2); ?></span></h2>
        <h3 data-anim-in class="font-medium subheader-resp text-2xl "><?php echo e($subtitle); ?></p>
      </div>
      <div data-anim-in class="transform--front flex-400 -m-12">
        <?php echo $svg; ?>

      </div>
    </div>
  </div>
</section><?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/template-section-goodbyes.blade.php ENDPATH**/ ?>
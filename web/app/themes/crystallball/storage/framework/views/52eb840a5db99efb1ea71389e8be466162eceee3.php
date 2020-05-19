

<section id="<?php echo e($id); ?>" data-title="<?php echo e($title); ?>"   data-anim-steps="graph" data-position="ahead" data-index="<?php echo e($index); ?>"  class="section-wrap p-8 bg-style--<?php echo e($bg_style); ?>">
  <style>
    section#<?php echo e($id); ?> {
      --color-background: <?php echo e($color_bg); ?>;
      --color-text: <?php echo e($color_text); ?>;
      --color-accent: <?php echo e($color_accent); ?>;
      --color-background-end: <?php echo e($color_bg_end); ?>

    }
  </style>
  <div class="container w-full m-auto p-8 md:p-12 lg:16">
    <h1 data-anim-in class="text-3xl transform--middle lg:text-5xl font-medium leading-tight text-center"><?php echo e($header); ?></h1>
    <?php echo $__env->make('partials.trio-graph', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <ul class="flex flex-wrap lg:flex-nowrap graph-list text-lg">
      <li data-step="1" class="p-4 md:p6 lg:p-8 text-darkgray step">
        <span class="block uppercase">A.</span>
        <?php echo $graph1; ?>

      </li>
      <li data-step="2" class="p-4 md:p6 lg:p-8 text-darkgray">
        <span class="block uppercase">B.</span>
        <?php echo $graph2; ?>

      </li>
      <li data-step="3" class="p-4 md:p6 lg:p-8 text-darkgray">
        <span class="block uppercase">C.</span>
        <?php echo $graph3; ?>

      </li>
    </ul>
  </div>

  <hr class="h-1 bg-gray w-full max-w-3xl m-4 lg:m-10">

  <div class="container mx-auto  max-w-3xl mx-auto py-6 md:py-12 ">
    <h2 data-anim-in class="header-resp line-accent max-w-3xl mb-6 lg:mb-8"><?php echo e($more_title); ?></h2>
    <ul data-anim-in-children="200">
      <?php $__currentLoopData = $icon_list; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <li class="flex m-4 text-lg">
          <div class="section-icon">
            <?php echo $__env->make('partials.image-element', ['image'=>$item['Icon'], 'args' => ["max_width", 450]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
          </div>
          <div class="py-4 text-left">
            <h4 class="text-bold uppercase tracking-wide font-bold"><?php echo e($item['Title']); ?></h4>
            <p class="text-lg"><?php echo e($item['Text']); ?></p>
          </div>
        </li>
      <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

    </ul>
  </div>
</section><?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/template-section-trio.blade.php ENDPATH**/ ?>
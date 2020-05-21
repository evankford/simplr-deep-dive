

<section id="<?php echo e($id); ?>" data-title="<?php echo e($title); ?>"   data-anim-steps="graph" data-position="ahead" data-index="<?php echo e($index); ?>"  class="section-wrap p-8 py-12 md:py-16 lg:pt-24 bg-style--<?php echo e($bg_style); ?>">
  <style>
    section#<?php echo e($id); ?> {
      --color-background: <?php echo e($color_bg); ?>;
      --color-text: <?php echo e($color_text); ?>;
      --color-accent: <?php echo e($color_accent); ?>;
      --color-background-end: <?php echo e($color_bg_end); ?>

    }
  </style>
  <div class="container w-full p-8 m-auto md:p-12 lg:16">
    <h1 data-anim-in class="text-3xl font-medium leading-tight tracking-tight text-center transform--middle lg:text-5xl"><?php echo e($header); ?></h1>
    <?php echo $__env->make('partials.trio-graph', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <ul class="flex flex-wrap text-lg md:flex-no-wrap graph-list">
      <li data-step="1" class="p-4 text-lg hover-up md:p6 lg:p-8 text-darkgray md:text-xl text-step ">
        <span class="block uppercase">A.</span>
        <?php echo $graph1; ?>

      </li>
      <li data-step="2" class="p-4 text-lg hover-up md:p6 lg:p-8 text-darkgray md:text-xl text-step ">
        <span class="block uppercase">B.</span>
        <?php echo $graph2; ?>

      </li>
      <li data-step="3" class="p-4 text-lg hover-up md:p6 lg:p-8 text-darkgray md:text-xl text-step ">
        <span class="block uppercase">C.</span>
        <?php echo $graph3; ?>

      </li>
    </ul>
  </div>

  <hr class="w-full h-1 max-w-3xl m-4 bg-gray lg:m-10">

  <div class="container max-w-3xl py-6 mx-auto md:py-12 ">
    <h2 data-anim-in class="max-w-3xl mb-6 header-resp line-accent lg:mb-8"><?php echo e($more_title); ?></h2>
    <ul data-anim-in-children="200">
      <?php $__currentLoopData = $icon_list; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <li class="flex m-4 text-lg">
          <div class="section-icon">
            <?php echo $__env->make('partials.image-element', ['image'=>$item['Icon'], 'args' => ["max_width", 450]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
          </div>
          <div class="py-4 text-left">
            <h4 class="font-bold tracking-wide uppercase text-bold"><?php echo e($item['Title']); ?></h4>
            <p class="text-lg"><?php echo e($item['Text']); ?></p>
          </div>
        </li>
      <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

    </ul>
  </div>
</section><?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/template-section-trio.blade.php ENDPATH**/ ?>
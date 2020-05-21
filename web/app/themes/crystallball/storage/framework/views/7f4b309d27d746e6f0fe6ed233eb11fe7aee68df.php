

<section id="<?php echo e($id); ?>" data-title="<?php echo e($title); ?>"   data-anim-steps="graph" data-position="ahead" data-index="<?php echo e($index); ?>"  class="section-wrap bg-style--<?php echo e($bg_style); ?>">
  <style>
    section#<?php echo e($id); ?> {
      --color-background: <?php echo e($color_bg); ?>;
      --color-text: <?php echo e($color_text); ?>;
      --color-accent: <?php echo e($color_accent); ?>;
      --color-background-end: <?php echo e($color_bg_end); ?>

    }
  </style>

 <?php echo $__env->make('partials.icon-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  <div class="container p-8 md:p-12  mx-auto mt-auto lg:pt-16">
    <div class="flex flex-wrap lg:flex-no-wrap items-center justify-center">
      <div class="flex-300 max-w-lg lg:pr-6">
        <?php echo $__env->make('partials.single-graph', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      </div>
      <div class="flex-300 my-6 lg:pl-12">
        <h2 data-anim-in class="header-resp mb-6"><?php echo e($single_graph_content['Title']); ?></h2>
        <ul data-anim-in-children  class="my-6 md:text-lg">
          <?php $__currentLoopData = $single_graph_content['List']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <?php if($single_graph_content['List Style'] == 'months'): ?>
          <li class="my-4 list-none">
            <span class="inline-block mr-3 rounded-full bg-var-accent color-var-bg uppercase text-sm"><?php echo e($item['label']); ?></span>
            <?php echo e($item['Content']); ?>

          </li>
          <?php else: ?>
          <li class="my-4 list-disc list-inside">
            <?php echo e($item['Content']); ?>

          </li>
          <?php endif; ?>
          <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </ul>
      </div>
    </div>
  </div>

  <div class="w-full my-6 block my-auto" style="background-color: <?php echo e($graph_bar_color); ?>">
    <ul data-anim-in-children class="container  mx-auto flex flex-wrap items-center justify-center">
      <?php $__currentLoopData = $graph_footer; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <li class="p-4 flex-200 items-center justify-center flex">
          <span class="section-icon"> <?php echo $__env->make('partials.image-element', ['image' => $item['Icon'], 'args'=> ['max_width' => 300]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?></span>
          <span class="w-px h-8 bg-var-accent"></span>
          <span class=" pl-8 flex-140 text-lg text-left"><?php echo e($item['Text']); ?></span>
        </li>
      <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </ul>
  </div>
</section><?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/template-section-graph.blade.php ENDPATH**/ ?>
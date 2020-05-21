

<section id="<?php echo e($id); ?>" data-title="<?php echo e($title); ?>"   data-position="ahead" data-index="<?php echo e($index); ?>"  class="section-wrap py-0 bg-style--<?php echo e($bg_style); ?>">
  <style>
    section#<?php echo e($id); ?> {
      --color-background: <?php echo e($color_bg); ?>;
      --color-text: <?php echo e($color_text); ?>;
      --color-accent: <?php echo e($color_accent); ?>;
      --color-background-end: <?php echo e($color_bg_end); ?>

    }
  </style>
  <div class="relative items-stretch justify-center block w-full min-h-screen lg:flex">
    <div class="absolute z-50 p-12 w-full-h-auto top lg:px-24 xl:px-32">
      <h2 class="container max-w-3xl mx-auto text-center header-resp">
        <?php echo e($chat_header); ?></h2>
      </div>
    <div class="relative flex flex-col items-center justify-center p-8 pt-48 flex-1/2 bg-var-bg" data-chat>
      <div data-anim-loader="" class="absolute inset-half">
        <?php echo $__env->make('partials.dot-loader', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      </div>
      <div class="block w-full max-w-md mx-auto overflow-hidden transition transition-transform duration-300 ease-in-out delay-75 chat-outer">

        <div class="block transition transition-transform duration-300 ease-in-out delay-75 chat-inner">

          <?php echo e(get_svg($chat_svg['url'], 'w-full')); ?>
        </div>
      </div>
    </div>
    <div class="bg-white flex-1/2">
    <ul class="flex flex-wrap items-center justify-center max-w-2xl p-8 lg:pt-64" data-anim-in-children>

      <?php $__currentLoopData = $improvements; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $image): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
      <li class="w-full min-h-0 p-2 flex-200 lg:flex-1/2 try-shadow">
        <?php echo $__env->make('partials.image-element', ['image'=> $image, 'args' => ['max_width' => 600]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      </li>
      <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </ul>
  </div>

  </div>
</section><?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/template-section-chat.blade.php ENDPATH**/ ?>
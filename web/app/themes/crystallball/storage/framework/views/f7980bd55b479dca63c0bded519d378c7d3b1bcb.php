

<section id="<?php echo e($id); ?>" data-title="<?php echo e($title); ?>"  data-position="ahead" data-index="<?php echo e($index); ?>"  class="section-ball w-full p-4 md:p-12 flex flex-col items-center content-center min-h-screen relative bg-var-bg text-var-text bg-style--<?php echo e($bg_style); ?>">
  <style>
    section#<?php echo e($id); ?> {
      --color-background: <?php echo e($color_bg); ?>;
      --color-text: <?php echo e($color_text); ?>;
      --color-accent: <?php echo e($color_accent); ?>;
      --color-background-end: <?php echo e($color_bg_end); ?>

    }
  </style>
  <div data-ball-wrap="" data-anim-ball="<?php echo e($ball_animated); ?>" class="w-full max-w-6xl m-auto mx-0 lg:p-12">
    <?php echo $ball_svg; ?>

    <div class="ball-bg" style="background-color: <?php echo e($ball_bottom); ?>;" class="w-full mt-0"></div>
  </div>

</section><?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/template-section-ball.blade.php ENDPATH**/ ?>
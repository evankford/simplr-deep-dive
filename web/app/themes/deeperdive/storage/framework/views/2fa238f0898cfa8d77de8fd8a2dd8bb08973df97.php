<div class="fixed z-30 flex flex-col items-center justify-center w-full h-full min-h-screen p-8 text-black expanded all-links links-active" data-scene="expanded" data-status="pre">
  <h1 data-anim-in class="absolute top-0 w-full h-auto p-6 pt-12 text-center header-resp text-blue">We work hard to keep things simple</h1>

  <div class="invisible customer-links">
    <div class="links-wrap">

      <h2 class="mt-2 mb-4 text-2xl font-semibold leading-tight text-center text-white "><?php echo e($customer_title); ?></h2>
      <div class="links-box">
        <?php $__currentLoopData = $customer_links; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $link): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <?php
          $img = get_field('Icon', $link);
          ?>
          <button class="text-lg sample-button" data-id="<?php echo e($link); ?>"><i class="flex items-center justify-center w-8 h-6 m-1 text-lightblue"><?php echo e(get_svg($img)); ?></i><span><?= get_the_title($link); ?></span></button>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      </div>
    </div>
  </div>
  <div class="invisible simplr-links">
      <div class="links-box">
        <?php $__currentLoopData = $simplr_links; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $link): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <?php
          $img = get_field('Icon', $link);
          ?>
          <button class="text-lg sample-button" data-id="<?php echo e($link); ?>"><i class="flex items-center justify-center w-8 h-6 m-1 text-lightblue"><?php echo e(get_svg($img)); ?></i><span><?= get_the_title($link); ?></span></button>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      </div>
  </div>
  <div class="invisible specialist-links">
    <div class="links-wrap">

      <h2 class="mt-2 mb-4 text-2xl font-semibold leading-tight text-center text-white "><?php echo e($specialist_title); ?></h2>
      <div class="links-box">
        <?php $__currentLoopData = $specialist_links; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $link): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <?php


          $img = get_field('Icon', $link);

          ?>
          <button class="text-lg sample-button" data-id="<?php echo e($link); ?>"><i class="flex items-center justify-center w-8 h-6 m-1 text-lightblue"><?php echo e(get_svg($img)); ?></i><span><?= get_the_title($link); ?></span></button>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      </div>
    </div>
  </div>

  <div class="whip">
    <svg class="hidden"  data-whip xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1413.22 606.27"><defs><style>.whip-path{fill:none;stroke:#3fafe1;stroke-miterlimit:10;stroke-width:10px;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="whip-path" d="M1312.76,604.52c-15.38-41.34,33.73-122.36,59-192,6.09-16.77,77.33-174.43,2.34-264.13C1290.49,48.33,975,5.66,763,5.05,597.35,4.57,149.59,5,39.86,149.51-62.3,284,89.17,399.41,123.93,454.3s19.69,150.22,19.69,150.22"/></g></g></svg>
    <div class="absolute hidden bg-white rounded-full w-line h-line blob"></div>
    <div class="absolute hidden rounded-full w-line h-line blob bg-offwhite"></div>
    <div class="absolute hidden rounded-full w-line h-line blob bg-offwhite"></div>
    <div class="absolute hidden rounded-full w-line h-line blob bg-offwhite"></div>
    <div class="absolute hidden bg-white rounded-full w-line h-line blob"></div>
    <div class="absolute hidden rounded-full w-line h-line blob bg-offwhite"></div>
    <div class="absolute hidden bg-white rounded-full w-line h-line blob"></div>
    <div class="absolute hidden rounded-full w-line h-line blob bg-offwhite"></div>
    <div class="absolute hidden rounded-full w-line h-line blob bg-offwhite"></div>
  </div>

  <div class="invisible chat-timeline z-75" data-timeline>
    <?php $__currentLoopData = $timeline; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <?php
      $highlights = '';
      $counter = 0;
      foreach($item['Settings']['Highlighted Links'] as $link) {
        if (counter > 0)  {
          $highlights .= ',';
        }
        $highlights .= $link;

      }
    ?>

      <?php if($item['acf_fc_layout'] == 'Message' ): ?>
      <div class="invisible message expanded" data-status="inactive" data-author="<?php echo e($item['Settings']['Author']); ?>"  data-links="<?php echo e($highlights); ?>"><div class="speech-bubble" ><?php echo e($item['Message']); ?></div></div>
      <?php elseif($item['acf_fc_layout'] == 'Simplr'): ?>
      <div class="invisible text-xl simplr-message" data-status="inactive" data-author="Simplr" data-links="<?php echo e($highlights); ?>"><?php echo e($item['Message']); ?></div>
      <?php endif; ?>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
  </div>
</div><?php /**PATH /Users/evan/Local Sites/simplr-deep-dive/app/bedrock/web/app/themes/deeperdive/resources/views/scenes/expanded.blade.php ENDPATH**/ ?>
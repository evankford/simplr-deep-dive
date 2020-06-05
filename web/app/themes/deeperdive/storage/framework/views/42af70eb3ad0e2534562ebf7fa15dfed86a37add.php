<?php

?>
<aside  class="fixed flex w-full h-screen text-white z-101 lg:hidden bg-blue">

  <div class="m-auto w-85p">
    <div class="w-48 mx-auto my-4 max-w-3xs">
      <?php echo $__env->make('partials.image-element', ['image'=> $mobile_logo, 'args' => ['max_width' => 600]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
    <h2 class="header-resp"><?php echo e($mobile_title); ?></h2>
    <h3 class="mt-3 subheader-resp"><?php echo $mobile_text; ?></h3>
  </div>

</aside><?php /**PATH /Users/evan/Local Sites/simplr-deep-dive/app/bedrock/web/app/themes/deeperdive/resources/views/partials/mobilewall.blade.php ENDPATH**/ ?>
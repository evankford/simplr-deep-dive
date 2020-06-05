
<?php echo $__env->make('partials.authwall', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php echo $__env->make('partials.mobilewall', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

  <main class="min-h-screen text-white main bg-offwhite" id="MainContent">
    <?php echo $__env->yieldContent('content'); ?>
  </main>


<?php /**PATH /Users/evan/Local Sites/simplr-deep-dive/app/bedrock/web/app/themes/deeperdive/resources/views/layouts/app.blade.php ENDPATH**/ ?>
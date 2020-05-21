
<?php echo $__env->make('partials.authwall', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

  <main class="text-white main bg-blacker" id="MainContent" data-module="site-slider">
    <?php echo $__env->yieldContent('content'); ?>
  </main>

<?php echo $__env->make('partials.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/layouts/app.blade.php ENDPATH**/ ?>
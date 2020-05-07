<?php $__env->startSection('content'); ?>
<section class="page-standard px-6 deco-top bg-gradient-brick min-h-90h flex flex-col items-center content-center pb-32" data-module="animate-gradient">
  <?php while(have_posts()): ?> <?php (the_post()); ?>

    <?php echo $__env->make('partials.page-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->first(['partials.content-page', 'partials.content'], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>


    <?php endwhile; ?>
</section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/page.blade.php ENDPATH**/ ?>
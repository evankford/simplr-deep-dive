<?php $__env->startSection('content'); ?>
<section class="flex flex-col items-center content-center pb-16 page-standard deco-top bg-gradient-brick min-h-90h md:pb-24" data-module="animate-gradient">
  <?php while(have_posts()): ?> <?php (the_post()); ?>
    <?php echo $__env->make('partials.page-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <div data-anim-in class="container relative px-6 pb-32 z-80 standard-content">
      <?php echo $__env->first(['partials.content-page', 'partials.content'], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
    <?php endwhile; ?>
</section>

<?php if($include_about): ?>
<?php echo $__env->make('partials.about', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php endif; ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/page.blade.php ENDPATH**/ ?>
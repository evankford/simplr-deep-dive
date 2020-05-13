<?php $__env->startSection('content'); ?>
<section class="flex flex-col items-center content-center pb-16 page-standard deco-top bg-gradient-brick min-h-90h md:pb-24" data-module="animate-gradient">
  <?php echo $__env->make('partials.page-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

  <?php while(have_posts()): ?> <?php (the_post()); ?>
   <div class="my-12 lg:max-w-5xl standard-content">
      <?php echo $__env->first(['partials.content-single-' . get_post_type(), 'partials.content-single'], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
  <?php endwhile; ?>
  </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/single.blade.php ENDPATH**/ ?>
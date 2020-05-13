<?php $__env->startSection('content'); ?>
<section class="flex flex-col items-center content-center px-6 pb-32 page-standard deco-top bg-gradient-brick min-h-90h" data-module="animate-gradient">
  <div class="container mx-auto layout-inner">


  <?php while(have_posts()): ?> <?php (the_post()); ?>
  <?php if(get_the_post_thumbnail()): ?>
    <?php echo $__env->make('partials.image-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  <?php else: ?>
    <?php echo $__env->make('partials.page-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  <?php endif; ?>

  <div class="container standard-content">
    <?php echo $__env->first(['partials.content-page', 'partials.content'], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  </div>


    <?php endwhile; ?>
    </div>
</section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/template-bigheader.blade.php ENDPATH**/ ?>
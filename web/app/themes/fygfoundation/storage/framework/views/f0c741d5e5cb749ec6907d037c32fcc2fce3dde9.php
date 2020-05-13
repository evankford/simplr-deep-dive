<?php $__env->startSection('content'); ?>
<section>
  <?php echo $__env->make('partials.page-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</section>
<section class="relative z-50 p-8 py-40 mx-auto -mt-24 overflow-hidden md:-mt-32 lg:-mt-48 bg-gradient-midnight deco-top clip-both" data-module="animate-gradient">
  <?php if($title): ?>
  <h2 class="max-w-3xl mx-auto mb-12 header-mega"><?php echo e($title); ?></h2>
  <?php endif; ?>
  <div class="container flex flex-wrap items-stretch justify-start mx-auto my-8">
    <?php if (empty($query)) : ?><?php global $wp_query; ?><?php $query = $wp_query; ?><?php endif; ?><?php if ($query->have_posts()) : ?>
      <?php if (empty($query)) : ?><?php global $wp_query; ?><?php $query = $wp_query; ?><?php endif; ?><?php if ($query->have_posts()) : ?><?php while ($query->have_posts()) : $query->the_post(); ?>
        <?php echo $__env->make('partials.excerpt', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      <?php endwhile; wp_reset_postdata(); endif; ?>
    <?php wp_reset_postdata(); endif; ?>

    <?php if (empty($query)) : ?><?php global $wp_query; ?><?php $query = $wp_query; ?><?php endif; ?><?php if (! $query->have_posts()) : ?>
    <p class="text-xl">No posts found. Please try again via the menu above!</p>
    <?php wp_reset_postdata(); endif; ?>
  </div>

  <?php echo get_the_posts_navigation(); ?>


</section>
<?php $__env->stopSection(); ?>



<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/archive.blade.php ENDPATH**/ ?>
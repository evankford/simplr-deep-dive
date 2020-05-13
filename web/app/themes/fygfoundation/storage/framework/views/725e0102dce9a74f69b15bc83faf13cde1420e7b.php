
<section class="relative z-50 p-8 py-40 mx-auto -my-24 overflow-hidden md:-my-32 lg:-my-48 bg-salmon deco-top clip-both">
  <?php if($title): ?>
  <h2 class="max-w-3xl mx-auto mb-12 header-mega"><?php echo e($title); ?></h2>
  <?php endif; ?>
  <div class="container flex flex-wrap items-stretch justify-start mx-auto my-8">
    <?php $perpage = $limit ? -1 : $limit ?>
    <?php global $query; ?><?php $query = new WP_Query([
      'post_type' => 'partnership',
      'posts_per_page' => $perpage
    ]); ?>
    <?php if (empty($query)) : ?><?php global $wp_query; ?><?php $query = $wp_query; ?><?php endif; ?><?php if ($query->have_posts()) : ?>
      <?php if (empty($query)) : ?><?php global $wp_query; ?><?php $query = $wp_query; ?><?php endif; ?><?php if ($query->have_posts()) : ?><?php while ($query->have_posts()) : $query->the_post(); ?>
        <?php echo $__env->make('partials.excerpt', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      <?php endwhile; wp_reset_postdata(); endif; ?>
    <?php wp_reset_postdata(); endif; ?>
  </div>

  <?php if($button_text && $button_url): ?>
     <?php if (isset($component)) { $__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940 = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\Button::class, ['icon' => 'right-circled','href' => ''.e($button_url).'']); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withName('button'); ?>
<?php $component->withAttributes([]); ?><?php echo e($button_text); ?> <?php if (isset($__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940)): ?>
<?php $component = $__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940; ?>
<?php unset($__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940); ?>
<?php endif; ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?> 
  <?php endif; ?>
</section>
<?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/sections/partnerships-posts.blade.php ENDPATH**/ ?>
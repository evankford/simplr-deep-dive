<?php $__env->startSection('content'); ?>

<?php if (current_user_can('edit_posts')) {
	echo '<script>var preAuth = true;</script>';
}?>


<?php $sectionIds = array_column($sections, 'ID')?>
<?php global $query; ?><?php $query = new WP_Query([
    'post_type' => 'section',
    'post__in' => $sectionIds,
    'orderby' => $sectionIds,
    'order' => "ASC",
    'posts_per_page'=> -1
  ]); ?>
<?php echo $__env->make('partials.pitch-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>


<?php $loopIndex = 0; ?>
<?php if (empty($query)) : ?><?php global $wp_query; ?><?php $query = $wp_query; ?><?php endif; ?><?php if ($query->have_posts()) : ?><?php while ($query->have_posts()) : $query->the_post(); ?>
  <?php $slug = str_replace('.blade.php' , '' , get_page_template_slug());?>
  <?php echo $__env->make($slug, ['index' => $loopIndex], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

  <?php $loopIndex++; ?>
<?php endwhile; wp_reset_postdata(); endif; ?>


<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/template-pitch.blade.php ENDPATH**/ ?>
<?php $__env->startSection('content'); ?>
<div class="flex flex-col items-center content-center pb-16 page-standard deco-top bg-gradient-midnight min-h-90h md:pb-24" data-module="animate-gradient">
  <section>
    <?php echo $__env->make('partials.page-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  </section>

  <?php echo $__env->make('sections.issues', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</div>
  <?php echo $__env->make('sections.posts', ['post_type' => 'partnership', 'limit' => 2, 'title' => "Featured Partnerships", 'button_text'=> 'More Partnerships','button_url' => get_post_type_archive_link('partnership')], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

<?php if($include_about): ?>
<?php echo $__env->make('partials.about', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php endif; ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/template-issue.blade.php ENDPATH**/ ?>
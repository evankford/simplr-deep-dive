<?php $__env->startSection('content'); ?>
<section class="flex flex-col items-center content-center px-6 pb-32 clip-bottom page-standard deco-top bg-gradient-brick min-h-90h" data-module="animate-gradient">
    <?php echo $__env->make('partials.page-header', ['title' => '404', 'subtitle' => 'Page Not Found'], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <div class="container standard-content ">
      <?php if(! have_posts()): ?>
     <?php if (isset($component)) { $__componentOriginald4c8f106e1e33ab85c5d037c2504e2574c1b0975 = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\Alert::class, ['type' => 'warning']); ?>
<?php $component->withName('alert'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withAttributes([]); ?>
      <?php echo __('Sorry, but the page you are trying to view does not exist.', 'sage'); ?>

     <?php if (isset($__componentOriginald4c8f106e1e33ab85c5d037c2504e2574c1b0975)): ?>
<?php $component = $__componentOriginald4c8f106e1e33ab85c5d037c2504e2574c1b0975; ?>
<?php unset($__componentOriginald4c8f106e1e33ab85c5d037c2504e2574c1b0975); ?>
<?php endif; ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?> 
    <?php endif; ?>
</section>

<?php echo $__env->make('sections.about', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/evan/Local Sites/simplr-deep-dive/app/bedrock/web/app/themes/deeperdive/resources/views/404.blade.php ENDPATH**/ ?>
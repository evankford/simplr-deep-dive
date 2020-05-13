<div class="excerpt--<?php echo e(get_post_type()); ?> flex flex-wrap items-stretch justify-center m-2 text-black bg-white md:flex-nowrap shadow-fun flex-full lg:flex-some">
  <div class="relative h-auto pb-48 flex-200">
    <?php echo $__env->make('partials.image-element' , ['image' => get_post_thumbnail_id(), 'args' => ['is_bg' => true, 'max_width' => 600]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  </div>
  <div class="p-8 pb-4 flex-300">
    <h3 class="mb-2 text-3xl font-bold leading-none uppercase md:text-4xl"><?php echo e(get_the_title()); ?></h3>
    <div class="rte"><?php echo get_the_excerpt(); ?></div>
     <?php if (isset($component)) { $__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940 = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\Button::class, ['icon' => 'right-circled','classes' => 'mt-6 ','href' => ''.e(get_the_permalink()).'']); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withName('button'); ?>
<?php $component->withAttributes([]); ?><?php echo e(__("Read More")); ?> <?php if (isset($__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940)): ?>
<?php $component = $__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940; ?>
<?php unset($__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940); ?>
<?php endif; ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?> 
  </div>
</div><?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/partials/excerpt.blade.php ENDPATH**/ ?>
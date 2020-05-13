
<div class="tracking-wider post-nav">

  <?php $prev_post = get_adjacent_post(false, '', true); ?>
  <?php if($prev_post): ?>
   <?php if (isset($component)) { $__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940 = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\Button::class, ['icon' => '','classes' => 'uppercase text-sm tracking-wider mr-4','href' => ''.e(get_permalink($prev_post->ID)).'']); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withName('button'); ?>
<?php $component->withAttributes([]); ?><i class="icon-left-circled"></i> <?php echo e($prev_post->post_title); ?> <?php if (isset($__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940)): ?>
<?php $component = $__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940; ?>
<?php unset($__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940); ?>
<?php endif; ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?> 
  <?php endif; ?>
  <?php $next_post = get_adjacent_post(false, '', false); ?>
  <?php if($next_post): ?>
   <?php if (isset($component)) { $__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940 = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\Button::class, ['icon' => 'right-circled','classes' => 'uppercase tracking-wider text-sm','href' => ''.e(get_permalink($next_post->ID)).'']); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withName('button'); ?>
<?php $component->withAttributes([]); ?><?php echo e($next_post->post_title); ?> <?php if (isset($__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940)): ?>
<?php $component = $__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940; ?>
<?php unset($__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940); ?>
<?php endif; ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?> 
  <?php endif; ?>

</div>
<?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/partials/partner-nav.blade.php ENDPATH**/ ?>
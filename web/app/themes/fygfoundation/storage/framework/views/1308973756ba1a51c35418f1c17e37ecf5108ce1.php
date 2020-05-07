<?php
use App\Helpers\Buttoner;
?>
<div class="icon-wrap">
  <?php echo e($icon['icon_url']); ?>

    <?php $__currentLoopData = $icons; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $icon): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
     <?php if (isset($component)) { $__componentOriginalf7b6b6c4bc4eccc8de0185d678bdf3c8197f591f = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\Icon::class, ['icon' => ''.e($icon['icon']).'']); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withName('icon'); ?>
<?php $component->withAttributes(['href' => ''.e($icon['icon_url']).'','title' => ''.e($icon['URL']['title']).'','show_title' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($icon['Show Title'])]); ?>
     <?php if (isset($__componentOriginalf7b6b6c4bc4eccc8de0185d678bdf3c8197f591f)): ?>
<?php $component = $__componentOriginalf7b6b6c4bc4eccc8de0185d678bdf3c8197f591f; ?>
<?php unset($__componentOriginalf7b6b6c4bc4eccc8de0185d678bdf3c8197f591f); ?>
<?php endif; ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?> 
  <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</div><?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/partials/icons.blade.php ENDPATH**/ ?>
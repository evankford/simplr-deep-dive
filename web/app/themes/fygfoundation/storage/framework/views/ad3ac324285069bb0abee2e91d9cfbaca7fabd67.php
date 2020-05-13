<div class="flex-content" data-anim-in-children>
  <?php $__currentLoopData = $content; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <?php if($item['acf_fc_layout'] == 'paragraph'): ?>

    <div class="flex-content__paragraph sm:text-lg">
      <?php echo $item['text']; ?>

    </div>

    <?php elseif($item['acf_fc_layout'] == 'image'): ?>

    <?php echo $__env->make('partials.image-element', ['image'=>$item['image'], ['args' => ['classes' => 'flex-content__image']]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <?php elseif($item['acf_fc_layout'] == 'header'): ?>
      <?php if($item['type'] == 'label'): ?>
        <h4 data-style="<?php echo e($item['type']); ?>" class="header-label flex-content__header">
          [<?php echo e($item['header']); ?>]
        </h4>
      <?php elseif($item['type'] == 'mega'): ?>
      <h2 data-style="<?php echo e($item['type']); ?>" class="break-words header-mega lg:text-6xl flex-content__header">
          <?php echo e($item['header']); ?>

        </h2>

      <?php endif; ?>
    <?php elseif($item['acf_fc_layout'] == 'button'): ?>
       <?php if (isset($component)) { $__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940 = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\Button::class, ['icon' => 'right-circled','href' => ''.e($item['button']['URL']['url']).'','target' => ''.e($item['button']['URL']['target']).'']); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withName('button'); ?>
<?php $component->withAttributes(['class' => 'text-lg uppercase']); ?><?php echo e($item['button']['URL']['title']); ?> <?php if (isset($__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940)): ?>
<?php $component = $__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940; ?>
<?php unset($__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940); ?>
<?php endif; ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?> 
    <?php elseif($item['acf_fc_layout'] == 'counter'): ?>
    <h2 class="break-words header-mega lg:text-6xl flex-content__header">
      <?php if($item['introduction']): ?>
      <span class="font-normal text-opacity-75"><?php echo e($item['introduction']); ?></span>
      <?php endif; ?>
      <span class="number" data-module="count-me"><?php echo e($item['number']); ?></span>
      <?php if($item['subtitle']): ?>
      <span class="font-normal text-opacity-75""><?php echo e($item['subtitle']); ?></span>
      <?php endif; ?>
    </h2>
    <?php endif; ?>
  <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</div><?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/partials/flex-content.blade.php ENDPATH**/ ?>
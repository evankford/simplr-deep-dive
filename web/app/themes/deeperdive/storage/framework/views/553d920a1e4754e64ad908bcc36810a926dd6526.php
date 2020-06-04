<a
    data-anim-in
    data-text="<?php echo e($text ?? $slot); ?>"
    <?php echo e($attrs); ?>

    data-button="<?php echo e($button); ?>"
    data-button-scene="<?php echo e($scene); ?>"
    href="<?php echo e($href); ?>" <?php echo e($target); ?>

    class=" hover-blue button <?php echo e($classes); ?>"><span class="leading-none align-center"><?php echo $text ?? $slot; ?></span><?php if (! ($icon == false)): ?> <i class="relative inline-block align-center z-10 ml-1 icon-<?php echo e($icon); ?>"></i><?php endif; ?></a><?php /**PATH /Users/evan/Local Sites/simplr-deep-dive/app/bedrock/web/app/themes/deeperdive/resources/views/components/button.blade.php ENDPATH**/ ?>
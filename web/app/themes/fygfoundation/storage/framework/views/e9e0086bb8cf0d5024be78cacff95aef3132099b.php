<a

    href="<?php echo e($href); ?>" <?php echo e($target); ?>

    class=" hover-blue inline-block  bg-black text-white px-5  py-2 leading-tight rounded-full my-3 button <?php echo e($classes); ?>"><?php echo $text ?? $slot; ?><?php if (! ($icon == false)): ?> <i class="relative inline-block z-10 ml-2 icon-<?php echo e($icon); ?>"></i><?php endif; ?></a><?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/components/button.blade.php ENDPATH**/ ?>
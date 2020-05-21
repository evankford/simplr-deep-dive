<?php if($section_icon || $section_icon_title): ?>
<div class="flex mr-auto items-center justify-start mb-4 p-4 md:pl-12 lg:absolute lg:left-0 lg:w-full">
    <?php if($section_icon): ?><div data-anim-in class="section-icon"><?php echo e(get_svg($section_icon['url'], 'w-full h-full')); ?></div><?php endif; ?>
    <?php if($section_icon_title): ?> <h4 data-anim-in class="header-label"><?php echo e($title); ?></h4> <?php endif; ?>
</div>
<?php endif; ?><?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/partials/icon-header.blade.php ENDPATH**/ ?>
<div class="my-4">
  <?php if($section_header): ?>
    <h2 data-anim-in class="text-left header-resp <?php if($section_decoration): ?> line-accent <?php endif; ?>"><?php echo e($section_header); ?></h2>
    <?php if($section_content): ?>
    <h3 data-anim-in class="mt-3 subheader-resp"><?php echo $section_content; ?></h3>
    <?php endif; ?>
  <?php endif; ?>
</div>
<?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/partials/section-header.blade.php ENDPATH**/ ?>
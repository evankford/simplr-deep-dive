<div class="relative z-10 block w-full mx-auto my-12 mb-12 overflow-visible text-center md:mb-18 lg:mb-24 absop image-header">
  <div data-anim-in class="absolute z-0 w-screen h-full mx-24 opacity-75 ">
    <?php echo $__env->make('partials.image-element', ['image'=>get_post_thumbnail_id(), 'args' => ['is_bg' => true]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  </div>
  <div class="relative z-20 flex flex-col items-start justify-center h-32 p-10 text-left md:pl-0 md:py-32 min-h-50h md:min-h-wide xl:min-h-600x aspect-widescreen">
    <h1 data-anim-in class="text-5xl header-mega lg:text-6xl xl:text-huge"><?php echo $title; ?></h1>

    <?php if($subtitle = get_field('subtitle')): ?>
    <h4 data-anim-in class="header-label"><?php echo e($subtitle); ?></h4>
    <?php endif; ?>
  </div>

</div>
<?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/partials/image-header.blade.php ENDPATH**/ ?>
<div class="relative z-40 w-full overflow-y-visible page-header">
<?php if($header_image): ?>
<div class="<?php if($background_style == 'offset'): ?> container my-12 md:my-18 lg:my-24 w-full <?php else: ?> image-header-full <?php endif; ?> relative z-10 block w-full mx-auto overflow-visible text-center image-header clip-bottom pb-16 lg:pb-24 -mb-24 lg:-mb-36" >

  <div data-anim-in class="opacity-60 absolute top-0 z-0 w-screen h-full <?php if($background_style == 'offset'): ?> ml-24 lg:ml-48 <?php endif; ?> ">
    <?php echo $__env->make('partials.image-element', ['image'=>$header_image, 'args' => ['is_bg' => true]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  </div>
  <div data-anim-in-children class="relative z-20 flex flex-col items-start justify-center h-32 max-w-3xl p-10 mx-auto text-left md:pl-0 md:pb-48 md:pt-24 min-h-50h md:min-h-wide xl:min-h-600x aspect-widescreen">
    <?php if(is_single()): ?>
      <a href="<?php echo e(get_post_type_archive_link(get_post_type())); ?>" class="underline transform hover:translate-x-2"><h4 class="header-label"><?php echo e(post_type_archive_title('', false)); ?></h4></a>
    <?php elseif($introduction): ?>
    <h4  class="header-label"><?php echo e($introduction); ?></h4>
    <?php endif; ?>
  <h1  class="my-4 text-6xl header-mega xl:text-huge"><?php echo $title; ?></h1>
  <?php if(get_post_type() == 'partnership' && !is_archive() && is_single()): ?>
    <?php echo $__env->make('partials.partner-nav', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  <?php elseif($subtitle): ?>
  <h4  class="header-label"><?php echo e($subtitle); ?></h4>
  <?php endif; ?>
  </div>

</div>

<?php else: ?>

<div data-anim-in-children class="container w-full max-w-4xl mx-auto my-8 text-center page-header lg:mt-24">
  <?php if($introduction): ?>
  <h4  class="header-label"><?php echo e($introduction); ?></h4>
  <?php endif; ?>
  <h1  class="my-4 md:text-6xl header-mega xl:text-huge"><?php echo $title; ?></h1>
  <?php if($subtitle): ?>
  <h4  class="header-label">[<?php echo e($subtitle); ?>]</h4>
  <?php endif; ?>
</div>

<?php endif; ?>
</div>

<?php /**PATH /Users/evan/Local Sites/crystall-ball/app/bedrock/web/app/themes/crystallball/resources/views/partials/page-header.blade.php ENDPATH**/ ?>
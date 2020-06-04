
<header class="banner pitch-header w-full absolute z-100 flex justify-between items-start" data-module="header">
  <div class="site-logo w-32 inline-block md:w-40 flex flex-col items-center justify-center h-16  md:h-20 p-4"><?php echo $__env->make('partials.image-element', ['image' => $logo, 'args' =>[ 'max_width' => 450]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?></div>
  <button data-mobile-menu-toggle class="relative z-100 w-16 h-16  text-xl lg:text-2xl flex items-center justify-center bg-lightblue text-white text-xl"><i data-open aria-label="Open Menu" class="inline-block icon-menu"></i> <i data-close aria-label="Open Menu" class="inline-block icon-times" aria-hidden="true"></i></button>
</header>
<div data-mobile-menu class="z-75 fixed header-menu top-0 left-0 w-full h-full flex items-stretch justify-end">
    <div class="header-bg bg-black " data-close-menu ></div>
    <div class="relative z-20 container max-w-3xl p-6 lg:pt-32 md:px-12 max-w-3xl w-85p bg-lightblue text-white">
      <ul class="max-w-xl mx-auto">
        <?php if (empty($query)) : ?><?php global $wp_query; ?><?php $query = $wp_query; ?><?php endif; ?><?php if ($query->have_posts()) : ?><?php while ($query->have_posts()) : $query->the_post(); ?>
        <li data-index="<?php echo e($loop->index); ?>" class="block my-2 <?php if(get_field('Main') > 0): ?> font-bold text-lg lg:text-xl mt-4 <?php else: ?> lg:text-lg pl-4 <?php endif; ?>">
            <a href="#<?php echo e(get_field('Handle')); ?>"><?php echo e(get_field('Title')); ?></a>
        </li>
        <?php endwhile; wp_reset_postdata(); endif; ?>
      </ul>
    </div>
  </div><?php /**PATH /Users/evan/Local Sites/simplr-deep-dive/app/bedrock/web/app/themes/deeperdive/resources/views/partials/pitch-header.blade.php ENDPATH**/ ?>
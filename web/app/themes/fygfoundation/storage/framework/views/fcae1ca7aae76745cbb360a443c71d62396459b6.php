<header class="banner" data-module="header">
  <div class="spacer h-6 block w-full lg:h-12"></div>
  <div class="container mx-auto flex items-center justify-between px-4 md:px-6 ">
    <a class="brand mr-auto flex-200 pr-24 md:pr-18 min-w40 max-w-2xs mr-auto relative z-101" href="<?php echo e(home_url('/')); ?>" data-header-logo>
      <?php if($header_logo): ?>
      <?php echo $__env->make('partials.image-element', ["image"=> $header_logo, "max_width" => 900], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      <?php else: ?>
      <?php echo e($siteName); ?>

      <?php endif; ?>
    </a>

    <nav class="hidden md:block nav-primary flex-200 max-w-sm" data-header-menu>
      <?php if(has_nav_menu('primary_navigation')): ?>
        <?php echo wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]); ?>

      <?php endif; ?>
    </nav>

     <?php if($header_socials && $socials): ?>
      <div class="social-list hidden lg:block text-left block  -ml-2 text-aqua">
        <?php $__currentLoopData = $socials; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $icon): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
               <?php if (isset($component)) { $__componentOriginalf7b6b6c4bc4eccc8de0185d678bdf3c8197f591f = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\Icon::class, ['class' => 'mr-1 p-1','target' => ''.e($icon['URL']['target']).'','href' => ''.e($icon['URL']['url']).'','icon' => ''.e($icon['icon']).'','title' => ''.e($icon['URL']['title']).'','showTitle' => $icon['Show Title']]); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withName('icon'); ?>
<?php $component->withAttributes([]); ?>
             <?php if (isset($__componentOriginalf7b6b6c4bc4eccc8de0185d678bdf3c8197f591f)): ?>
<?php $component = $__componentOriginalf7b6b6c4bc4eccc8de0185d678bdf3c8197f591f; ?>
<?php unset($__componentOriginalf7b6b6c4bc4eccc8de0185d678bdf3c8197f591f); ?>
<?php endif; ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?> 
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      </div>
    <?php endif; ?>

    <button class=" p-3 px-4 block md:hidden bg-blue text-white text-xl relative z-101" data-mobile-menu-toggle=""><i class="icon-times" aria-label="Close Menu" data-close aria-hidden="true"></i><i class="icon-menu" data-open aria-label="Open Menu"></i></button>

    <div class="mobile-nav-wrap p-12 bg-blue fixed flex flex-col items-center justify-center h-screen w-screen z-100 top-0 left-0 text-white" data-mobile-menu>
      <nav class="nav-mobile max-w-xl w-90 max-w-sm" data-header-menu>
        <?php if(has_nav_menu('primary_navigation')): ?>
          <?php echo wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]); ?>

        <?php endif; ?>
      </nav>

        <?php if($header_socials && $socials): ?>
        <div class="social-list mt-12 text-left block  -ml-2 text-aqua">
          <?php $__currentLoopData = $socials; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $icon): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                 <?php if (isset($component)) { $__componentOriginalf7b6b6c4bc4eccc8de0185d678bdf3c8197f591f = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\Icon::class, ['class' => 'mr-1 p-1','target' => ''.e($icon['URL']['target']).'','href' => ''.e($icon['URL']['url']).'','icon' => ''.e($icon['icon']).'','title' => ''.e($icon['URL']['title']).'','showTitle' => $icon['Show Title']]); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withName('icon'); ?>
<?php $component->withAttributes([]); ?>
               <?php if (isset($__componentOriginalf7b6b6c4bc4eccc8de0185d678bdf3c8197f591f)): ?>
<?php $component = $__componentOriginalf7b6b6c4bc4eccc8de0185d678bdf3c8197f591f; ?>
<?php unset($__componentOriginalf7b6b6c4bc4eccc8de0185d678bdf3c8197f591f); ?>
<?php endif; ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?> 
          <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
        <?php endif; ?>
    </div>
  </div>
  <div class="spacer h-6 block w-full lg:h-12"></div>
</header>
<div class="header-bg"></div><?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/partials/header.blade.php ENDPATH**/ ?>
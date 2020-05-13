<div class="relative z-20 p-3 py-12 pt-24 -mt-20 text-white md:pt-32 lg:pt-48 site-footer-wrap bg-blacker clip-top-subtle">
  <footer class="content-info site-footer " role="contentinfo">
    <div class="container flex flex-wrap items-start justify-start mx-auto md:justify-between">
      <div class="m-5 mr-auto text-center flex-200 first:mt-0 md:mr-12">
          <a href="<?php echo e($logo_url); ?>" class="relative block w-40 md:ml-0 md:w-56 max--sm image-link" target="_blank" rel="noreferrer">
             <?php if($logo): ?>
             <?php echo $__env->make('partials.image-element', ['image'=> $logo, 'args'=>['max_width'=> 600]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
             <?php endif; ?>
          </a>
          <?php if($socials_enabled && $socials): ?>
          <div class="block mt-4 -ml-2 text-left social-list text-aqua">
            <?php $__currentLoopData = $socials; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $icon): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                  <?php if (isset($component)) { $__componentOriginalf7b6b6c4bc4eccc8de0185d678bdf3c8197f591f = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\Icon::class, ['class' => 'p-1 mr-1','target' => ''.e($icon['URL']['target']).'','href' => ''.e($icon['URL']['url']).'','icon' => ''.e($icon['icon']).'','title' => ''.e($icon['URL']['title']).'','showTitle' => $icon['Show Title']]); ?>
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
            
            <?php if($signup_enabled && $signup_display == 'button' ): ?>
              <a data-signup-button></a>
            <?php endif; ?>
          <?php endif; ?>
      </div>
      <?php if($signup_enabled == true && $signup_display == 'inline'): ?>

      <div class="m-5 flex-300 lg:mr-12">
          <?php echo do_shortcode("[ninja_form id=" . $signup_form . "]") ?>
        </div>
      <?php endif; ?>
      <?php if($menus_enabled && has_nav_menu('footer_navigation')): ?>
      <div class="m-5 text-left flex-140 max-w-2xs lg:mx-8">
        <?php if($menu_title_1): ?>
        <h4 class="mb-3 font-bold tracking-wider uppercase text-10 opacity-80"><?php echo e($menu_title_1); ?></h4>
        <?php endif; ?>
          <?php echo e(wp_nav_menu(['theme_location' => 'footer_navigation', 'walker' => new \App\Helpers\Walker(), "container" => false, "items_wrap" => '<ul id="%1$s" class="%2$s" role="menubar">%3$s</ul>'])); ?>

      </div>
      <?php endif; ?>
      <?php if($menus_enabled && has_nav_menu('footer_navigation_2')): ?>
      <div class="m-5 text-left flex-140 max-w-2xs lg:mx-8 last:mr-0">
        <?php if($menu_title_2): ?>
        <h4 class="mb-3 font-bold tracking-wider uppercase text-10 opacity-80"><?php echo e($menu_title_2); ?></h4>
        <?php endif; ?>
        <?php echo e(wp_nav_menu(['theme_location' => 'footer_navigation_2', 'walker' => new \App\Helpers\Walker(), "container" => false, "items_wrap" => '<ul id="%1$s" class="%2$s" role="menubar">%3$s</ul>'])); ?>

      </div>
      <?php endif; ?>
    </div>
    <div class="mx-4 mt-6 text-sm text-center text-white text-opacity-75 footer-super lg:mt-12 lg:mx-8">
      <p class="">&copy; <?php echo e(date("Y")); ?> <?php echo e($copyright); ?></p>
      <p class="mt-4 align-top">An <a class="mx-1 -mb-px align-top hover-after" href="https://evankerrickford.com" target="_blank"  rel="nofollow noopener">ekf</a> site</p>
    </div>
  </footer>
  <?php echo $__env->make('partials.browser-update', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</div>
<?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/partials/footer.blade.php ENDPATH**/ ?>
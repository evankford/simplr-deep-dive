<div class=" site-footer-wrap bg-black text-white p-3 py-12 pt-40 -mt-20 clip-top-subtle">
  <footer class="content-info site-footer " role="contentinfo">
    <div class="flex flex-wrap container mx-auto items-start justify-start md:justify-between">
      <div class="flex-200 first:mt-0 m-5 mr-auto md:mr-12 text-center">
          <a href="<?php echo e($logo_url); ?>" class="relative block w-40  md:ml-0 md:w-56 max--sm image-link" target="_blank" rel="noreferrer">
             <?php if($logo): ?>
             <?php echo $__env->make('partials.image-element', ['image'=> $logo, 'args'=>['max_width'=> 600]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
             <?php endif; ?>
          </a>
          <?php if($socials_enabled && $socials): ?>
          <div class="social-list text-left block mt-4 -ml-2 text-aqua">
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
            
            <?php if($signup_enabled && $signup_display == 'button' ): ?>
              <a data-signup-button></a>
            <?php endif; ?>
          <?php endif; ?>
      </div>
      <?php if($signup_enabled == true && $signup_display == 'inline'): ?>

      <div class="flex-300 m-5 lg:mr-12">
          <?php echo do_shortcode("[ninja_form id=" . $signup_form . "]") ?>
        </div>
      <?php endif; ?>
      <?php if($menus_enabled && has_nav_menu('footer_navigation')): ?>
      <div class="flex-140 max-w-2xs text-left m-5 lg:mx-8">
        <?php if($menu_title_1): ?>
        <h4 class="font-bold text-10 uppercase tracking-wider mb-3 opacity-80"><?php echo e($menu_title_1); ?></h4>
        <?php endif; ?>
          <?php echo e(wp_nav_menu(['theme_location' => 'footer_navigation', 'walker' => new \App\Helpers\Walker(), "container" => false, "items_wrap" => '<ul id="%1$s" class="%2$s" role="menubar">%3$s</ul>'])); ?>

      </div>
      <?php endif; ?>
      <?php if($menus_enabled && has_nav_menu('footer_navigation_2')): ?>
      <div class="flex-140 max-w-2xs text-left m-5 lg:mx-8 last:mr-0">
        <?php if($menu_title_2): ?>
        <h4 class="font-bold text-10 uppercase tracking-wider mb-3 opacity-80"><?php echo e($menu_title_2); ?></h4>
        <?php endif; ?>
        <?php echo e(wp_nav_menu(['theme_location' => 'footer_navigation_2', 'walker' => new \App\Helpers\Walker(), "container" => false, "items_wrap" => '<ul id="%1$s" class="%2$s" role="menubar">%3$s</ul>'])); ?>

      </div>
      <?php endif; ?>
    </div>
    <div class="footer-super text-center mt-6 lg:mt-12 mx-4 lg:mx-8 text-white text-opacity-75 text-sm">
      <p class="">&copy; <?php echo e(date("Y")); ?> <?php echo e($copyright); ?></p>
      <p class="mt-4 align-top">An <a class="hover-after -mb-px align-top mx-1" href="https://evankerrickford.com" target="_blank"  rel="nofollow noopener">ekf</a> site</p>
    </div>
  </footer>
  <?php echo $__env->make('partials.browser-update', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</div>
<?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/partials/footer.blade.php ENDPATH**/ ?>
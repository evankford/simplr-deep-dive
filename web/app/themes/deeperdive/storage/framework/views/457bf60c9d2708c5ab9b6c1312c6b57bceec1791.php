<div class="fixed z-40 flex flex-col items-center justify-center w-full h-full min-h-screen p-8 text-black introduction" data-scene="intro" data-status="current">
  <div class="absolute top-0 left-0 z-0 w-full h-full intro-bg bg-offwhite backdrop-blur opacity-90"></div>
  <div class="relative z-10 max-w-lg m-auto text-center intro-content w-85p">
     <div data-anim-in class="mx-auto my-4 max-w-3xs">
       <?php echo $__env->make('partials.image-element', ['image'=> $intro_logo, 'args' => ['max_width' => 600]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      </div>

      <h2 data-anim-in class="my-8 text-black header-resp"><?php echo e($intro_text); ?></h2>


    <button data-anim-in data-button-scene="intro" data-button="next" class="button"><span><?php echo e($intro_button_text); ?></span> <i class="ml-1 icon-right-1"></i></button>

  </div>
</div><?php /**PATH /Users/evan/Local Sites/simplr-deep-dive/app/bedrock/web/app/themes/deeperdive/resources/views/scenes/intro.blade.php ENDPATH**/ ?>
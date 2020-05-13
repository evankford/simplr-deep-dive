<section class="relative z-10 flex flex-wrap items-center justify-center w-full px-1 px-3 py-12 pt-24 m-0 -mt-12 overflow-hidden text-white lg:-mt-40 lg:-mt-32 xl:-mt-40 section-about md:px-6 lg:pt-48 lg:px-8 min-h-90h">
  <div class="absolute left-0 z-0 w-screen h-full max-h-screen">
    <?php echo $__env->make('partials.image-element', ['image' => $about_bg, 'args' => ['is_bg' => true, 'rellax' => true, 'classes' => 'about-bg-image']], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  </div>
  <div class="relative z-20 flex flex-wrap items-start justify-center px-2 mx-auto lg:flex-no-wrap md:px-6">
    <div class="max-w-2xl my-10 mb-8 text-center flex-200 lg:max-w-md lg:pr-12 lg:pt-40 lg:text-left">
      <?php if($about_title): ?>
       <h2 data-anim-in class="mb-4 text-5xl header-mega lg:text-6xl"><?php echo e($about_title); ?></h2>
      <?php endif; ?>
      <?php if($about_subtitle): ?>
       <h4 data-anim-in class="header-label">[<?php echo e($about_subtitle); ?>]</h2>
      <?php endif; ?>
    </div>
    <div class="flex flex-wrap justify-center max-w-4xl px-2 my-10 flex-400 item-center ">
      <?php $__currentLoopData = $about_content; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php if (! ($item['button']['URL']['url'] == get_the_permalink())): ?>
        <div data-anim-in class="relative block max-w-2xl m-2 mb-12 about-item md:first:-ml-6 md:last:-mr-6 flex-300 last:mb-0">
          <div class="absolute top-0 left-0 z-0 w-full h-full about-bg">
            <?php echo $__env->make('partials.image-element', ['image' => $item['background'], 'args' => ['is_bg' => true]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
          </div>
          <div class="relative z-10 flex flex-wrap items-center justify-center about-content ">
            <?php if($item['title_image']): ?>
              <h3 class="p-4 mb-auto mr-auto -mt-12 flex-140 max-w-2xs" aria-label="<?php echo e($item['title']); ?>">
                <?php echo $__env->make('partials.image-element', ['image' => $item['title_image']], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
              </h3>
              <?php elseif($item['title']): ?>
                <h3 class="p-4 mb-auto mr-auto -mt-12 flex-140 max-w-2xs"><?php echo e($item['title']); ?></h3>
              <?php endif; ?>
            <div class="p-4 flex-200">
              <div class="my-4"><?php echo e($item['content']); ?></div>
              <?php if($item['button']): ?>
                 <?php if (isset($component)) { $__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940 = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\Button::class, ['icon' => 'right-circled','href' => ''.e($item['button']['URL']['url']).'','target' => ''.e($item['button']['URL']['target']).'']); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withName('button'); ?>
<?php $component->withAttributes(['class' => 'test']); ?><?php echo e($item['button']['URL']['title']); ?> <?php if (isset($__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940)): ?>
<?php $component = $__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940; ?>
<?php unset($__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940); ?>
<?php endif; ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?> 
              <?php endif; ?>
            </div>

          </div>
        </div>
        <?php endif; ?>
      <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </div>
  </div>
</section>
<?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/sections/about.blade.php ENDPATH**/ ?>
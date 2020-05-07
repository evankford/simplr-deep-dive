<section class="section-about overflow-hidden bg-black text-white relative m-0 w-full px-1 md:px-6 py-12 pt-24 lg:pt-48 px-3 lg:px-8 min-h-90h overflow-hidden flex flex-wrap items-center justify-center">
  <div class="absolute w-screen h-full z-0 left-0 max-h-screen">
    <?php echo $__env->make('partials.image-element', ['image' => $about_bg, 'args' => ['is_bg' => true, 'rellax' => true, 'classes' => 'about-bg-image']], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  </div>
  <div class="flex items-start justify-center flex-wrap lg:flex-no-wrap mx-auto px-2 md:px-6 relative z-20">
    <div class="flex-200 max-w-2xl lg:max-w-md text-center mb-8 lg:pr-12 lg:pt-40 lg:text-left my-10">
      <?php if($about_title): ?>
       <h2 data-anim-in class="header-mega text-5xl lg:text-6xl mb-4"><?php echo e($about_title); ?></h2>
      <?php endif; ?>
      <?php if($about_subtitle): ?>
       <h4 data-anim-in class="header-label">[<?php echo e($about_subtitle); ?>]</h2>
      <?php endif; ?>
    </div>
    <div class="my-10 flex-400 flex max-w-4xl px-2 flex-wrap item-center justify-center ">
      <?php $__currentLoopData = $about_content; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php if (! ($item['button']['URL']['url'] == get_the_permalink())): ?>
        <div data-anim-in class="about-item max-w-2xl md:first:-ml-6 md:last:-mr-6 flex-300 m-2 mb-12 last:mb-0  block relative">
          <div class="about-bg absolute z-0 w-full h-full top-0 left-0">
            <?php echo $__env->make('partials.image-element', ['image' => $item['background'], 'args' => ['is_bg' => true]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
          </div>
          <div class="about-content relative z-10 flex items-center justify-center flex-wrap ">
            <?php if($item['title_image']): ?>
              <h3 class="flex-140 p-4 mr-auto max-w-2xs -mt-12 mb-auto" aria-label="<?php echo e($item['title']); ?>">
                <?php echo $__env->make('partials.image-element', ['image' => $item['title_image']], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
              </h3>
              <?php elseif($item['title']): ?>
                <h3 class="flex-140 p-4 mr-auto max-w-2xs -mt-12 mb-auto"><?php echo e($item['title']); ?></h3>
              <?php endif; ?>
            <div class="flex-200 p-4">
              <div class="my-4"><?php echo e($item['content']); ?></div>
              <?php if($item['button']): ?>
                 <?php if (isset($component)) { $__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940 = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\Button::class, ['icon' => 'right-circled','class' => 'test','href' => ''.e($item['button']['URL']['url']).'','target' => ''.e($item['button']['URL']['target']).'']); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withName('button'); ?>
<?php $component->withAttributes([]); ?><?php echo e($item['button']['URL']['title']); ?> <?php if (isset($__componentOriginal065ae5da12ba8e75c6b4e84d90798c2fb812b940)): ?>
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
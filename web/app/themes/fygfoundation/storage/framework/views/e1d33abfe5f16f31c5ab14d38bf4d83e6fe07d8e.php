
<section class="section-partners text-white clip-bottom bg-darkblue relative pb-32">
  <div class="pt-12 partners-bg max-h-screen top-0 w-full h-full max-absolute z-0 block">
    <?php echo $__env->make('partials.image-element', ['image' => $partner_bg, 'args' => ['is_bg' => true]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  </div>
   <div class="lg:mt-24 mx-auto relative z-20 max-w-5xl p-6 container flex flex-wrap items-center justify-start lg:justify-center ">
    <div  class="flex-300 m-3 max-w-lg pr-24 sm:pr-12 text-white ">
      <?php echo $__env->make('partials.flex-content', ['content' => $partner_content_1], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
    <div class="flex-300 m-3 max-w-xl text-white">
      <?php echo $__env->make('partials.flex-content', ['content' => $partner_content_2], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
  </div>
  <div class="partners-list container mb-24 mt-4 max-w-5xl mx-auto">
    <?php if($partners_header): ?>
       <h4 data-anim-in class="header-label text-center my-8">[<?php echo e($partners_header); ?>]</h2>
    <?php endif; ?>
      <div data-anim-in-children class="flex flex-wrap items-center justify-center">
        <?php $__currentLoopData = $partners; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $partner): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <div class="flex-140 m-5 max-w-3xs icon-image">
            <?php echo $__env->make('partials.image-element', ['image'=> $partner, 'args' => ['max_width' => 600]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
          </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      </div>
  </div>
</section>
<?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/sections/partners.blade.php ENDPATH**/ ?>
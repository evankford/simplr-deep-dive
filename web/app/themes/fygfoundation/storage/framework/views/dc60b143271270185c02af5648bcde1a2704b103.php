
<section class="relative z-50 pt-32 pb-24 -my-24 text-white lg:-my-32 xl:-mb-48 bg-gradient-midnight clip-both section-team lg:pb-32">
  <div class="container max-w-5xl px-3 mx-auto mt-4 mb-24 ">
    <?php if($team_header): ?>
       <h4 data-anim-in class="mb-8 text-center header-label">[<?php echo e($team_header); ?>]</h2>
    <?php endif; ?>
      <div data-anim-in-children class="flex flex-wrap items-center justify-center">
        <?php $__currentLoopData = $team; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $member): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <div class="flex flex-wrap items-start justify-center p-3 px-6 m-4 my-8 text-black bg-white rounded shadow-fun flex-full">
              <div class="relative max-w-md mb-8 -mt-12 -ml-12 overflow-hidden rounded shadow-lg flex-300 lg:mb-4">
                <div class="relative image-square pb-full">
                  <?php echo $__env->make('partials.image-element', ['image'=> $member['Header']['Image'], 'args' => ['max_width' => 600, 'is_bg' => true]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                </div>
              </div>
              <div class="my-5 p-7 flex-most md:my-0 md:pl-12">
                <h4 class="my-4 text-3xl font-black md:text-4xl text-salmon"><?php echo e($member["Header"]['Name']); ?></h4>
                <h6 class="my-4 header-label">[<?php echo e($member["Header"]['Title']); ?>]</h6>
                <div class="text-sm rte">
                  <?php echo $member['About']; ?>

                </div>
              </div>
          </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      </div>
  </div>
</section>
<?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/sections/team.blade.php ENDPATH**/ ?>
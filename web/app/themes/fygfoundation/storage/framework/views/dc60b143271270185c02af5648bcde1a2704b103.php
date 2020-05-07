
<section class="section-team text-white clip-bottom bg-orange relative pb-24 lg:pb-32">
  <div class="partners-bg max-h-75h top-0 w-full h-full absolute z-0 block">
    <?php echo $__env->make('partials.image-element', ['image' => $team_bg, 'args' => ['is_bg' => true]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  </div>
   <div class="mt-16 lg:mt-24 mx-auto relative z-20 max-w-5xl p-6 container flex flex-wrap items-center justify-start lg:justify-center ">
    <div  class="flex-300 m-3 max-w-lg pr-24 sm:pr-12 text-white ">
      <?php echo $__env->make('partials.flex-content', ['content' => $team_content_1], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
    <div class="flex-300 m-3 max-w-xl text-white">
      <?php echo $__env->make('partials.flex-content', ['content' => $team_content_2], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
  </div>
  <div class="partners-list container mb-24 px-3 mt-4 max-w-5xl mx-auto">
    <?php if($team_header): ?>
       <h4 data-anim-in class="header-label text-center mb-8">[<?php echo e($team_header); ?>]</h2>
    <?php endif; ?>
      <div data-anim-in-children class="flex flex-wrap items-stretch justify-center">
        <?php $__currentLoopData = $team; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $member): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <div class="flex-some md:flex-300  m-2 md:m-3 p-3 text-black bg-white rounded shadow-lg flex flex-wrap items-start justify-center">
              <div class="max-w-xs flex-some rounded overflow-hidden">
                <?php echo $__env->make('partials.image-element', ['image'=> $member['Image'], 'args' => ['max_width' => 600]], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
              </div>
              <div class="flex-most my-5 md:my-0 pl-0 md:pl-5">
                <h4 class="header-label">[<?php echo e($member['Name']); ?>]</h4>
                <p class="text-md"><?php echo e($member['Title']); ?></h4>
              </div>
          </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      </div>
  </div>
</section>
<?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/sections/team.blade.php ENDPATH**/ ?>
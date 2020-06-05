<div class="fixed top-0 left-0 z-20 w-full h-full p-12 text-black" data-scene="chat"  data-status="pre">
  <style>

    body {
      --color-specialist: <?php echo e($specialist['Details']['Color']); ?>;
      --color-customer: <?php echo e($customer['Details']['Color']); ?>;
    }
  </style>
  <div class="min-h-full conversation">
      <div class="p-2 conversation__specialist" data-person>
      <div class="max-w-lg m-auto">
        <?php echo $__env->make('partials.image-element', ['image' => $specialist['Images']['Large Image']], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      </div>
      <hr class="h-1 mb-3 border-none bg-lightblue">
      <div class="flex items-end justify-start overflow-hidden specialist-details">
        <h4 class="mr-2 -mb-px text-2xl font-bold leading-none text-blue"><?php echo e($specialist['Details']['Name']); ?></h4>
        <h5 class="text-lg font-normal leading-none text-lightblue"><?php echo e($specialist['Details']['Title']); ?></h5>
      </div>

    </div>
    <div class="p-4 conversation__content">
        <div class="chat-outer">
          <div class="chat-inner">
        <?php $__currentLoopData = $messages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $message): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php if($message['acf_fc_layout'] == 'Message'): ?>
        <?php
        $author = strtolower($message['Settings']['Author']);
        $delay = intval($message['Settings']['Delay']) / 10;
        ?>

          <div data-active="false" class="message" data-author="<?php echo e($author); ?>" data-bubbles="<?php echo e($message['Settings']['Typing Bubbles?']); ?>" data-delay="<?php echo e($delay); ?>">
            <div class="w-auto m-2 chat-icon">
                <?php if($author == 'specialist'): ?>
                <div data-icon class="block mx-auto mb-1 overflow-hidden rounded-full w-14 bg-var-specialist">
                  <?php echo $__env->make('partials.image-element', ['image' => $specialist['Images']['Icon']], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                </div>
                <div data-label class="p-1 px-2 text-sm leading-none text-center text-white rounded-full bg-var-specialist">Specialist</div>
                <?php elseif($author == 'customer'): ?>
                <div data-icon class="block mx-auto mb-1 overflow-hidden rounded-full w-14 bg-var-customer"><?php echo $__env->make('partials.image-element', ['image' => $customer['Images']['Icon']], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?></div>
                <div data-label class="p-1 px-2 text-sm leading-none text-center text-white rounded-full bg-var-customer">Customer</div>
                <?php endif; ?>
            </div>
            <div class="m-4 circles">
              <div class="inline-block w-3 h-3 m-px rounded-full opacity-50 circle bg-gray"></div>
              <div class="inline-block w-3 h-3 m-px rounded-full opacity-50 circle bg-gray"></div>
              <div class="inline-block w-3 h-3 m-px rounded-full opacity-50 circle bg-gray"></div>
            </div>
            <div class="bg-white speech-bubble" data-message>
              <p class="text-black"><?php echo e($message['Message']); ?></p>
            </div>
          </div>
          <?php endif; ?>
          <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
          <?php if($review): ?>
            <div class="my-4 mt-8 review " data-active="false" data-delay="1.5">
              <p class="p-2 font-light text-center"><?php echo e($review); ?></p>
              <div class="stars" ></div>
            </div>
          <?php endif; ?>
          <button class="button" data-delay="1" data-active="false" ><span>Dive Deeper</span> <i class="ml-1 icon-right-1 "></i></button>
        </div>
      </div>
    </div>
      <div class="p-2 conversation__customer" data-person>
      <div class="max-w-lg m-auto">
        <?php echo $__env->make('partials.image-element', ['image' => $customer['Images']['Large Image']], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      </div>
      <hr class="h-1 mb-3 border-none bg-var-customer">
      <div class="flex items-end justify-end overflow-hidden specialist-details">
        <h4 class="mr-2 -mb-px text-2xl font-bold leading-none text-blue"><?php echo e($customer['Details']['Name']); ?></h4>
        <h5 class="text-lg font-normal leading-none text-var-customer"><?php echo e($customer['Details']['Title']); ?></h5>
      </div>
    </div>
  </div>
</div><?php /**PATH /Users/evan/Local Sites/simplr-deep-dive/app/bedrock/web/app/themes/deeperdive/resources/views/scenes/chat.blade.php ENDPATH**/ ?>
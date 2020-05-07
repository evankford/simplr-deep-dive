<div class="flex flex-wrap items-center justify-center py-6 md:justify-start contacts-wrap">
  <?php $__currentLoopData = $contacts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $contact): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
  <div class="max-w-xs mb-6 mr-6 text-left  flex-small contact">
    <h4 class="flex-auto text-xl text-heading"><?php echo e($contact['Title']); ?></h4>
    <div class="flex-auto details">
      <?php if($contact['Details']['Company']): ?>
        <div class="flex-small"><?php echo e($contact['Details']['Company']); ?></div>
      <?php endif; ?>
      <?php if($contact['Details']['Name']): ?>
        <div class="flex-small"><?php echo e($contact['Details']['Name']); ?></div>
      <?php endif; ?>
      <?php if($contact['Details']['Location']): ?>
        <div class="flex-small"><?php echo e($contact['Details']['Location']); ?></div>
      <?php endif; ?>
    </div>
      <?php echo $__env->make('partials.buttons', ['buttons' => $contact['Links']], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  </div>
  <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</div><?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/partials/contacts.blade.php ENDPATH**/ ?>
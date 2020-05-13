<form role="search" method="get" class="search-form" action="<?php echo e(home_url('/')); ?>">
  <label>
    <span class="screen-reader-text"><?php echo e(_x('Search for:', 'label', 'sage')); ?></span>
    <input type="search" class="search-field" placeholder="<?php echo esc_attr_x('Search &hellip;', 'placeholder', 'sage'); ?>" value="<?php echo e(get_search_query()); ?>" name="s">
  </label>

  <input type="submit" class="button" value="<?php echo e(esc_attr_x('Search', 'submit button', 'sage')); ?>">
</form>
<?php /**PATH /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/views/forms/search.blade.php ENDPATH**/ ?>
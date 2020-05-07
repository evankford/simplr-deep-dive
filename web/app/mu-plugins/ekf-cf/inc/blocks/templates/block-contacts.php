<!-- ekf:contacts-block-->
<div class="ekf-block-contacts">
  <?php if (have_rows('contacts', 'option')) : ?>
    <div class="contact-blocks-wrap">
  <?php while (have_rows('contacts', 'option')) : the_row() ?>
      <div class="contact-block">
        <div class="contact-block__inner">
          <div class="contact-block__header">
             <?php
             $details = get_sub_field('Details');
             if ($details['Company']) { echo "<h4 class=\"mega\">{$details['Company']}</h4>"; }
             if (($title = get_sub_field('Title')) !== false) { echo "<h5 class=\"meta\"><span class=\"label\">Type: </span><span class=\"info\">{$title}</span><h5>"; }

               if ($details['Name']) { echo "<h5 class=\"meta\"><span class=\"label\">Name: </span>{$details['Name']}<h5>"; }
               if ($details['Location']) { echo "<h5 class=\"meta\"><span class=\"label\">Location: </span>{$details['Location']}<h5>"; }
            ?>
          </div>
          <div class="contact-block__links button-wrap">
            <?php $links = get_sub_field('Links');
            if (isset($links) && sizeof($links) > 0) {
              foreach ($links as $link) {
                $icon = '';
                $clean = strtolower(str_replace('icon-', '', $link['icon']));
                if (gettype($clean) === 'string' &&  strlen($clean) > 0) {
                  $icon = "<i class=\"icon-{$clean}\"></i> ";
                }

                $targ = '';
                if ($link['URL']['target'] == '_blank') { $targ = ' target="_blank" rel="noreferrer" ';}

               echo "<a class=\"button simple small\" {$targ} href=\"{$link['URL']['url']}\">{$icon} {$link['URL']['title']}</a>";
              }
            }?>
          </div>
      </div><!--end .contact-block -->
    </div><!-- end .contact-block-wrap-->
    <?php endwhile;?>
    <?php else : ?>
      <div class="fallback only-admin">
        <h2>No Contacts</h2>
        <p>There are no contacts set for this site. Go to the <a href="/wp/wp-admin/admin.php?page=site-options">Options Page</a> to set contacts. This will currently display nothing on the live site.</p>
      </div>
  <?php endif;?>
  <!-- single contact-->
</div><!-- end .ekf-block-contacts-->
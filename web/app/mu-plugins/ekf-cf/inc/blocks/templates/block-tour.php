<?php

use Samrap\Acf\Acf;
?>
<div class="tour-block">
    <div data-module="bit" class="tour-block__main" data-limit="<?php echo Acf::field('Initial Dates')->default(8)->get();?>" data-artist="<?php echo Acf::field('Artist Name')->get();?>" data-number-format="<?php echo Acf::field('Artist Name')->default("short numbers")->get();?>" data-show-year="<?php echo Acf::field('Show Year')->get();?>" data-show-lineup="<?php echo Acf::field('Show Lineup')->get();?>">
        <h2 class="loader">
            <?php echo Acf::field('Loading')->default("Loading")->get();?>
        </h2>
        <p class="admin-only">
          Your tour dates are set up, and will load here on the front end of the site!
        </p>
        <div class="button-wrap center" data-aos="fade-up">
            <a href="<?php echo Acf::field('Button URL')->default('https://bandsintown.com')->get();?>" class="button" <?php if (get_field('Button Behavior') == true) { echo "data-expand-bit"; }?> data-more-text="<?php echo Acf::field('More Text')->default('Show More')->get();?>" data-less-text="<?php echo Acf::field('Less Text')->default('Show Less')->get();?>"><?php echo Acf::field('More Text')->default('Show More')->get();?></a>
        </div>
        <div class="error hidden">
          <h3><?php echo Acf::field('Error')->default('Error loading dates, please try again!')->get();?></h3>
          <a href="<?php echo Acf::field('Button URL')->default('https://bandsintown.com')->get();?>" class="button"><?php echo Acf::field('More Text')->default('Show More')->get();?></a>
        </div>
        <?php
        $fallback_header = Acf::field('Fallback Header')->expect('string')->get();
        $fallback_text = Acf::field("Fallback Text")->expect('string')->get();
        $fallback_buttons = Acf::field("Fallback Buttons")->expect('array')->default([])->get();
        if ($fallback_header || $fallback_text || sizeof($fallback_buttons) > 0) {
          echo '<div class="fallback hidden" data-aos="fade-up">';
          if ($fallback_header) { echo "<h3>{$fallback_header}</h3>"; }
          if ($fallback_text) { echo "<div class=\"rte\">{$fallback_text}</div>"; }
          if (sizeof($fallback_buttons) > 0) {
            echo "<div class=\"button-wrap\">";
            foreach ($fallback_buttons as $button) {
              $icon = '';
              $clean = strtolower(str_replace('icon-', '', $button['icon']));
              if (gettype($clean) === 'string' &&  strlen($clean) > 0) {
                $icon = "<i class=\"icon-{$clean}\"></i> ";
              }
              $targ = '';
              if ($button['URL']['target'] == '_blank') { $targ = ' target="_blank" rel="noreferrer" ';}
              echo "<a class=\"button\" {$targ} href=\"{$button['URL']['url']}\">{$icon} {$button['URL']['title']}</a>";
            }
            echo "</div>";
          }
          echo '</div><!-- end fallback -->';
        } ?>
  </div>
</div>
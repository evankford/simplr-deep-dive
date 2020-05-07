<?php

namespace App\Lib\Helpers;

use Samrap\Acf\Acf;
use App\Lib\Helpers\Buttons;

class Countdown {
    function __construct($countdownObject, $args) {
      $this->props = array_merge(self::$objectDefaults, $countdownObject);
      $this->args = array_merge(self::$argDefaults, $args);

      $this->keys = array_keys($countdownObject);
      $this->beforeKeys = array_keys($countdownObject['before_finished']);
      $this->afterKeys = array_keys($countdownObject['after_finished']);

      $this->timeObj = \DateTime::createFromFormat('Y-m-d H:i:s', $this->props['Time']);
      $this->isFinished =$this->timeObj < new \DateTime;
      $this->finishedClass = $this->getFinishedClass();
      return $this->timeObj;
    }

    public static $objectDefaults = [
        'Time' => '2021-05-06 00:00:00',
        'Style' => 'minimal'
    ];

    public static $argDefaults = [
        'show_buttons' => true
    ];

    public function formatTime() {
      return $this->timeObj->format('D, d M Y, H:i:s');
      // return gettype($this->timeObj);
    }

    public function getFinishedClass() {
        if ($this->isFinished) {
            return 'finished';
        } else {
            return 'counting';
        }

    }

    public function render() {
      ?>
      <div class="countdown style--<?php echo $this->props['Style']?> <?php echo $this->finishedClass;?>" data-module="countdown" data-style="<?php echo $this->props['Style'];?>" data-datetime="<?php echo $this->formatTime();?>">
        <div class="countdown__inner">
          <div class="countdown-content counting-content <?php if ($this->isFinished) { echo 'hidden'; }?>" data-counting-content>
            <?php
              if (in_array('introduction', $this->beforeKeys) && $this->props['before_finished']['introduction']) {
                echo "<p class=\"text\">{$this->props['before_finished']['introduction']}</p>";
              }
              if (in_array('after', $this->beforeKeys) && $this->props['before_finished']['after']) {
                echo "<p class=\"text\">{$this->props['before_finished']['after']}</p>";
              }

              if ($this->args['show_buttons'] == true && in_array('button', $this->beforeKeys) && $this->props['before_finished']['enable_button'] > 0) {
                Buttons::single($this->props['before_finished']['button']);
              }
              echo '<div class="countdown-timer" data-countdown-target></div>';
            ?>
          </div>
          <div class="countdown-content finished-content <?php if (!$this->isFinished) {echo 'hidden'; }?>" data-finished-content>
          <?php
            if (in_array('introduction', $this->afterKeys) && $this->props['after_finished']['introduction']) {
              echo "<p class=\"text\">{$this->props['after_finished']['introduction']}</p>";
            }
            if (in_array('after', $this->afterKeys) && $this->props['after_finished']['after']) {
              echo "<p class=\"text\">{$this->props['after_finished']['after']}</p>";
            }
            if ($this->args['show_buttons'] == true && in_array('button', $this->afterKeys) && $this->props['after_finished']['enable_button'] > 0) {
              Buttons::single($this->props['after_finished']['button']);
            }

            ?>
          </div>
      </div>
    </div>
      <?php
    }
}
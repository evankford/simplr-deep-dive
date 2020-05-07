<?php

namespace App\Helpers;


class AOS {
  function __construct($startDelay = 0) {
    $this->counter = $startDelay;
  }
  public function increment($style = 'fade-up', $diff = 100) {
    $this->counter = $this->counter + $diff;
    $output = " data-aos={$style} data-aos-delay=\"{$this->counter}\" ";
    return $output;
  }

  public static function fadeUp($classes='') {
    $output = ' data-aos="fade-up" ';
    return $output;
  }
  public static function custom($anim='fade-up', $delay = 0) {
    $delay = $delay + 0;
    $output = " data-aos={$anim} data-aos-delay=\"{$delay}\" ";
    return $output;
  }
  public static function animate($anim='fade-up', $delay = 0) {
    $delay = $delay + 0;
    $output = " data-aos={$anim} data-aos-delay=\"{$delay}\" ";
    return $output;
  }
  public function resetIncrement() {
    $this->counter = 0;
  }
  public function rawIncrement() {
    $this->counter = $this->counter + 100;
    return $this->counter();
  }
}
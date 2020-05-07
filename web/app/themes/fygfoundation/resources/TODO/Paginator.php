<?php

namespace App\Lib\Helpers;


class Paginater {

  public static $defaults = [
    'splits' => 300,
    'count_by' => 'words'
  ];

  function __construct($content, $args =[]) {
    $this->props = array_merge(self::$defaults, $this->args);
    $this->content = $content;
  }

  public function render() {
    return $this->content;
  }
}
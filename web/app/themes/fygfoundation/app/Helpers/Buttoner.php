<?php

namespace App\Helpers;

class Buttoner {
	public static function getTarget($link) {
    if ($link['target'] == '_blank') {
      return ' target="_blank" rel="noopener nofollow noreferrer" ';
    }
  }
}
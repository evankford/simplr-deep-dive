<?php

namespace App\Lib\Helpers;
use Samrap\Acf\Acf;
use Roots\Sage\Container;

class Icons {
	/**
		* Constructor for imager
		* @param string|object|int $img
	 	*	@param array $args
		* @param bool $render
	 */
  function __construct() {

  }

  public static $defaults = ['icon' => 'facebook', 'url' => 'https://example.com', 'title' => 'On Facebook', 'target' => '', 'Show Title' => false];
  public static function startWrap($classes='') {
    echo "<ul class=\"social-wrap {$classes}\">";
  }
  public static function endWrap() {
    echo "</ul>";
  }
  public static function prepareProps($args) {
    $urlObj = [];
    $urlObj = $args['URL'];
    unset($args['URL']);
    $new = array_merge(self::$defaults, $args , $urlObj);
    return $new;
  }

  public static function single($args = []) {
    $props = self::prepareProps($args);
    $clean = strtolower(str_replace('icon-', '', $props['icon']));
    if ($props['Show Title']) {
      $visibleTitle = " <span class=\"icon__text\">{$props['title']}</span>";
    } else {
      $visibleTitle="";
    }

    $ext = '';
    if ($props['target'] == '_blank') {
      $ext = ' target="_blank" rel="noreferrer"';
    }

    echo "<li>";
      echo "<a href=\"{$props['url']}\" class=\"icon\" title=\"{$props['title']}\" {$ext}><i class=\"icon-{$clean}\"></i>{$visibleTitle}</a>";
    echo "</li>";
  }
}
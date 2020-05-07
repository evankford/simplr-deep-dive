<?php

namespace App\Lib\Helpers;
use Samrap\Acf\Acf;
use Roots\Sage\Container;

class Buttons {
	/**
		* Constructor for imager
		* @param string|object|int $img
	 	*	@param array $args
		* @param bool $render
	 */
  function __construct() {

  }
  public static function startWrap($classes='', $align="center") {
    echo "<div class=\"button-wrap {$classes} align--{$align}\">";
  }
  public static function endWrap() {
    echo "</div>";
  }

  public static $defaults = ['icon' => 'facebook', 'url' => 'https://example.com', 'title' => 'Button Text', 'visible_title' => true, 'target' => '', 'lightbox' => false, 'Download' => false];

   public static function prepareProps($args) {
    $urlObj = [];
    $urlObj = $args['URL'];
    unset($args['URL']);
    $new = array_merge(self::$defaults, $args , $urlObj);
    return $new;
  }

  public static function single($args = [], $classes ="") {
    $props = self::prepareProps($args);

    $clean = strtolower(str_replace('icon-', '', $props['icon']));

    $visibleTitle = '';
    if ($props['visible_title'] == true) {
      $visibleTitle = "<span data-text=\"{$props['title']}\" class=\"button__text\">{$props['title']}</span>";
    }

    $icon = '';
    if (gettype($clean) === 'string' &&  strlen($clean) > 0) {
      $icon = "<i class=\"icon-{$clean}\"></i> ";
    }

    $ext = '';
    if ($props['target'] == '_blank') {
      $ext = ' target="_blank" rel="noreferrer"';
    }

    $dl = '';
    if ($props['Download']) {
      $ext = ' download ';
    }

    $lb = '';
    if ($props['lightbox'] == true) {
      $lb = 'data-lightbox-button';
    }

    echo "<a href=\"{$props['url']}\" {$lb} class=\"button {$classes}\" title=\"{$props['title']}\" {$ext} {$dl}>{$icon}{$visibleTitle}</a>";
  }
}
<?php
namespace App;
use function \Sober\Intervention\intervention;

class Intervener {

  // Clean up all the admin
  function __construct() {
    self::init();
	}

	 public static function init() {
		//  echo (get_user_role());
		 if (function_exists('\Sober\Intervention\intervention')) {
			 // now you can use the function to call the required modules and their params
			intervention('add-svg-support');
			intervention('remove-howdy');
			intervention('remove-taxonomies');
			intervention('remove-help-tabs');
			intervention('update-pagination');
			intervention('remove-update-notices');
			intervention('remove-toolbar-items');
			intervention('remove-widgets');
			intervention('remove-dashboard-items', array('right-now', 'incoming-links', 'quick-draft', 'drafts', 'news', 'ogf-rss-feed'));
			intervention('remove-page-components', ['author', 'page-attributes', 'custom-fields', 'comments']);
			intervention('remove-post-components', ['author', 'page-attributes', 'custom-fields']);
				intervention('remove-menu-items', ['comments', 'danger-zone']);
		}
  }
}
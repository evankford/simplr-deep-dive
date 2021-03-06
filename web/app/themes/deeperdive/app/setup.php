<?php

/**
 * Theme setup.
 */

namespace App;
use JohnBillion\ExtendedCpts;
use function Roots\asset;
use function \Sober\Intervention\intervention;

if (function_exists('\Sober\Intervention\intervention')) {
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
intervention('remove-menu-items', ['danger-zone', 'posts']);
intervention('remove-menu-items', ['comments', 'posts'], 'all');
}
/**
 * Register the theme assets.
 *
 * @return void
 */
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_script('sage/vendor.js', asset('scripts/vendor.js')->uri(), ['jquery'], null, true);
    wp_enqueue_script('sage/app.js', asset('scripts/app.js')->uri(), ['sage/vendor.js', 'jquery'], null, true);

    wp_add_inline_script('sage/vendor.js', asset('scripts/manifest.js')->contents(), 'before');

    if (is_single() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }

    wp_enqueue_style('sage/app.css', asset('styles/app.css')->uri(), false, null);
    wp_enqueue_style('gfonts', 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap', false, null);
}, 100);

/**
 * Register the theme assets with the block editor.
 *
 * @return void
 */
add_action('enqueue_block_editor_assets', function () {
    if ($manifest = asset('scripts/manifest.asset.php')->get()) {
        wp_enqueue_script('sage/vendor.js', asset('scripts/vendor.js')->uri(), $manifest['dependencies'], null, true);
        wp_enqueue_script('sage/editor.js', asset('scripts/editor.js')->uri(), ['sage/vendor.js'], null, true);

        wp_add_inline_script('sage/vendor.js', asset('scripts/manifest.js')->contents(), 'before');
    }

    wp_enqueue_style('sage/editor.css', asset('styles/editor.css')->uri(), false, null);
}, 100);

/**
 * Register the initial theme setup.
 *
 * @return void
 */
add_action('after_setup_theme', function () {
    /**
     * Enable features from Soil when plugin is activated
     * @link https://roots.io/plugins/soil/
     */
    add_theme_support('soil-clean-up');
    add_theme_support('soil-nav-walker');
    add_theme_support('soil-nice-search');
    add_theme_support('soil-relative-urls');

    /**
     * Enable plugins to manage the document title
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#title-tag
     */
    add_theme_support('title-tag');



    /**
     * Register navigation menus
     * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
     */
    register_nav_menus([
        'primary_navigation' => __('Primary Navigation', 'sage'),
        'footer_navigation' => __('Footer Navigation', 'sage'),
        'footer_navigation_2' => __('Footer Navigation 2', 'sage')
    ]);

    /**
     * Enable post thumbnails
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support('post-thumbnails');

    $respimg_sizes = [ 300, 450 , 700, 900, 1200, 1600,2000, 2500, 3000];
    foreach ($respimg_sizes as $size) {
        $sizeString = $size . 'w';
        add_image_size($sizeString, $size);
    }
    /**
     * Add theme support for Wide Alignment
     * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/themes/theme-support/#wide-alignment
     */
    add_theme_support('align-wide');

    add_theme_support('post-formats', ['aside',  'link',  'video' ]);

    /**
     * Enable responsive embeds
     * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/themes/theme-support/#responsive-embedded-content
     */
    add_theme_support('responsive-embeds');

    /**
     * Enable HTML5 markup support
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#html5
     */
    add_theme_support('html5', ['caption', 'comment-form', 'comment-list', 'gallery', 'search-form']);

    /**
     * Enable selective refresh for widgets in customizer
     * @link https://developer.wordpress.org/themes/advanced-topics/customizer-api/#theme-support-in-sidebars
     */
    add_theme_support('customize-selective-refresh-widgets');

    /**
     * Enable theme color palette support
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-color-palettes
     */
    add_theme_support('editor-color-palette', [
        [
            'name'  => __('Primary', 'sage'),
            'slug'  => 'primary',
            'color' => '#525ddc',
        ]
    ]);
}, 20);

/**
 * Register the theme sidebars.
 *
 * @return void
 */
add_action('widgets_init', function () {
    $config = [
        'before_widget' => '<section class="widget %1$s %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ];

    register_sidebar([
        'name' => __('Primary', 'sage'),
        'id' => 'sidebar-primary'
    ] + $config);


});

add_action( 'init', function() {
    register_extended_post_type( 'Highlight' ,[
        'show_in_feed' => false,
        'public' => true,
        'supports' => array( 'title')
    ]);
    register_extended_post_type( 'Dive' ,[
        'show_in_feed' => false,
        'public' => true,
        'supports' => array( 'title', 'thumbnail')
    ]);
} );


add_action('acf/input/admin_head', 'my_acf_admin_head');

function ekf_acf_default_sections($value, $post_id, $field) {
    $new_value = array();
	// var_dump($value);
	if (gettype($value) != 'array' || sizeof($value) < 1) {
		$new = get_field('pitch_sections',get_option('page_on_front'));
		foreach ($new as $item) {
			array_push($new_value, strval($item->ID));
		}
	} else {
		$new_value = $value;
	}
	return $new_value;
}

function ekf_acf_default_shorts($value, $post_id, $field) {
		$new_value = array();
	if (gettype($value) != 'array' || sizeof($value) < 1) {
		$new = get_field('pitch_short_sections',get_option('page_on_front'));
		foreach ($new as $item) {
				array_push($new_value, strval($item->ID));
			}
		} else {
			$new_value = $value;
	}
	return $new_value;
}

// add_filter('acf/load_value/name=pitch_sections', 'ekf_acf_default_sections', 10, 3);
// add_filter('acf/load_value/name=pitch_short_sections', 'ekf_acf_default_shorts', 10, 3);

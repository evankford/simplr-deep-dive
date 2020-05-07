<?php

namespace EKF_CF\Inc\Blocks;

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @author    Your Name or Your Company
 */
class Blocks {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $ekf_cf    The ID of this plugin.
	 */
	private $ekf_cf;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * The text domain of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_text_domain    The text domain of this plugin.
	 */
	private $plugin_text_domain;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since       1.0.0
	 * @param       string $ekf_cf        The name of this plugin.
	 * @param       string $version            The version of this plugin.
	 * @param       string $plugin_text_domain The text domain of this plugin.
	 */
	public function __construct( $ekf_cf, $version, $plugin_text_domain ) {

		$this->ekf_cf = $ekf_cf;
		$this->version = $version;
		$this->plugin_text_domain = $plugin_text_domain;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->ekf_cf . '-blocks', \EKF_CF\ekf_cf_URL . 'assets/css/ekf-cf-blocks.css', array(), false, 'all' );

	}

	/**
	 * Register the JavaScript for the blocks area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		/*
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->ekf_cf . '-blocks', \EKF_CF\ekf_cf_URL . 'assets/js/blocks.js', array( ), false, false );

	}

	public function create_blocks() {
		if (function_exists('acf_register_block_type')) {
			acf_register_block_type([
				'name' 						=> 'tour-dates-block',
				'title'						=> __('Tour Dates'),
				'description' 		=> __('Tour Dates Loader'),
				'render_template' => plugin_dir_path(__FILE__) . 'templates/block-tour.php',
				'enqueue_assets'  => function() {
					wp_enqueue_style('tour-dates-block', \EKF_CF\ekf_cf_URL . 'assets/css/block-tour.css', [], false);
					wp_enqueue_script('tour-dates-block', \EKF_CF\ekf_cf_URL . 'assets/js/tourblock.js', [], false);
				},
				'supports'				=> [
					'multiple'				=> false
				]
			]);
			acf_register_block_type([
				'name' 						=> 'releases-block',
				'title'						=> __('All Releases'),
				'description' 		=> __('Release Section that automatically loads releases!'),
				'render_template' => plugin_dir_path(__FILE__) . 'templates/block-releases.php',
				'enqueue_assets'  => function() {
					wp_enqueue_style('releases-block', \EKF_CF\ekf_cf_URL . 'assets/css/block-releases.css', [], false);
					wp_enqueue_script('releases-block', \EKF_CF\ekf_cf_URL . 'assets/js/releasesblock.js', [], false);
				},
				'supports'				=> [
					'multiple'				=> false
				]
			]);
			acf_register_block_type([
				'name' 						=> 'videos-block',
				'title'						=> __('All Videos'),
				'description' 		=> __('Video Section that automatically loads videos!'),
				'render_template' => plugin_dir_path(__FILE__) . 'templates/block-videos.php',
				'enqueue_assets'  => function() {
					wp_enqueue_style('videos-block', \EKF_CF\ekf_cf_URL . 'assets/css/block-videos.css', [], false);
					wp_enqueue_script('videos-block', \EKF_CF\ekf_cf_URL . 'assets/js/videosblock.js', [], false);
				},
				'supports'				=> [
					'multiple'				=> false
				]
			]);
			acf_register_block_type([
				'name' 						=> 'contacts-block',
				'title'						=> __('All Contacts'),
				'description' 		=> __('Video Section That automatically loads contacts!'),
				'render_template' => plugin_dir_path(__FILE__) . 'templates/block-contacts.php',
				'enqueue_assets'  => function() {
					wp_enqueue_style('contacts-block', \EKF_CF\ekf_cf_URL . 'assets/css/block-contacts.css', [], false);
				},
				'supports'				=> [
					'multiple'				=> false
				]
			]);
		}
	}
}

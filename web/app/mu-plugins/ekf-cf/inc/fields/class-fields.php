<?php

namespace EKF_CF\Inc\Fields;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;

use EKF_CF\Inc\Fields\Components;
use EKF_CF\Inc\Fields\Views;
use EKF_CF\Inc\Fields\Blocks;

/**
 * Fired during plugin activation
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @author     Your Name or Your Company
 **/




class Fields {

	/**
	 * Short Description.
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */

  public static $json_path;


  public function __construct() {
		$this->live = $this->test_acf();
		if ($this->live) {
			acf_add_options_page(['page_title'=> __("Site Options"), 'menu_slug' => 'site-options', 'autoload' => true]);
		}
	}

	public static function test_acf() {
		if (function_exists('get_field')) {
			return true;
		}
	}
	public function create_fields() {
		if (function_exists('get_field')) {
			$this->init();
			$this->add_instructions();
		}
	}

	public  function init() {
		$this->create_pitches();
		$this->create_ball();
		$this->create_clouds();
		$this->create_site();
		$this->create_trio();
		$this->create_goodbye();
		$this->create_graph();
		$this->create_quality();
		$this->create_specialist();
		$this->create_chat();
		$this->create_simple();
		$this->create_standard();
		$this->create_icons();
		$this->create_footer();
		$this->create_quote();
		$this->create_timeline();
		// $this->create_default();
		// $this->createMainPage();
		// $this->create_impact();
		$this->enqueue_acf_scripts();
		$this->imageFocus();

	}

	public function enqueue_acf_scripts() {
		add_action('acf/input/admin_enqueue_scripts', function() {
			wp_enqueue_script( 'acf-js',\EKF_CF\ekf_cf_URL  . 'inc/fields/js/fields.js', array(), '1.0.0', true );
		});
	}

	public function add_instructions() {
		add_action('edit_form_after_editor', function() {
			echo '<p class="ekf-cf-instructions">';
				if ('artist' === get_post_type()) {
					echo 'Add an artist description/bio. This will be used in autogenerated about sections and on the artist archive of releases.';
				} elseif ('release' == get_post_type()) {
					echo 'Add an release description. This will be used on the page as "About the release" content.';
				}
			echo '</p>';
		});
	}

	public function imageFocus() {
		$image_focus = new FieldsBuilder('Image Focal Point');
		$image_focus
			->addRange('horizontal', ['label' => "Horizontal Center", "min" => 0, "max" => 100, "step" => 1])
				->setDefaultValue(50)
			->addRange('vertical', ['label' => "Vertical Center", "min" => 0, "max" => 100, "step" => 1])
				->setDefaultValue(50)
			->setLocation('attachment', '==', 'image');
			add_action('acf/init', function() use ($image_focus) {
				acf_add_local_field_group($image_focus->build());
			});
	}

	public function createMainPage() {
		$main_page = Views\Home::create();
			add_action('acf/init', function() use ($main_page) {
				acf_add_local_field_group($main_page->build());
			});
	}
	public function aboutPages() {

	}

	public function create_site() {
		$options = Views\Site::create();

		add_action('acf/init', function() use ($options) {
			acf_add_local_field_group($options->build());
		});
	}
	public function create_pitches() {
		$options = Views\Pitch::create();
		add_action('acf/init', function() use ($options) {
			acf_add_local_field_group($options->build());
		});
	}
	public function create_clouds() {
			$options = Views\Clouds::create();
		add_action('acf/init', function() use ($options) {
			acf_add_local_field_group($options->build());
		});
	}
	public function create_trio() {
			$options = Views\Trio::create();
		add_action('acf/init', function() use ($options) {
			acf_add_local_field_group($options->build());
		});
	}
	public function create_goodbye() {
			$options = Views\Goodbye::create();
		add_action('acf/init', function() use ($options) {
			acf_add_local_field_group($options->build());
		});
	}
	public function create_graph() {
			$options = Views\Graph::create();
		add_action('acf/init', function() use ($options) {
			acf_add_local_field_group($options->build());
		});
	}
	public function create_ball() {
		$options = Views\Ball::create();
		add_action('acf/init', function() use ($options) {
			acf_add_local_field_group($options->build());
		});
	}
	public function create_quality() {
		$options = Views\Quality::create();
		add_action('acf/init', function() use ($options) {
			acf_add_local_field_group($options->build());
		});
	}
	public function create_specialist() {
		$options = Views\Specialist::create();
		add_action('acf/init', function() use ($options) {
			acf_add_local_field_group($options->build());
		});
	}
	public function create_chat() {
		$options = Views\Chat::create();
		add_action('acf/init', function() use ($options) {
			acf_add_local_field_group($options->build());
		});
	}
	public function create_simple() {
		$options = Views\Simple::create();
		add_action('acf/init', function() use ($options) {
			acf_add_local_field_group($options->build());
		});
	}
	public function create_standard() {
		$options = Views\Standard::create();
		add_action('acf/init', function() use ($options) {
			acf_add_local_field_group($options->build());
		});
	}
	public function create_icons() {
		$options = Views\Icons::create();
		add_action('acf/init', function() use ($options) {
			acf_add_local_field_group($options->build());
		});
	}
	public function create_quote() {
		$options = Views\Quote::create();
		add_action('acf/init', function() use ($options) {
			acf_add_local_field_group($options->build());
		});
	}
	public function create_timeline() {
		$options = Views\Timeline::create();
		add_action('acf/init', function() use ($options) {
			acf_add_local_field_group($options->build());
		});
	}
	public function create_footer() {
		$options = Views\Footer::create();
		add_action('acf/init', function() use ($options) {
			acf_add_local_field_group($options->build());
		});
	}
}


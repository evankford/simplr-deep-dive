<?php
namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\FlexContent;
use EKF_CF\Inc\Fields\Components\Button;

class Pitch {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Pitch Options', ['style' => 'seamless', 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab("Sections")
      ->addPostObject('pitch_sections', ['label' => "Pitch Sections", "multiple" => 1, 'post_type' => "section"])
      // ->addPostObject('pitch_short_sections', ['label' => "Pitch Sections (Short)", "multiple" => 1, 'post_type' => "shortsection"])
    ->addTab("Header")
      ->addImage('Logo')
      ->addImage('Starter Image')
      ->addImage('Demonstration Image')
    ->addTab("Settings")
      ->addField('custom_css', 'acf_code_field', ['label' => "Custom CSS"])
    ->setLocation('page_template' ,'==' ,'template-pitch.blade.php')
			->or('post_type', '==', 'pitch');
    return $builder;
  }
}


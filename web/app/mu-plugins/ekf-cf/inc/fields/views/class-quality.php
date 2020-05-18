<?php
namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\SectionHeader;
use EKF_CF\Inc\Fields\Components\SectionSettings;

class Quality {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Quality Options', [ 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab("Header")
      ->addFields(SectionHeader::create())
    ->addTab("Content")
      ->addImage('Image 1', ['required' => 1])
      ->addImage('Image 2', ['required' => 1])
      ->addImage('Image 3', ['required' => 1])
      ->addColorPicker('Image Bottom Color', ['required' => 1, 'default_value' => '#f9745f'])
      ->addImage('Bottom Image 1')
      ->addImage('Bottom Image 2')
    ->addTab("Settings")
      ->addFields(SectionSettings::createFields())
    ->setLocation('page_template', '==', 'template-section-quality.blade.php');
    return $builder;
  }
}


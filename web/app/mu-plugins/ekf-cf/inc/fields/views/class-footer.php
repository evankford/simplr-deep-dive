<?php
namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\SectionSettings;

class Footer {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Footer Options', [ 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab("Image")
      ->addImage("Footer Logo")
      ->addImage("Footer Image")
    ->addTab("Settings")
      ->addFields(SectionSettings::createFields())
    ->setLocation('page_template', '==', 'template-section-footer.blade.php');
    return $builder;
  }
}


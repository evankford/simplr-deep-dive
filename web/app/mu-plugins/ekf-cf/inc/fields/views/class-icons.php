<?php
namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\SectionSettings;


class Icons {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Icons Options', [ 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab("Left")
      ->addImage("Left Logo")
      ->addText("Left Text")
      ->addGallery("Left Gallery")
    ->addTab("Right")
      ->addImage("Right Logo")
      ->addText("Right Text")
      ->addGallery("Right Gallery")
    ->addTab("Settings")
      ->addFields(SectionSettings::createFields())
    ->setLocation('page_template', '==', 'template-section-icons.blade.php');
    return $builder;
  }
}


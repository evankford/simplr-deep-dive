<?php
namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\SectionSettings;
use EKF_CF\Inc\Fields\Components\SectionHeader;

class Standard {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Standard Options', [ 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab("General")
    ->addFields(SectionHeader::create())
    ->addImage("Left Image")
    ->addImage("Right Image")
    ->addTrueFalse("Reverse")
    ->addTab("Settings")
      ->addFields(SectionSettings::createFields())
    ->setLocation('page_template', '==', 'template-section-standard.blade.php');
    return $builder;
  }
}


<?php
namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\SectionSettings;
use EKF_CF\Inc\Fields\Components\SectionHeader;

class Icons {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Icons Options', [ 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab("General")
      ->addFields(SectionHeader::create())
    ->addTab("Logos")
      ->addImage("Sample BG")
      ->addField('Code', 'acf_code_field')
    ->addTab("Settings")
      ->addFields(SectionSettings::createFields())
    ->setLocation('page_template', '==', 'template-highlight-sample.blade.php');
    return $builder;
  }
}


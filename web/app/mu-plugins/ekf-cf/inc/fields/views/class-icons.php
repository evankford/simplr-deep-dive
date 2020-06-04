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
      ->addGallery("All Logos")
      ->addTrueFalse("Animate")
    ->addTab("Settings")
      ->addFields(SectionSettings::createFields())
    ->setLocation('page_template', '==', 'template-highlight-icons.blade.php');
    return $builder;
  }
}


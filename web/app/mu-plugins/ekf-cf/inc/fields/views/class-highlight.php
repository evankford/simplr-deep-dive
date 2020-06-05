<?php
namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\SectionSettings;
use EKF_CF\Inc\Fields\Components\SectionHeader;

class Highlight {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Highlight Options', [ 'position'=> 'side', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab("General")
      ->addFields(SectionHeader::create())
    ->addTab("Settings")
      ->addFields(SectionSettings::createFields())
    ->setLocation('post_type', '==', 'highlight');
    return $builder;
  }
}


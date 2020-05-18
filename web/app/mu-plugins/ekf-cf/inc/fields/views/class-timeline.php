<?php
namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\SectionSettings;
use EKF_CF\Inc\Fields\Components\SectionHeader;

class Timeline {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Timeline Options', [ 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab("Header")
      ->addFields(SectionHeader::create())
    ->addTab("Timeline")
      ->addRepeater('Timeline')
        ->addText("Text")
      ->endRepeater()
    ->addTab("Settings")
      ->addFields(SectionSettings::createFields())
    ->setLocation('page_template', '==', 'template-section-timeline.blade.php');
    return $builder;
  }
}


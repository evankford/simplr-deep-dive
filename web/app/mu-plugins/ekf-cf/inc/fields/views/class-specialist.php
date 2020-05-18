<?php
namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\SectionHeader;
use EKF_CF\Inc\Fields\Components\SectionSettings;

class Specialist {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Specialist Options', [ 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab("Content")
      ->addFields(SectionHeader::create())
      ->addRepeater('Icons')
        ->addImage("Icon")
      ->endRepeater()
    ->addTab("Specialist")
      ->addImage('Specialist Image', ['required' => 1])
      ->addText('Name', ['required' => 1])
      ->addWysiwyg('Info', ['required' => 1])
    ->addTab("Settings")
      ->addFields(SectionSettings::createFields())
    ->setLocation('page_template', '==', 'template-section-specialist.blade.php');
    return $builder;
  }
}


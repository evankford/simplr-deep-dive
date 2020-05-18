<?php
namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\FlexContent;
use EKF_CF\Inc\Fields\Components\Button;
use EKF_CF\Inc\Fields\Components\SectionSettings;

class Goodbye {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Goodbye Options', [ 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab("Content")
      ->addRepeater('Goodbyes')
        ->addText('Text')
      ->endRepeater()
      ->addText('Title1', ['default_value' => "Hello"])
      ->addText('Title2',  ['default_value' => "Simplr."])
      ->addText('Subtitle',  ['default_value' => "Transparent per solved ticket pricing."])
      ->addField('SVG', 'acf_code_field')
    ->addTab("Settings")
      ->addFields(SectionSettings::createFields())
    ->setLocation('page_template', '==', 'template-section-goodbyes.blade.php');
    return $builder;
  }
}


<?php
namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\FlexContent;
use EKF_CF\Inc\Fields\Components\Button;
use EKF_CF\Inc\Fields\Components\SectionSettings;

class Ball {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Crystall Ball Options', [ 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab("SVG")
      ->addField('SVG', 'acf_code_field')
      ->addTrueFalse('Enable Animation')
      ->addColorPicker("Bottom Bar Color")
    ->addTab("Settings")
      ->addFields(SectionSettings::createFields())
    ->setLocation('page_template', '==', 'template-section-ball.blade.php');
    return $builder;
  }
}


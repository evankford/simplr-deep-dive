<?php
namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\FlexContent;
use EKF_CF\Inc\Fields\Components\Button;
use EKF_CF\Inc\Fields\Components\SectionSettings;

class Clouds {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Clouds Options', [ 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab("Content")
      ->addText('Section Header')
      ->addRepeater('Problems')
        ->addText('Title')
      ->endRepeater()
    ->addTab("Settings")
      ->addFields(SectionSettings::createFields())
    ->setLocation('page_template', '==', 'template-section-clouds.blade.php');
    return $builder;
  }
}


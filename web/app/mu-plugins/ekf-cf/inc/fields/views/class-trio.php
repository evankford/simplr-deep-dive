<?php
namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\FlexContent;
use EKF_CF\Inc\Fields\Components\Button;
use EKF_CF\Inc\Fields\Components\SectionSettings;

class Trio {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Trio Options', [ 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab("Content")
      ->addText("Header", ['default_value' => "You'd need a mind reader to foresee the curves."])
      ->addWysiwyg('Graph Step 1')
      ->addWysiwyg('Graph Step 2')
      ->addWysiwyg('Graph Step 3')
      ->addText('More Title')
      ->addRepeater('Icon List')
        ->addImage('Icon')
        ->addText('Title')
        ->addText('Text')
      ->endRepeater()
    ->addTab("Settings")
      ->addFields(SectionSettings::createFields())
    ->setLocation('page_template', '==', 'template-section-trio.blade.php');
    return $builder;
  }
}


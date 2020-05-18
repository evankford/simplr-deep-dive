<?php
namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\FlexContent;
use EKF_CF\Inc\Fields\Components\Button;
use EKF_CF\Inc\Fields\Components\SectionSettings;

class Chat {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder(' Chat Options', [ 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab("General")
    ->addText("Chat Header")
    ->addImage("Chat SVG", ['mime_types'=> "svg"])
      ->addGallery("Improvements")
      ->addColorPicker("Improvements BG")
    ->addTab("Settings")
      ->addFields(SectionSettings::createFields())
    ->setLocation('page_template', '==', 'template-section-chat.blade.php');
    return $builder;
  }
}


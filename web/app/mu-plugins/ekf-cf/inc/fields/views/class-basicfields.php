<?php
namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\FlexContent;
use EKF_CF\Inc\Fields\Components\Button;

class BasicFields {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Default Page Options', ['style' => 'seamless', 'position'=> 'side']);
  $builder
    ->addTab("Header")
      ->addMessage("NOTE:", "On some templates, this header is ignored entirely!")
      ->addText('Introduction')
      ->addText('Page Title', ['instructions' => "Leave blank to default to page title above!"])
      ->addText('Subtitle')
      ->addSelect("Background Image Style" ,  ['default_value' => "Offset",'instructions' => "To use a background image, set a featured image in the sidebar"])
        ->addChoices('No Image', 'Full Width', 'Offset')
    ->addTab('Settings')
      ->addTrueFalse('about_columns', ['label' => "Include ABOUT links?"])
      ->addTrueFalse('impact_columns', ['label' => "Include IMPACT links?"])
		->setLocation('post_type', '==', 'page')
			->or('post_type', '==', 'post');
    return $builder;
  }
}


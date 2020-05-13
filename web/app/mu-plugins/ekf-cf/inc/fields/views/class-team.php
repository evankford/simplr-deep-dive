<?php


namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\FlexContent;
use EKF_CF\Inc\Fields\Components\Button;

class Team {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Team Page Options', ['style' => 'seamless', 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder

    ->addTab('Team')
      ->addText('Team Header', ['default_value'=>"Meet Our Team"])
      ->addRepeater('team', ['label' => 'Team Members', 'layout'=> 'block'])
        ->addGroup('Header', ['layout' => 'table'])
          ->addImage('Image')
          ->addText('Name')
          ->addText('Title')
        ->endGroup()
        ->addWysiwyg("About")
      ->endRepeater()
    ->addTab("More About Us")
      ->addTrueFalse('include_more', ['label' => 'Include "More About Us" section (from home page)', 'instructions'=>"Will automatically skip the current page", "default_value" => true])
		->setLocation('page_template', '==', 'template-team.blade.php');
    return $builder;
  }
}
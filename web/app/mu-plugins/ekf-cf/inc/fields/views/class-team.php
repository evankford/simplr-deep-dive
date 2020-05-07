<?php


namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\FlexContent;

class Team {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Team Page Options', ['style' => 'seamless', 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab('Header')
      ->addImage('header_bg', ['label' => 'Background Image'])
      ->addField('team1', 'column', ['column-type'=>'1_2'])
        ->addFlexibleContent('header_1_content', ['label' => 'Teams Header Content (L)'])
          ->addLayout('paragraph')->addFields(FlexContent::paragraph())
          ->addLayout('header')->addFields(FlexContent::header())
          ->addLayout('button', ['label' => "Button", 'layout'=>'table'])->addFields(FlexContent::button())
          ->addLayout('image', ['label'=>'Image'])->addFields(FlexContent::image())
        ->endFlexibleContent()
      ->addField('team2', 'column', ['column-type'=>'1_2'])
        ->addFlexibleContent('header_2_content', ['label' => 'Teams Header Content (R)'])
          ->addLayout('paragraph')->addFields(FlexContent::paragraph())
          ->addLayout('header')->addFields(FlexContent::header())
          ->addLayout('button', ['label' => "Button", 'layout'=>'table'])->addFields(FlexContent::button())
          ->addLayout('image', ['label'=>'Image'])->addFields(FlexContent::image())
        ->endFlexibleContent()
      ->addField('teamreset', 'column', ['column-type'=>'1_1'])
    ->addTab('Team')
      ->addText('Team Header', ['default_value'=>"Meet Our Team"])
      ->addRepeater('team', ['label' => 'Team Members'])
        ->addImage('Image')
        ->addText('Name')
        ->addText('Title')
      ->endRepeater()
    ->addTab("More About Us")
      ->addTrueFalse('include_more', ['label' => 'Include "More About Us" section (from home page)', 'instructions'=>"Will automatically skip the current page", "default_value" => true])
		->setLocation('page_template', '==', 'template-team.blade.php');
    return $builder;
  }
}


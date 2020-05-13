<?php


namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\FlexContent;
use EKF_CF\Inc\Fields\Components\Button;

class About {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('About Page Options', ['style' => 'seamless', 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab('Mission')
      ->addText('Main Title')
			->addFlexibleContent('hero_1_content', ['label' => 'About Content'])
				->addLayout('paragraph')->addFields(FlexContent::paragraph())
				->addLayout('header')->addFields(FlexContent::header())
				->addLayout('button', ['label' => "Button", 'layout'=>'table'])->addFields(FlexContent::button())
				->addLayout('image', ['label'=>'Image'])->addFields(FlexContent::image())
      ->endFlexibleContent()

		->addTab('Vision')
			->addImage('vision_background', ['label' => 'Background Image'])
			->addField('vision1', 'column', ['column-type' => '1_2'])
			->addFlexibleContent('vision_1_content', ['label' => 'Column 1 Content'])
				->addLayout('paragraph')->addFields(FlexContent::paragraph())
				->addLayout('header')->addFields(FlexContent::header())
				->addLayout('counter')->addFields(FlexContent::counter())
				->addLayout('button', ['label' => "Button", 'layout'=>'table'])->addFields(FlexContent::button())
				->addLayout('image', ['label'=>'Image'])->addFields(FlexContent::image())
			->endFlexibleContent()
			->addField('vision2', 'column', ['column-type' => '1_2'])
			->addFlexibleContent('vision_2_content', ['label' => 'Column 2 Content'] )
				->addLayout('paragraph')->addFields(FlexContent::paragraph())
				->addLayout('header')->addFields(FlexContent::header())
				->addLayout('button', ['label' => "Button", 'layout'=>'table'])->addFields(FlexContent::button())
				->addLayout('image', ['label'=>'Image'])->addFields(FlexContent::image())
			->endFlexibleContent()
    ->addField('visionreset', 'column', ['column-type' => '1_1'])

    ->addTab('Core Values')
      ->addText('Principles Header', ['default'=>"Core Principles"])
      ->addRepeater('principles', ['label' => "Principles", 'min' => 2])
        ->addImage('Icon')
        ->addText('Title')
        ->addTextArea('Content')
      ->endRepeater()
    ->addTab("More About Us")
      ->addTrueFalse('include_more', ['label' => 'Include "More About Us" section (from home page)', 'instructions'=>"Will automatically skip the current page", "default_value" => true])
		->setLocation('page_template', '==', 'template-about.blade.php');
    return $builder;
  }
}


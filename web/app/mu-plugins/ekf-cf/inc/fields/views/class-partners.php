<?php


namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\FlexContent;

class Partners {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Partners Page Options', ['style' => 'seamless', 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab('Header')
      ->addImage('header_bg', ['label' => 'Background Image'])
      ->addField('partner1', 'column', ['column-type'=>'1_2'])
        ->addFlexibleContent('header_1_content', ['label' => 'Partners Content (l)'])
          ->addLayout('paragraph')->addFields(FlexContent::paragraph())
          ->addLayout('header')->addFields(FlexContent::header())
          ->addLayout('button', ['label' => "Button", 'layout'=>'table'])->addFields(FlexContent::button())
          ->addLayout('image', ['label'=>'Image'])->addFields(FlexContent::image())
        ->endFlexibleContent()
      ->addField('partner2', 'column', ['column-type'=>'1_2'])
        ->addFlexibleContent('header_2_content', ['label' => 'Partners Content (r)'])
          ->addLayout('paragraph')->addFields(FlexContent::paragraph())
          ->addLayout('header')->addFields(FlexContent::header())
          ->addLayout('button', ['label' => "Button", 'layout'=>'table'])->addFields(FlexContent::button())
          ->addLayout('image', ['label'=>'Image'])->addFields(FlexContent::image())
        ->endFlexibleContent()
      ->addField('partnerreset', 'column', ['column-type'=>'1_1'])
    ->addTab('Partners')
      ->addText('Logos Header', ['default_value'=>"Meet Our Partners"])
      ->addGallery('Partners')
    ->addTab("More About Us")
      ->addTrueFalse('include_more', ['label' => 'Include "More About Us" section (from home page)', 'instructions'=>"Will automatically skip the current page", "default_value" => true])
		->setLocation('page_template', '==', 'template-partners.blade.php');
    return $builder;
  }
}


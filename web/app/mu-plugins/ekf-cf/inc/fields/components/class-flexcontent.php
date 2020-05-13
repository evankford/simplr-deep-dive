<?php
namespace EKF_CF\Inc\Fields\Components;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\GeneralImage;
use EKF_CF\Inc\Fields\Components\Button;

class FlexContent {
  function __construct() {

  }
  public static function create($id='flexible_content', $label = 'Flexible Content') {
    $builder = new FieldsBuilder('FlexContent');
    $builder
    ->addFlexibleContent($id, ['label'=> 'label'])
    ->addLayout('paragraph' , ['label' => 'Paragraph'])
      ->addWysiwyg('text', ['label' => 'Text', 'required' => 1, 'media_upload' => false, 'toolbar' => 'basic'])
    ->addLayout('image' , ['label'=> "Image"])
      ->addFields(GeneralImage::create())
    ->addLayout('button', ['label'=>"Button"])
      ->addFields(Button::create())
    ->addLayout('header')
      ->addButtonGroup('type' ,['label'=> 'Size'])
        ->addChoices(['label' => 'Label'], ['standard' => 'Standard'], ['mega' => 'Mega'] )
    ->endFlexibleContent();
    return $builder;
  }

  public static function paragraph() {
     $builder = new FieldsBuilder('FlexContentParagraph');
       $builder ->addWysiwyg('text', ['label' => 'Text', 'required' => 1,  'media_upload' => false, 'toolbar' => 'basic']);
       return $builder;
  }
  public static function image() {
     $builder = new FieldsBuilder('FlexContentImage');
     $builder->addImage('image', ["label" => "Image"]);
     return $builder;
  }
  public static function button() {
     $builder = new FieldsBuilder('FlexContentButton');
     $builder->addGroup('button' ,['label' => "Button"])
        ->addFields(Button::create())
        ->endGroup();
     return $builder;
  }
  public static function header() {
    $builder = new FieldsBuilder('FlexContentHeader');
    $builder->addButtonGroup('type' , ['label'=> 'Size'])
        ->addChoices(['label' => 'Label'], ['standard' => 'Standard'], ['mega' => 'Mega'] )
        ->addText('header', ["label" =>"Header"]);
    return $builder;
  }
  public static function counter() {
    $builder = new FieldsBuilder('FlexContentCounter');
    $builder->addButtonGroup('type' , ['label'=> 'Size'])
        ->addText('introduction', ["label" =>"Introduction"])
        ->addNumber('number', ["label" => "Number"])
        ->addText('subtitle', ["label" => "Subtitle"]);
    return $builder;
  }
}
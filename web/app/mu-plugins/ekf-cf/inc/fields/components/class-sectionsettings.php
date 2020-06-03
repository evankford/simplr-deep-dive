<?php
namespace EKF_CF\Inc\Fields\Components;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;

class SectionSettings {
  function __construct() {

  }

  public static function createFields($bg = false) {
     $builder = new FieldsBuilder('Section Settings');
      $builder
        ->addField('titlecol1', 'column', ['column-type' =>'1_3'])
          ->addText("Handle" , ['label' => "Handle (this is used to select in menu)", 'required' => 1])
        ->addField('titlecol2', 'column', ['column-type' =>'1_3'])
          ->addText("Title" , ['label' => "Title (this is used to select in menu)", 'required' => 1])
        ->addField('titlecol9', 'column', ['column-type' =>'1_3'])
          ->addTrueFalse("Main" , ['label' => "Main header in menu?"])
        ->addField('titlecolreset', 'column', ['column-type' =>'1_1'])

        ->addField('titlecol3', 'column', ['column-type' =>'1_2'])
          ->addSelect("Background Style")
            ->addChoices("Solid", "Gradient")
          ->addColorPicker("Background Color", ['required' => 1])
          ->addColorPicker("Background Color End", ['required' => 1])
            ->conditional('Background Style', '==', 'Gradient')
        ->addField('titlecol4', 'column', ['column-type' =>'1_2'])
          ->addColorPicker("Main Text Color", ['required' => 1])
          ->addColorPicker("Accent Text Color", ["default_value", "#0098c7"])
        ->addField('titlecolreset2', 'column', ['column-type' =>'1_1'])
        ->addTrueFalse('Full Height', ['default_value' => 1, 'instructions' => "You almost always want this to be true!"]);
      return $builder;
  }
}
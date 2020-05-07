<?php
namespace EKF_CF\Inc\Fields\Components;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;

class Countdown {
  function __construct() {

  }

  public static function createFields($bg = false) {
     $builder = new FieldsBuilder('Countdown Fields');
      $builder
        ->addField('col1', 'column', ['column-type' => '1_2'])
          ->addSelect('Style')
            ->addChoices(['minimal' => 'Just Numbers'], ['major' => "All Text"])
        ->addField('col2', 'column', ['column-type' => '1_2'])
          ->addDateTimePicker('Time' , ['display_format' => 'Y-m-d H:i:s', 'return_format' =>'Y-m-d H:i:s'])
        ->addField('colreset1', 'column', ['column-type' => '1_1'])
        ->addGroup('before_finished' , ["label" => "Content before Finished", "layout" => "table"])
          ->addText('introduction', ['label'=>"Introduction Text"])
          ->addText('after', ['label'=>"Text after countdown"])
          ->addTrueFalse('enable_button', ["label"=>"Add Button?", "wrapper" => ["width" => 10]])
          ->addGroup('button', ['label' => "Button", 'layout' => "row"])
            ->conditional('enable_button' , '==', 1)
            ->addFields(Button::create())
          ->endGroup()
        ->endGroup()
        ->addGroup('after_finished' , ["label" => "Content After Finished", "layout" => "table" ])
          ->addText('introduction', ['label'=>"Introduction Text"])
          ->addText('after', ['label'=>"Text after countdown"])
          ->addTrueFalse('enable_button', ["label"=>"Add Button?", "wrapper" => ["width" => 10]])
          ->addGroup('button', ['label' => "Button", 'layout' => "row"])
            ->conditional('enable_button' , '==', 1)
            ->addFields(Button::create())
          ->endGroup()
        ->endGroup();

      return $builder;
  }

  public static function create($bg = false) {
    $builder = new FieldsBuilder('Countdown');
    $builder

      ->addGroup('Countdown', ['layout' => "block"])
        ->addFields(self::createFields($bg));
    return $builder;
  }
}
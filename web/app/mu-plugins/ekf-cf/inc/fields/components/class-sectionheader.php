<?php
namespace EKF_CF\Inc\Fields\Components;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;

class SectionHeader {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Section Header Component', ['style' => 'seamless', 'position'=> 'side']);
  $builder
  ->addField('headercol1', 'column', ['column-type' => '1_2'])
  ->addImage("Icon", ['mime_types'=>'svg'])
  ->addField('headercol2', 'column', ['column-type' => '1_2'])
  ->addText('Icon Title')
  ->addField('headercolreset', 'column', ['column-type' => '1_1'])
  ->addText("Section Header")
  ->addWysiwyg("Section Content")
  ->addTrueFalse('Include Line Decoration');
    return $builder;
  }
}


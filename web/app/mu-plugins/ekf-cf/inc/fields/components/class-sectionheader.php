<?php
namespace EKF_CF\Inc\Fields\Components;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;

class SectionHeader {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Section Header Component', ['style' => 'seamless', 'position'=> 'side']);
  $builder
  ->addImage("Icon", ['mime_types'=>'svg'])
  ->addText("Section Header")
  ->addWysiwyg("Section Content")
  ->addTrueFalse('Include Line Decoration');
    return $builder;
  }
}


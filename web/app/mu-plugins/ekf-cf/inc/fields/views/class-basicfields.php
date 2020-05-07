<?php
namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\FlexContent;
use EKF_CF\Inc\Fields\Components\Button;

class BasicFields {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Default Page Options', ['style' => 'seamless', 'position'=> 'acf_after_title']);
  $builder
      ->addText('Subtitle')
		->setLocation('post_type', '==', 'page')
			->and('page_template', '==', 'default')
			->or('post_type', '==', 'post');
    return $builder;
  }
}


<?php
namespace EKF_CF\Inc\Fields\Components;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\LinkGeneral;


class ImageLink {
  function __construct() {

  }
  public static function create() {
    $builder = new FieldsBuilder('Button');
		$builder
    	->addImage('Image')
				->setRequired()
			->addFields(Components\LinkGeneral::create());
    return $builder;
  }
}
<?php
namespace EKF_CF\Inc\Fields\Components;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;

class LinkGeneral {
  function __construct() {

  }
  public static function create() {
     $builder = new FieldsBuilder('General Link');
  $builder
			->addLink('URL')
				->setRequired();

    return $builder;
  }
}
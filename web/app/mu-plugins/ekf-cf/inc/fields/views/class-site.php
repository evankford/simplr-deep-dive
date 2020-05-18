<?php


namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;

use EKF_CF\Inc\Fields\Components;

class Site {
  function __construct() {


  }
  public static function create() {
    $builder = new FieldsBuilder('site_options', ['label' => 'Site Options', 'display' => 'seamless', 'position' => 'acf_after_title']);

    $builder
      ->addTab('Defaults')
      ->addTab("Authwall Images")
        ->addImage('Mobile')
        ->addImage('Mobile Blurry')
        ->addImage('Tablet')
        ->addImage('Tablet Blurry')
        ->addImage('Desktop')
        ->addImage('Desktop Blurry')
      ->addTab("Auth Drawer")
        ->addImage('Auth Drawer Logo')
        ->addText("Greeting")
        ->addText("Form ID")
        ->addText("Portal ID", ['default_value' => '3974729' ])
        ->addWysiwyg("Main Content")
        ->addWysiwyg("Cookie Text")
        ->addWysiwyg("Contact Text")
      ->addTab("Auth Drawer Messages")
        ->addText("Forbidden")
        ->addText("Not an Email")
        ->addTextArea("Other")
        ->addText("Success")

      ->setLocation('options_page', '==', 'site-options');

      return $builder;
  }

}



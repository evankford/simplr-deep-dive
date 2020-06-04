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
      ->addTab('Mobile Warning')
        ->addMessage("NOTE", "This warning shows up when people's screens are too small!")
        ->addImage("mobile_logo" , ["Mobile Warning Logo"])
        ->addText("mobile_title", ["Mobile Warning Title", "default_value" => "Thanks for visiting!"])
        ->addText("mobile_text", ["Mobile Warning Text", "default_value" => "This is a highly-customized tour of Simplr's platform, and is only viewable on larger screens. We're so glad you're interested, so please stop by when you're on a larger screen!"])
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



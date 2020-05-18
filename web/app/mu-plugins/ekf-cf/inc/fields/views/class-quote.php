<?php
namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\SectionSettings;
use EKF_CF\Inc\Fields\Components\SectionHeader;

class Quote {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Quote Options', [ 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab("Quote")
    ->addImage("Testimonial Image")
    ->addTextArea("Testimonial")
    ->addText("Testimonial Name")
    ->addText("Testimonial Title")
    ->addTab("Settings")
      ->addFields(SectionSettings::createFields())
    ->setLocation('page_template', '==', 'template-section-quote.blade.php');
    return $builder;
  }
}


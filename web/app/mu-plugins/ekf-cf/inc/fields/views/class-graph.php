<?php
namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\FlexContent;
use EKF_CF\Inc\Fields\Components\Button;
use EKF_CF\Inc\Fields\Components\SectionSettings;

class Graph {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Graph Options', [ 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab("Content")
      ->addImage('Icon')
      ->addText('Icon Title')
      ->addGroup("Sidebar", ['label' => 'Graph Content'])
        ->addSelect("Graph Style" , ['default_value' => "Months"])
          ->addChoices('Months', 'Hours')
        ->addSelect("List Style", ['default_value' => "Dots"])
          ->addChoices('Labels', 'Dots')
        ->addText("Title", ['default_value' => "Perfectly Staffed 24/7/365"])
        ->addRepeater("List")
          ->addText('Label')
          ->addText('Content')
        ->endRepeater()
      ->endGroup()
      ->addColorPicker("Bottom Bar Color")
    ->addTab("Footer")
      ->addRepeater("Footer Blocks")
        ->addImage("Icon", ['required' => 1])
        ->addText('Text', ['required' => 1])
      ->endRepeater()
    ->addTab("Settings")
      ->addFields(SectionSettings::createFields())
    ->setLocation('page_template', '==', 'template-section-graph.blade.php');
    return $builder;
  }
}


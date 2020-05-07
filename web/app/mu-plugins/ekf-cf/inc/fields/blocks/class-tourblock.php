<?php
namespace EKF_CF\Inc\Fields\Blocks;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\Button;

class TourBlock {
  function __construct() {
  }
  public static function create() {
    $builder = new FieldsBuilder('Tour Dates Block');
    $builder
      ->addAccordion("Settings")
        ->addText('Artist Name', ["instructions" => "Artist Name for Bandsintown", "default_value" => "Lauren Daigle"])
        ->addRange('Initial Dates', ["default_value" => 8, "min" => 0, "max" => 20, "instructions" => "Set to zero to show all dates"])
        ->addText('API Key', ["instructions" => "API Key for Bandsintown", "default_value" => "882df962a25c192e04832f379099d29e"])
        ->addSelect("Date Format", ['default_value' => "short numbers"])
          ->addChoices(["long numbers" => "Long Numbers: 01.01.01"], ["long words" => "Long Words: January 1, 2020"], ["short words" => "Short Words: Jan. 1 2020"], ["short numbers" => "Short Numbers: 1.1.20"])
        ->addTrueFalse("Show Year", ['default_value' => false])
        ->addTrueFalse("Show Lineup", ['default_value' => false])
      ->addAccordion("Button")
        ->addUrl("Button URL", ['required' => 1, 'instructions' => "Either a page on this site or a bandsintown page! If button behavior is to expand, this is a fallback link!"])
        ->addSelect('Button Behavior')
          ->addChoices(['expand'=> "Expand to show more dates"], ["link" => "Link To Page"])
        ->addText('More Text', ['default_value' => __("Show More"), 'required' => 1,])
        ->addText('Less Text',  ['default_value' => __("Show Less"), 'required' => 1,])
        ->addAccordion("Fallbacks")
        ->addText("Fallback Header", ['required' => 1, 'default' => __("More Dates Coming Soon!")])
        ->addWysiwyg('Fallback Text', ['required' => 1, 'tabs'=>'visual', 'media_upload' => false, 'toolbar' => 'basic'])
        ->addRepeater('Fallback Buttons' , ['button_label' => "Add Button", "layout"=> "block"])
          ->addFields(Button::create())
        ->endRepeater()
      ->addAccordion("Messages")
        ->addText("Loading", ["default_value" => __("Loading"), 'required' => 1])
        ->addText("Error", ["default_value" => __("Error loading dates, please try again!"), 'required' => 1])
      ->addAccordion('settings_acc', ['endpoint' => 1])
      ->setLocation('block', '==', 'acf/tour-dates-block');
    return $builder;
  }
}
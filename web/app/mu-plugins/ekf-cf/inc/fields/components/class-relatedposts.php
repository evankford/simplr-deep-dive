<?php
namespace EKF_CF\Inc\Fields\Components;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;

class RelatedPosts {
  public static function create($bg = false) {
    $builder = new FieldsBuilder('Gallery Content');
    $builder
    ->addTrueFalse("show_related", ["label" => "Show Related Content", "default_value" => true])
    ->addText('related_title',  ["label" => "Related Title", "default_value" => "See More:"])
    ->addRepeater("related_content" , ["format" => "block", "label" => "Related Content", "max" => 8])
      ->addText('intro', ['placeholder'=> "'Watch'/'Read'/'From the Album'", 'required' => false, 'label'=>"Introduction"])
      ->addPostObject('post', ['post_type' => ['post', 'video', 'release'], 'required' => true])
      ->addText('button_text' , ['label'=> "Button Text", 'default_value' => __("More")])
    ->endRepeater();

    return $builder;
  }
}
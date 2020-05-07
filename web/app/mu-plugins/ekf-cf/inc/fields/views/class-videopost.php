<?php


namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;

use EKF_CF\Inc\Fields\Components;

class VideoPost {
  function __construct() {


  }
  public static function create() {
    $builder = new FieldsBuilder('video_post', ['label' => 'Video Post', 'display' => 'seamless', 'position' => 'acf_after_title']);

    $builder
      ->addMessage('Important', 'Make sure to fill in the "Excerpt" on the right sidebar to add the excerpt!')
      ->addGroup('video')
        ->addFields(Components\GeneralVideo::createFields())
      ->setLocation('post_format', '==', 'video');
      return $builder;
  }

}



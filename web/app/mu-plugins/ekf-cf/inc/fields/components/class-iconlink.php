<?php
namespace EKF_CF\Inc\Fields\Components;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\LinkGeneral;

class IconLink {


  function __construct() {
  }

  public static $icons = [
    ['amazon' =>  'Amazon'],
    ['amazon-music' =>'Amazon Music'],
    ['apple-music' =>'Apple Music'],
    ['deezer' => 'Deezer'],
    ['doc-text' => 'Document'] ,
    ['download' => 'Download'],
    ['mail' => 'Email'],
    ['facebook' => 'Facebook'],
    ['google-play' => 'Google Play'],
    ['instagram' => 'Instagram'],
    ['note-beamed' => 'Music Notes'],
    ['pandora' => 'Pandora'],
    ['phone' => 'Phone'],
    ['play' => 'Play Button'],
    ['shopping-bag' => 'Shopping Bag'],
    ['basket' => 'Shopping Cart'] ,
    ['soundcloud' => 'SoundCloud'],
    ['spotify' => 'Spotify'],
    ['twitter' => 'Twitter' ],
    ['youtube' => 'YouTube'],
    ['globe' => 'Website']
  ];


  public static function create() {
    $builder = new FieldsBuilder('Icon Link');
    $builder
      ->addSelect('icon', ['label', 'Icon', 'ui' => true, 'required' => 'true'])
        ->addChoices(self::$icons)
      ->addFields(LinkGeneral::create())
      ->addTrueFalse('Show Title');
    return $builder;
  }
}
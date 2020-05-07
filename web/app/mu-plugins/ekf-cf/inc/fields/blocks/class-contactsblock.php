<?php
namespace EKF_CF\Inc\Fields\Blocks;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;

class ContactsBlock {
  function __construct() {
  }
  public static function create() {
    $builder = new FieldsBuilder('ContactsBlock');
    $builder
      ->addMessage('Note:', 'This section loads in the contacts from your site options, so you only need to set the display-specific settings below!')
      ->setLocation('block', '==', 'acf/contacts-block');
    return $builder;
  }
}
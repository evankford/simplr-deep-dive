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
      ->addTab("Site Header")
        ->addField('headercol1', 'column' ,['column-type'=>'1_2'])
        ->addImage('header_logo', ['title'=>'Header Logo'])
        ->addField('headercol2', 'column' ,['column-type'=>'1_2'])
        ->addTrueFalse('header_signup', ['label' => 'Signup in Header?', 'default_value' => 0])
        ->addTrueFalse('header_socials', ['label' => 'Socials in Header?', 'default_value' => 1])
        ->addField('headercolreset', 'column' ,['column-type'=>'1_1'])

      ->addTab("Social Links")
        ->addRepeater('Social Links')
          ->addFields(Components\IconLink::create())
          ->endRepeater()

      ->addTab("Announcement")
        ->addTrueFalse('announcement_active', ['label' => "Activate Announcement?"])
        ->addFlexibleContent('Announcement Content')
          ->addLayout('text',  ['label' => "Text Editor"])
            ->addWysiwyg('content',  ['label' => "Content", "toolbar" =>"basic", "media_upload: false", "tabs" => "visual"])
          ->addLayout('button',  ['label' => "Button"])
            ->addFields(Components\Button::create())
          ->addLayout('countdown' , ['label' => "Countdown"])
            ->addFields(Components\Countdown::create())
        ->endFlexibleContent()

      ->addTab("signup")
        ->addGroup("signup", ["label" => "Sign Up Form", "layout", "block"])
            ->addText("Button Text")
          ->addSelect('signup_form', ["label" => "Signup Form"])
          ->addUrl('fallback_url' , ["label" =>"Signup URL" , "placeholder"=>"http://eepurl.com/c0CbZb", "instructions"=>"Used in case the popup doesn't open!"])
          ->endGroup()

      ->addTab("Gallery")
        ->addMessage("Gallery Info", "This gallery will populate the main gallery on the front page and About page!")
        ->addGallery("main_gallery", ['label' => "Main Gallery"])

      ->addTab("Site Footer")
        ->addField('footercol1', 'column' ,['column-type'=>'1_2'])
        ->addImage('footer_logo', ['title'=>'Footer Logo'])
        ->addTrueFalse('footer_socials', ['label' => 'Socials in Footer?', 'default_value' => 1])
        ->addField('footercol2', 'column' ,['column-type'=>'1_2'])
        ->addTrueFalse('footer_signup', ['label' => 'Signup in Footer?', 'default_value' => 1])
        ->addSelect('footer_signup_display', ['label' => "Footer Signup Display Style"])
          ->addChoices(["button" => "Button (opens popup)"], ["inline" => "Inline Form"])
        ->addText('Copyright Text')
        ->addField('footercolreset', 'column' ,['column-type'=>'1_1'])
        ->addTrueFalse('Enable Footer Menus')
        ->addText('footer_menu_1_title' , ['label' => 'Footer Menu 1 Title'])
        ->addText('footer_menu_2_title' , ['label' => 'Footer Menu 2 Title'])
        ->addMessage('Info', 'The Footer Menu\'s content is set under Appearances->Menus')
      ->setLocation('options_page', '==', 'site-options');

      return $builder;
  }

}



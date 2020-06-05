<?php


namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\FlexContent;
use EKF_CF\Inc\Fields\Components\Button;

class Dive {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Front Page Options', ['style' => 'seamless', 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
	$builder
		->addTab('Intro')
			->addImage('intro_logo', ['label' => "Intro Logo"])
			->addText('intro_text', ['label' => "Intro Text", 'default_value' => "A Deeper Dive"])
			->addText('intro_button_text', ['label' => "Intro Button Text"])
		->addTab('Chat')
			->addAccordion('Images')
			->addGroup('Customer')
				->addGroup("Images", ['layout' => "table"])
					->addImage("Large Image")
					->addImage("Icon")
				->endGroup()
				->addGroup("Details", ['layout' => "table"])
					->addText("Name")
          ->addText("Title")
          ->addColorPicker("Color", ['default_value' => '#11792e'])
				->endGroup()
			->endGroup()
			->addGroup('Specialist')
				->addGroup("Images", ['layout' => "table"])
					->addImage("Large Image")
					->addImage("Icon")
				->endGroup()
				->addGroup("Details", ['layout' => "table"])
					->addText("Name")
          ->addText("Title")
          ->addColorPicker("Color", ['default_value' => '#60afdd'])
				->endGroup()
			->endGroup()
			->addAccordion("Messages")
				->addFlexibleContent("Chat Messages")
					->addLayout("Message")
						->addText("Message")
						->addGroup("Settings", ['layout'=>'table'])
							->addButtonGroup("Author")
								->addChoices('Specialist', 'Customer')
							->addRange("Delay", ['min' => 0, 'max' => 100, 'step' => 1, 'default' => 50])
							->addTrueFalse("Typing Bubbles?")
						->endGroup()
          ->endFlexibleContent()
      ->addAccordion('Review')
        ->addMessage("Note", "This will always be at the bottom of the chat!")
        ->addText("Review Text", ['instructions'=> "Leave blank for no review"])
      ->addAccordion("Social Post")
        ->addMessage("Social Post Note:", "This will always be above the customer!")
        ->addImage("Social Media Icon")
        ->addImage("Post Image")
        ->addText("Post Name")
        ->addWysiwyg("Post Content")
			->addAccordion('More')
				->addText('chat_button_text', ['label' => "Chat Button Text"])
			->addAccordion("End", ['endpoint' => 1])
		->addTab("Links")
					->addPostObject('Specialist Links', ['post_type' => "highlight", 'multiple' => 1])
					->addPostObject('Simplr Links', ['post_type' => "highlight", 'multiple' => 1])
					->addPostObject('Customer Links', ['post_type' => "highlight", 'multiple' => 1])
		->addTab('Timeline')
			->addFlexibleContent("Deeper Timeline")
				->addLayout('Message')
					->addText("Message")
					->addGroup("Settings", ['layout'=>'table'])
						->addButtonGroup("Author")
							->addChoices('Specialist', 'Customer')
						->addPostObject('Highlighted Links', ['post_type' => "highlight", 'multiple' => 1, 'instructions' => "For best results, make sure these are the same highlights selected in the 'Links' tab above. These will show as higlighted at this stage"])
					->endGroup()
				->addLayout('Typing')
					->addGroup("Settings", ['layout'=>'table'])
						->addButtonGroup("Author")
							->addChoices('Specialist', 'Customer')
						->addPostObject('Highlighted Links', ['post_type' => "highlight", 'multiple' => 1, 'instructions' => "For best results, make sure these are the same highlights selected in the 'Links' tab above. These will show as higlighted at this stage"])
					->endGroup()
				->addLayout("Simplr")
					->addText("Message")
					->addGroup("Settings", ['layout'=>'table'])
						->addPostObject('Highlighted Links', ['post_type' => "highlight", 'multiple' => 1, 'instructions' => "For best results, make sure these are the same highlights selected in the 'Links' tab above. These will show as higlighted at this stage"])
          ->endGroup()
        ->endFlexibleContent()
		->setLocation("post_type", '==' , 'dive')->or('page_template' , '==', 'template-dive.blade.php');
    return $builder;
  }
}


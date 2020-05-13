<?php


namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\FlexContent;
use EKF_CF\Inc\Fields\Components\Button;

class Impact {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Issue Page Options', ['style' => 'seamless', 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
  $builder
    ->addTab('Mission')
      ->addRepeater('issue_pairs' , ['label' => "Issue Pairs", 'layout' => 'block'])
        ->addField('issuecol1', 'column', ['column-type' => '1_2'])
          ->addText('Issue Title', ['default_value' => "[Issue]"])
          ->addWysiwyg('Issue Content')
          ->addField('issuecol2', 'column', ['column-type' => '1_2'])
          ->addText('Approach Title', ['default_value' => "[Approach]"])
          ->addWysiwyg('Approach Content')
        ->addField('issuecolreset', 'column', ['column-type' => '1_1'])
    ->AddTab('Settings')
      ->addTrueFalse('Include Partnerships')
      ->addText('partnership_title', ['label' => "Title", "default_value" => "Featured Partnerships"])
      ->addText('partnership_subtitle', ['label' => "Subtitle", "default_value" => "Making change through relationships"])
		->setLocation('page_template', '==', 'template-issue.blade.php');
    return $builder;
  }
}


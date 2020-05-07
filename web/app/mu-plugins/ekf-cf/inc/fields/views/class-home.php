<?php


namespace EKF_CF\Inc\Fields\Views;
use StoutLogic\AcfBuilder\FieldsBuilder as FieldsBuilder;
use EKF_CF\Inc\Fields\Components\FlexContent;
use EKF_CF\Inc\Fields\Components\Button;

class Home {
  function __construct() {

  }
  public static function create() {
	$builder = new FieldsBuilder('Front Page Options', ['style' => 'seamless', 'position'=> 'acf_after_title', 'hide_on_screen' => ['the_content']]);
	$builder
		->addTab('Hero')
		->addField('col1', 'column', ['column-type' => '1_2'])
			->addButtonGroup('hero_1_align' , ['label' => 'Column 1 Align'] )
				->addChoices(['left'=>'Left'], ['right' =>'Right'], ['center' => 'Center'])
			->addFlexibleContent('hero_1_content', ['label' => 'Column 1 Content'])
				->addLayout('paragraph')->addFields(FlexContent::paragraph())
				->addLayout('header')->addFields(FlexContent::header())
				->addLayout('button', ['label' => "Button", 'layout'=>'table'])->addFields(FlexContent::button())
				->addLayout('image', ['label'=>'Image'])->addFields(FlexContent::image())
			->endFlexibleContent()
			->addField('col2', 'column', ['column-type' => '1_2'])
			->addButtonGroup('hero_2_align' , ['label' => 'Column 2 Align'] )
				->addChoices(['left'=>'Left'], ['right' =>'Right'], ['center' => 'Center'])
			->addFlexibleContent('hero_2_content', ['label' => 'Column 2 Content'] )
				->addLayout('paragraph')->addFields(FlexContent::paragraph())
				->addLayout('header')->addFields(FlexContent::header())
				->addLayout('button', ['label' => "Button", 'layout'=>'table'])->addFields(FlexContent::button())
				->addLayout('image', ['label'=>'Image'])->addFields(FlexContent::image())
			->endFlexibleContent()
		->addField('colreset', 'column', ['column-type' => '1_1'])

		->addTab('Impact')
			->addText('impact_title', ['label' => 'Section Title', 'instructions' => 'Must be very short, this is the particle animation'])
			->addImage('impact_bg', ['label' => 'Background Image'])
			->addField('impact1', 'column', ['column-type' => '1_2'])
			->addButtonGroup('impact_1_align' , ['label' => 'Column 1 Align'] )
				->addChoices(['left'=>'Left'], ['right' =>'Right'], ['center' => 'Center'])
			->addFlexibleContent('impact_1_content', ['label' => 'Column 1 Content'])
				->addLayout('paragraph')->addFields(FlexContent::paragraph())
				->addLayout('header')->addFields(FlexContent::header())
				->addLayout('button', ['label' => "Button", 'layout'=>'table'])->addFields(FlexContent::button())
				->addLayout('image', ['label'=>'Image'])->addFields(FlexContent::image())
			->endFlexibleContent()
			->addField('impact2', 'column', ['column-type' => '1_2'])
			->addButtonGroup('impact_2_align' , ['label' => 'Column 2 Align'] )
				->addChoices(['left'=>'Left'], ['right' =>'Right'], ['center' => 'Center'])
			->addFlexibleContent('impact_2_content', ['label' => 'Column 2 Content'] )
				->addLayout('paragraph')->addFields(FlexContent::paragraph())
				->addLayout('header')->addFields(FlexContent::header())
				->addLayout('button', ['label' => "Button", 'layout'=>'table'])->addFields(FlexContent::button())
				->addLayout('image', ['label'=>'Image'])->addFields(FlexContent::image())
			->endFlexibleContent()
		->addField('impactreset', 'column', ['column-type' => '1_1'])

		->addTab('About')
			->addText('about_title', ['label' => 'Section Title', 'default_value' => "More About Us"])
			->addText('about_subtitle', ['label' => 'Section Subtitle', 'default_value' => "Get To Know Us"])
			->addImage('about_bg', ['label' => 'Background Image'])
			->addRepeater('about_content', ['label' => 'Content', "min" => 2, "max" => 6])
				->addText('title', ['label'=> "Title"])
				->addImage('title_image', ['label' => 'Title Image'])
				->addTextArea('content', ['label'=> "Content"])
				->addImage('background', ['label'=> "Background"])
				->addGroup('button', ['label'=> "Button"])
					->addFields(Button::create())
			->endRepeater()
		->setLocation('page_template', '==', 'template-home.blade.php');
    return $builder;
  }
}


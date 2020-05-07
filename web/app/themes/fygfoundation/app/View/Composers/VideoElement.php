<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class VideoElement extends Composer {

/**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'partials.video-element',
    ];


	static $defaults = [
		'Fallback GIF' => false,
        'Fallback Image' => false,
        'bg' => '#000000',
        'text' => '#FFFFFF',
		'fullscreen' => false,
		'classes' => 'default', //Extra classes
		'rellax' => false, //Add scroll effect
		'opacity' => 100,
		'downloader' => false,
		'play' => false,
		'type' => 'URL'
	];

  /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function override()

    {
        $props = array_merge(self::$defaults, self::process($this->data));
        return $props;
    }

    public static function process($input) {
        //Videos

        $output['play'] = $input['play'];
        $output['url'] = $input['url'];
        $output['mp4'] = $input['mp4']['url'];
        $output['mp4_small'] = $input['mp4_small']['url'];
        $output['mp4_vertical'] = $input['mp4_vertical']['url'];
        $output['mp4_small_vertical'] = $input['mp4_small_vertical']['url'];
        $output['webm'] = $input['webm']['url'];
        $output['webm_small'] = $input['webm_small']['url'];
        $output['webm_vertical'] = $input['webm_vertical']['url'];
        $output['webm_small_vertical'] = $input['webm_small_vertical']['url'];
        $output['fallback_gif'] = $input['Fallback GIF'];
        $output['fallback_image'] = $input['Fallback Image'];
        $output['poster'] = $input['Fallback Image']['url'];

        return $output;
    }
}

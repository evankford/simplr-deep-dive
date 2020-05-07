<?php

namespace App\View\Composers;

use App\Helpers\Imager;
use Roots\Acorn\View\Composer;

class ImageElement extends Composer {

    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'partials.image-element',
    ];


	public static $defaults = [
		'mobile'=>false, //Uses a different image on smaller screens (breakpoint in respimg.scss)
		'is_bg' => false, //Sets the image to a background with object-fit/polyfill (in respimg.scss)
		'max_width' => 3000, //Stops the image loading at a certain max size
		'small_width' => 300, //Small width for inital loading image, usually stays the same
		'classes' => '', //Extra classes
		'rellax'=>false, //Add scroll effect
		'opacity' => 100
	];

  /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function override()

    {
        $props = self::process($this->data['image'], array_merge(self::$defaults, $this->data['args']));
        return $props;
    }

    public static function process($image, $args) {
        //Videos


        $output['classes'] = $args['classes'];

        $img = new Imager($image,['small_width' => $args['small_width']]);

        $output['id'] = 'image--'. $img->imageId;
        $output['small'] = $img->small[0];
        $output['alt'] = $img->alt;
        $output['srcset'] = $img->getImageSet();


        if ($args['is_bg'] == true ) {
          $output['isbg'] = 'bg';
        }

        if ($args['rellax'] == true) {
          if ($output['isbg'] == 'bg') {
            $output['isrellax'] = 'rellax-bg';
          } else {
           $output['isrellax'] = 'rellax-img';
          }
        }

        $output['style'] = '';
        $op = $args['opacity'] / 100;

        if ($img->isSvg) {
          $output['issvg'] = 'svg';
        } else {
          $output['style'] .= "
          <style>
            .{$output['id']}::before {content:''; width: 100%; display: block; padding-bottom: {$img->ratio}%;}
            .{$output['id']} img {
              object-position: {$img->center['x']}% {$img->center['y']}% !important;
              font-family: \"object-fit: cover; object-position:{$img->center['x']}% {$img->center['y']}%;
              opacity: {$op};
            }
          </style>";
        }
        return $output;
    }
}

<?php

namespace App\Helpers;
use Samrap\Acf\Acf;
use Roots\Sage\Container;

class Imager {
	public static $defaults = array(
		'max_width' => 3000, //Stops the image loading at a certain max size
		'small_width' => 300, //Small width for inital loading image, usually stays the same
	);

	public static $sizes = [ 300, 450 , 700, 900, 1200, 1600,2000, 2500, 3000];


	/**
		* Constructor for imager
		* @param string|object|int $img
	 	*	@param array $args
		* @param bool $render
	 */

	function __construct($img = [], $args = []) {
		$this->props = array_merge(self::$defaults, $args);
    $this->uploads =  wp_upload_dir();
		$this->small = false;
		$this->isSvg = false;
		$this->alt = '';
		$this->ratio = 1;
		$this->imageId = $this->prepareImg($img);
		$this->center = ['x'=> 50, 'y', 50];

		$this->okay = $this->processImg();
		if ($this->okay) {
			$this->getImageCenter();

		}
	}

	/**
	 *
	 * @param string|object|int $img
	 * @return int $id
	 */
	private function prepareImg($img) {
		if (gettype($img) == "string") {
			if (filter_var($img, FILTER_VALIDATE_URL) == false) {
				if (intval($img) > 0 && intval($img) < 100000) {
					$this->getSmall($img);
					return intval($img);
				}
				throw new Exception('String passed as $img, but not a valid URL');
			} else {
				return url_to_postid($img);
			}
		} elseif (gettype($img) == "integer" ) {
			$this->getSmall($img);
			return $img;
		} elseif (gettype($img) == "array") {
			//Skips a lot of queries if passed an image object!

			$this->small[0] = $img['sizes']['medium'];
			$this->small[1] = $img['sizes']['medium-width'];
			$this->small[2] = $img['sizes']['medium-height'];
			$this->alt = $img['alt'];
			$this->isSvg = $img['subtype']=='svg+xml';
			if (!$this->isSvg) {
				$this->ratio = $img['height']/$img['width']*100;
			}
			if ($img['ID']) {
				return $img['ID'];
			}
			if ($img['post_id']) {
				return $img['post_id'];
			}
		}
	}

	private function getSmall($id) {
		$this->small = wp_get_attachment_image_src($id, $this->props['small_width'] . 'w');
	}

	private function getImageCenter() {
		$this->center['x'] = ACF::field('horizontal')->id($this->imageId)->default(50)->get();
		$this->center['y'] = ACF::field('vertical')->id($this->imageId)->default(50)->get();
	}


	private function processImg() {
		$this->isSvg = $this->checkSvg($this->small[0]);
		if (!$this->isSvg) {
			if ($this->small[1] <= 0 || $this->small == false)
			{
				return false;
			} else {
				$this->ratio = ($this->small[2]/$this->small[1])*100;
			}
		}

		$this->alt = get_post_meta($this->imageId , 'alt', true);

		return true;
	}

  private function checkSvg($filePath = 'path/to/file') {
		$file_path = str_replace( '/app/uploads', $this->uploads['basedir'], preg_replace('/sites\\/\d*\\//' , '', $filePath )); //Multisite
    if (gettype($file_path) == 'string'){
      if (realpath($file_path)) {
				if (file_exists($file_path)) {
          return 'image/svg+xml' === mime_content_type($file_path);
        }
      }
		}
		return false;
	}

	public function getImageSet() {
		$output = '';
		$i = 0;
		$prevSize = 0;

		foreach (self::$sizes as $size) {
			$sizeString = $size . 'w';
			$comma = ', ';
			if ($i == 0) {
				$comma = '';
			}
			if ($i + 1 < sizeof(self::$sizes)) {
				$src = wp_get_attachment_image_src($this->imageId, $sizeString, false);

				//Stops if we've reached max height!
				if ($prevSize == $src[1]) {
					break;
				} else {

					$prevSize = $src[1];
				}

				$output .= $comma .  $src[0] . ' ' . $src[1] .'w ' . $src[2] .'h';
				$i++;
				if ($size > $this->props['max_width']) {
					break;
				}
			}
		}
		return $output;
	}

	public function return() {
		$output = '';
		$style = '';
		$bg = '';
		$svg = '';
		$rellax = '';
		$center = "";
		$opacity = "";

		if ($this->props['rellax']) {
			$rellax = 'rellax';
		}

		$center = ".image--{$this->imageId} img {
			object-position:{$this->center['x']}% {$this->center['y']}% !important;
			font-family: \"object-fit:cover; object-position:{$this->center['x']}% {$this->center['y']}%;
		}";

		if ($this->props['is_bg']) {
			$bg = ' bg' ;
			$style = '';

			if ($this->props['rellax']) {
				$rellax = 'rellax-bg';
			}
		}

		if ($this->props['opacity'] > 100) {
			$opVal = $this->props['opacity'] / 100;
			$opacity = ".image--{$this->imageId} img {
				opacity: {$opVal};
			}";
		}

		if ($this->isSvg) {
			$svg = ' svg';
		}

		$output .=	"<picture class=\"respimg__wrapper{$svg}{$bg} {$rellax} image--{$this->imageId} {$this->props['classes']}\" >";

		if ($this->ratio > 0) {
			$output .="
			<style>
				.image--{$this->imageId}::before {content:''; display: block; padding-bottom: {$this->ratio}%;}
				{$center}
				{$opacity}
			</style>";
		}


		if ($this->isSvg == true) {
			$output .= 	"<img data-sizes=\"auto\" class=\"respimg lazyload lazypreload\" src=\"{$this->small[0]}\">";
		} else {
			$output.= "<img data-sizes=\"auto\" alt=\"{$this->alt}\" class=\"respimg lazyload\" src=\"{$this->small[0]}\" data-srcset=\"{$this->getImageSet()}\">";
		}
		if ($this->props['downloader'] == true) {
			$output .= $this->downloader();
		}
		$output .= 	"</picture>";

		return $output;
	}
}
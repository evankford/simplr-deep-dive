<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class SplashBackground extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'template-splash-background',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function override()
    {

      $output =  $this->processData();
      return $output;
    }

    /**
     * Returns the site name.
     *
     * @return string
     */
    public function processData() {

      // if($this->view == 'template-splash-background') {
        $output['main_image'] = Acf::field('main_image')->get();
        $output['extra_image'] = Acf::field('extra_image')->get();
        $output['main_background'] = Acf::field('tv_background')->get();
        $output['video'] = Acf::field('video')->get();
        $output['tv'] = $output['video']['video_bg'];
      // }
      return $output;
    }
}

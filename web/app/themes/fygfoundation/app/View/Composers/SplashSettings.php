<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class SplashSettings extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'template-splash-video',
        'template-splash-background',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
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



      $settings = Acf::field('settings')->get();

      $output['show_socials'] = $settings['show_socials'];
      $output['show_footer'] = $settings['show_footer'];
      $output['show_socials'] = $settings['show_socials'];
      $output['show_signup'] = $settings['show_signup'];
      $output['show_contacts'] = $settings['show_contacts'];
      $output['home_location'] = $settings['home_button_location'];

      return $output;
    }
}

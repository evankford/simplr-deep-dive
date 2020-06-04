<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class SplashContent extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'partials.splash-content',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {

      $output = $this->processData();
      return $output;
    }

    /**
     * Returns the site name.
     *
     * @return string
     */
    public function processData() {
     $output['content_type'] = Acf::field('content_type')->default('svg')->get();

      if ($output['content_type'] == 'text') {
        $content = Acf::field('Album Content (text)')->get();
        $output['title_text'] = $content['title_text'];
        $output['name_text'] = $content['name_text'];
      } elseif ($output['content_type'] == 'images') {
        $content = Acf::field('Album Content (Images)')->get();
        $output['title_image'] =$content['title_image'];
        $output['name_image'] =$content['name_image'];
      } else {
        $content = Acf::field('Album Content (SVG)')->get();
        $output['title_svg'] =$content['title_svg'];
        $output['name_svg'] =$content['name_svg'];
      }
     $output['content_type'] = Acf::field('content_type')->default('svg')->get();

     $output['icons'] = Acf::field('icons')->expect('array')->default(false)->get();
     $output['buttons'] = Acf::field('buttons')->expect('array')->default(false)->get();



     return $output;
    }
}

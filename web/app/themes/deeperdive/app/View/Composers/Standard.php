<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Standard extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'template-section-standard',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function override()
    {

      $home_id = get_option( 'page_on_front' );
        return [
          'left_image' => Acf::field('Left Image')->get(),
          'right_image' => Acf::field('Right Image')->get(),
        ];
    }

    // public function get_content($id) {
    //   $content_raw=Acf::field($id)->get();
    //   return $content_raw;
    // }
}

<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Ball extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'template-section-ball',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {

        return [
          'ball_svg' => Acf::field('SVG')->get(),
          'ball_animated' => Acf::field('Enable Animation')->default(true)->get(),
          'ball_bottom' => Acf::field('Bottom Bar Color')->default(true)->get()
        ];
    }

    // public function get_content($id) {
    //   $content_raw=Acf::field($id)->get();
    //   return $content_raw;
    // }
}

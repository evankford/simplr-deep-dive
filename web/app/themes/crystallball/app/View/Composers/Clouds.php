<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Clouds extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'template-section-clouds',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function override()
    {

        return [
          'header' => Acf::field('Section Header')->get(),
          'problems' => Acf::field('Problems')->default([])->get(),
        ];
    }

    // public function get_content($id) {
    //   $content_raw=Acf::field($id)->get();
    //   return $content_raw;
    // }
}

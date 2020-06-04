<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Quality extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'template-section-quality',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {

        return [
          'quality_image_1' => Acf::field('Image 1')->get(),
          'quality_image_2' => Acf::field('Image 2')->get(),
          'quality_image_3' => Acf::field('Image 3')->get(),
          'quality_color' => Acf::field('Image Bottom Color')->get(),
          'quality_bottom_1' => Acf::field('Bottom Image 1')->default(false)->get(),
          'quality_bottom_2' => Acf::field('Bottom Image 2')->default(false)->get()
        ];
    }

    // public function get_content($id) {
    //   $content_raw=Acf::field($id)->get();
    //   return $content_raw;
    // }
}

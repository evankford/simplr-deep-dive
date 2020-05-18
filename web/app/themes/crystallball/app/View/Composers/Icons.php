<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Icons extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'template-section-icons',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {

        return [
          'left_logo' => Acf::field('Left Logo')->get(),
          'left_text' => Acf::field('Left Text')->get(),
          'left_gallery' => Acf::field('Left Gallery')->get(),
          'left_decoration' => Acf::field('Decoration Color')->get(),
          'right_logo' => Acf::field('Right Logo')->get(),
          'right_text' => Acf::field('Right Text')->get(),
          'right_gallery' => Acf::field('Right Gallery')->get()
        ];
    }

    // public function get_content($id) {
    //   $content_raw=Acf::field($id)->get();
    //   return $content_raw;
    // }
}

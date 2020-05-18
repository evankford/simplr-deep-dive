<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Specialist extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'template-section-specialist',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {

        return [
          'icons' => Acf::field('Icons')->get(),
          'specialist_image' => Acf::field('Specialist Image')->get(),
          'name' => Acf::field('Name')->get(),
          'info' => Acf::field('Info')->get()
        ];
    }

    // public function get_content($id) {
    //   $content_raw=Acf::field($id)->get();
    //   return $content_raw;
    // }
}

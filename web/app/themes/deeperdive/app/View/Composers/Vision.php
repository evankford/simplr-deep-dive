<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Vision extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'sections.vision',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function override()
    {
        return [
          'vision_title' => Acf::field('vision_title')->default('vision')->get(),
          'vision_bg' => Acf::field('vision_background')->get(),
          'vision_1_content' => Acf::field('vision_1_content')->expect('array')->default([])->get(),
          'vision_2_content' => Acf::field('vision_2_content')->expect('array')->default([])->get(),
        ];
    }

    public function get_content($id) {
      $content_raw=Acf::field($id)->get();
      return $content_raw;
    }
}

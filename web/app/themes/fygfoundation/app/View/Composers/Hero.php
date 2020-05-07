<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Hero extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'sections.hero',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function override()
    {
        return [
          'main_title' => Acf::field('Main Title')->default(false)->get(),
          'hero_1_content' => Acf::field('hero_1_content')->expect('array')->default([])->get(),
          'hero_1_align' => Acf::field('hero_1_align')->default('left')->get(),
          'hero_2_content' => Acf::field('hero_2_content')->expect('array')->default([])->get(),
          'hero_2_align' => Acf::field('hero_2_align')->default('left')->get()
        ];
    }

    public function get_content($id) {
      $content_raw=Acf::field($id)->get();
      return $content_raw;
    }
}

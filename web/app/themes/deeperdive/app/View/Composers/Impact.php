<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Impact extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'sections.impact-home',
        'sections.impact',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function override()
    {
        return [
          'impact_title' => Acf::field('impact_title')->default('IMPACT')->get(),
          'impact_bg' => Acf::field('impact_bg')->get(),
          'impact_1_content' => Acf::field('impact_1_content')->expect('array')->default([])->get(),
          'impact_1_align' => Acf::field('impact_1_align')->default('left')->get(),
          'impact_2_content' => Acf::field('impact_2_content')->expect('array')->default([])->get(),
          'impact_2_align' => Acf::field('impact_2_align')->default('left')->get()
        ];
    }

    public function get_content($id) {
      $content_raw=Acf::field($id)->get();
      return $content_raw;
    }
}

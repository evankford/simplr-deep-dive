<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Issues extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'sections.issues',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function override()
    {
        return [
          'issue_pairs' => Acf::field('issue_pairs')->default([])->get(),
          'include_partnerships' => Acf::field('Include Partnerships')->get(),
          'partnership_title' => Acf::field('partnership_title')->default('Featured Partnerships')->get(),
          'partnership_subtitle' => Acf::field('partnership_subtitle')->default('Making change through relationships')->get(),
        ];
    }

    public function get_content($id) {
      $content_raw=Acf::field($id)->get();
      return $content_raw;
    }
}

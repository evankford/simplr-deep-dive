<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Team extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'sections.team',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
          'team_bg' => Acf::field('header_bg')->default(false)->get(),
          'team_content_1' => Acf::field('header_1_content')->expect('array')->default([])->get(),
          'team_content_2' => Acf::field('header_2_content')->expect('array')->default([])->get(),
          'team_header' => Acf::field('Team Header')->get(),
          'team' => Acf::field('team')->expect('array')->default([])->get(),
          'include_more' =>Acf::field('include_more')->default(true)->get()
        ];
    }
}

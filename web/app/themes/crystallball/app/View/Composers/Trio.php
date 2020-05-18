<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Trio extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'template-section-trio',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'header' => Acf::field('Header')->get(),
            'graph1' => Acf::field('Graph Step 1')->get(),
            'graph2' => Acf::field('Graph Step 2')->get(),
            'graph3' => Acf::field('Graph Step 3')->get(),
            'more_title' => Acf::field('More Title')->get(),
            'icon_list' => Acf::field('Icon List')->get()
        ];
    }
}

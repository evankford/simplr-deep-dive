<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Graph extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'template-section-graph',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function override()
    {
        return [
            'single_graph_content' => Acf::field('Sidebar')->get(),
            'graph_bar_color' => Acf::field('Bottom Bar Color')->default('#fafafa')->get(),
            'graph_footer' => Acf::field('Footer Blocks')->get()
        ];
    }
}

<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Goodbye extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'template-section-goodbyes',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'title1' => Acf::field('Title1')->get(),
            'goodbyes' => Acf::field('Goodbyes')->get(),
            'title2' => Acf::field('Title2')->get(),
            'subtitle' => Acf::field('Subtitle')->get(),
            'svg' => Acf::field('SVG')->get()
        ];
    }
}

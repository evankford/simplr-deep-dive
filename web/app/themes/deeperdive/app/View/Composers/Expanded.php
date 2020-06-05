<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Expanded extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'scenes.expanded',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {

        return [
          'customer_title' => Acf::field('Customer Text')->get(),
          'specialist_title' => Acf::field('Specialist Text')->get(),
          'customer_links' => Acf::field('Customer Links')->get(),
          'specialist_links' => Acf::field('Specialist Links')->get(),
          'simplr_links' => Acf::field('Simplr Links')->get(),
          'timeline' => Acf::field('Deeper Timeline')->get()
        ];
    }
}

<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Header extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'partials.header',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
      return [
        'header_logo' => Acf::option('header_logo')->get(),
        'header_signup' => Acf::option('header_signup')->get(),
        'header_socials' => Acf::option('header_socials')->get(),
        ];
    }
}

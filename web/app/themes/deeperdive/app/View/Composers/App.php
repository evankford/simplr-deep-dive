<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class App extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        '*',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'siteName' => $this->siteName(),
            'socials' => $this->socials(),
            'signup_button_text' => Acf::option('signup')->get()['Button Text'],
            'signup_form' => Acf::option('signup')->get()['signup_form'],
        ];
    }

    /**
     * Returns the site name.
     *
     * @return string
     */
    public function siteName()
    {
        return get_bloginfo('name', 'display');
    }

    public function socials() {
        return Acf::option('Social Links')->get();
    }
}

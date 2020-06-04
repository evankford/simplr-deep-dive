<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Footer extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'partials.footer',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function override()
    {
        return [
            'logo_url' => Acf::option('home_url')->default('/')->get(),
            'logo' => Acf::option('footer_logo')->get(),
            'menus_enabled' => Acf::option('footer_logo')->expect('boolean')->default(true)->get(),
            'socials_enabled' => Acf::option('footer_socials')->expect('boolean')->default(true)->get(),
            'signup_enabled' => Acf::option('footer_signup')->expect('boolean')->default(true)->get(),
            'signup_display' => Acf::option('footer_signup_display')->expect('string')->default('button')->get(),
            'menu_title_1' => Acf::option('footer_menu_1_title')->expect('string')->get(),
            'menu_title_2' => Acf::option('footer_menu_2_title')->expect('string')->get(),
            'copyright' => Acf::option('Copyright Text')->default('. All Rights Reserved')->escape()->get(),
        ];
    }
}

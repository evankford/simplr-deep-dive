<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Partners extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'sections.partners',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
          'partner_bg' => Acf::field('header_bg')->default(false)->get(),
          'partner_content_1' => Acf::field('header_1_content')->expect('array')->default([])->get(),
          'partner_content_2' => Acf::field('header_2_content')->expect('array')->default([])->get(),
          'partners_header' => Acf::field('partners_header')->get(),
          'partners' => Acf::field('Partners')->expect('array')->default([])->get(),
          'include_more' =>Acf::field('include_more')->default(true)->get()
        ];
    }
}

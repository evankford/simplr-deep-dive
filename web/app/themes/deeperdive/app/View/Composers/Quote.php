<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Quote extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'template-section-quote',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function override()
    {

      $home_id = get_option( 'page_on_front' );
        return [
          'testimonial_image' => Acf::field('Testimonial Image')->get(),
          'testimonial_quote' => Acf::field('Testimonial')->get(),
          'testimonial_name' => Acf::field('Testimonial Name')->get(),
          'testimonial_title' => Acf::field('Testimonial Title')->get(),
        ];
    }
}

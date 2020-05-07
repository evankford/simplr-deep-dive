<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class About extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'sections.about',
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
          'about_title' => Acf::field('about_title', $home_id)->default('')->get(),
          'about_subtitle' => Acf::field('about_subtitle', $home_id)->default('')->get(),
          'about_title_image' => Acf::field('about_title_image', $home_id)->default('')->get(),
          'about_bg' => Acf::field('about_bg', $home_id)->get(),
          'about_content' => Acf::field('about_content', $home_id)->expect('array')->default([])->get(),
        ];
    }

    public function get_content($id) {
      $content_raw=Acf::field($id)->get();
      return $content_raw;
    }
}

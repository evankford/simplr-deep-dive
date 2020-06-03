<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Section extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'template-section-*',
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
          'id' => Acf::field('Handle')->get(),
          'title' => Acf::field('Title')->get(),
          'bg_style' => strtolower(Acf::field('Background Style')->get()),
          'color_bg' => Acf::field('Background Color')->get(),
          'color_bg_end' => Acf::field('Background Color End')->default([])->get(),
          'color_text' => Acf::field('Main Text Color')->default([])->get(),
          'color_accent' => Acf::field('Accent Text Color')->default([])->get(),
          'section_icon' => Acf::field('Icon')->default(false)->get(),
          'section_icon_title' => Acf::field('Icon Title')->default(false)->get(),
          'section_header' => Acf::field('Section Header')->default(false)->get(),
          'section_content' => Acf::field('Section Content')->default(false)->get(),
          'section_decoration' => Acf::field('Include Line Decoration')->default(false)->get(),
          'full_height' => Acf::field('Full Height')->default(true)->get(),
        ];
    }

    // public function get_content($id) {
    //   $content_raw=Acf::field($id)->get();
    //   return $content_raw;
    // }
}

<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Chat extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'template-section-chat',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {

        return [
          'chat_header' => Acf::field('Chat Header')->get(),
          'chat_svg' => Acf::field('Chat SVG')->get(),
          'improvements' => Acf::field('Improvements')->default([])->get(),
          'improvements_bg' => Acf::field('Improvements BG')->default('#ffffff')->get()
        ];
    }

    // public function get_content($id) {
    //   $content_raw=Acf::field($id)->get();
    //   return $content_raw;
    // }
}

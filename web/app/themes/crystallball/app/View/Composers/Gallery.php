<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Gallery extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'partials.gallery-hover',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
          'gallery' => $this->get_gallery(),
        ];
    }

    public function get_gallery() {
      $gallery = Acf::option('main_gallery')->expect('array')->default([])->get();
      return $gallery;
    }
}

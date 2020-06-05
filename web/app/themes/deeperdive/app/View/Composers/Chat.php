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
        'scenes.chat',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {

        return [
          'customer' => Acf::field('Customer')->get(),
          'specialist' => Acf::field('Specialist')->get(),
          'messages' => Acf::field('Chat Messages')->get(),
          'review' => Acf::field('Review Text')->default(false)->get(),
        ];
    }
}

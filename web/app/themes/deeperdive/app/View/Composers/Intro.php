<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Intro extends Composer
{
   protected static $views = [
        'scenes.intro',
    ];
   public function with()
    {
        return [
            'intro_logo' => Acf::field('intro_logo')->get() ,
            'intro_text' => Acf::field('intro_text')->get() ,
            'intro_button_text' => Acf::field('intro_button_text')->get() ,
        ];
    }
}

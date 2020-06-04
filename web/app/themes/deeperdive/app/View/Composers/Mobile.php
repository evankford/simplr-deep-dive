<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Mobile extends Composer
{
   protected static $views = [
        'partials.mobilewall',
    ];
   public function with()
    {
        return [
            'mobile_logo' => Acf::option('mobile_logo')->get() ,
            'mobile_title' => Acf::option('mobile_title')->get() ,
            'mobile_text' => Acf::option('mobile_text')->get() ,
        ];
    }
}

<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Auth extends Composer
{
   protected static $views = [
        'partials.authwall',
    ];
   public function with()
    {
        return [
            'mobile_blurry' => Acf::option('Mobile Blurry')->get() ,
            'mobile_normal' => Acf::option('Mobile')->get() ,
            'tablet_blurry' => Acf::option('Tablet Blurry')->get() ,
            'tablet_normal' => Acf::option('Tablet')->get() ,
            'desktop_blurry' => Acf::option('Desktop Blurry')->get() ,
            'desktop_normal' => Acf::option('Desktop')->get() ,
            'auth_logo' => Acf::option('Auth Drawer Logo')->get() ,
            'auth_greeting' => Acf::option('Greeting')->get() ,
            'form_id' => Acf::option('Form ID')->get() ,
            'portal_id' => Acf::option('Portal ID')->get() ,
            'main_content' => Acf::option('Main Content')->get() ,
            'contact_content' => Acf::option('Contact Text')->get() ,
            'cookie_text' => Acf::option('Cookie Text')->get() ,
            'forbidden' => Acf::option('Forbidden')->get() ,
            'not_an_email' => Acf::option('Forbidden')->get() ,
            'other_error' => Acf::option('Other')->get() ,
            'success' => Acf::option('Success')->get() ,
        ];
    }
}

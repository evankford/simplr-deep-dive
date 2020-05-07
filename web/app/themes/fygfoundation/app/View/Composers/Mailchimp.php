<?php

namespace App\View\Composers;
use Samrap\Acf\Acf;
use Roots\Acorn\View\Composer;

class Mailchimp extends Composer {

    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'partials.signup',
    ];


  /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function override()

    {
        $props =$this->process();
        return $props;
    }

    public function process() {
        $mc = Acf::option('signup')->expect('array')->get();
        $output['mc_form'] = $mc['signup_form_'];
        $output['signup_form_button_text'] = $mc['Button Text'];
        $output['signup_form_button_fallback'] = $mc['fallback_url'];
        return $output;
    }
}

<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class Button extends Component
{
    /**
     * The alert type.
     *
     * @var string
     */
    public $href;
    /**
     * The alert type.
     *
     * @var string
     */
    public $icon;
    /**
     * The link target.
     *
     * @var string
     */
    public $target;
    /**
     * Extra classes.
     *
     * @var string
     */
    public $classes;

    /**
     * Create the component instance.
     *
     * @param  string  $icon
     * @param  string  $label
     * @param  string  $url
     * @return void
     */
    public function __construct($href = '', $classes = null, $target = '', $icon = '')
    {
        $this->target = $this->processTarget($target);
        $this->icon = $icon;
        $this->href = $href;
        $this->classes = $classes;
    }

    public function processTarget($target) {
      if ($target == '_blank') {
        return 'target="_blank" rel="noopener"';
      } else {
        return $target;
      }
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return $this->view('components.button');
    }
}

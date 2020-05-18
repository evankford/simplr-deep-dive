<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class Icon extends Component
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
     * The alert type.
     *
     * @var string
     */
    public $target;
    /**
     * The alert message.
     *
     * @var string
     */
    public $message;

    /**
     * Create the component instance.
     *
     * @param  string  $icon
     * @param  string  $label
     * @param  string  $url
     * @return void
     */
    public function __construct($href = '', $showTitle = '', $class = null, $target='', $icon='', $title='')
    {
        $this->target = $this->processTarget($target);
        $this->title = $title;
        $this->icon = $icon;
        $this->href = $href;
        $this->extraClasses = $class;
        $this->showTitle = $showTitle;
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
        return $this->view('components.icon');
    }
}

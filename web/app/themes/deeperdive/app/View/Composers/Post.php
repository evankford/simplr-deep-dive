<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;
use Samrap\Acf\Acf;

class Post extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'partials.page-header',
        'partials.content',
        'partials.content-*',
        'template-team',
        '404',
    ];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function override()
    {
        return [
            'title' => $this->title(),
            'introduction' => $this->introduction(),
            'subtitle' => $this->subtitle(),
            'header_image' => $this->header_image(),
            'include_about' => Acf::field('about_links')->default(false)->get(),
            'background_style' => Acf::field('Background Image Style')->default('Offset')->get()
        ];
    }

    /**
     * Returns the post subtitle.
     *
     * @return string
     */
    public function subtitle() {
        if (is_404()) {
            return __('Page Not Found', 'sage');
        }
        return Acf::field('Subtitle')->default(false)->get();
    }

    /**
     * Returns the post title.
     *
     * @return string
     */
    public function introduction() {

        return Acf::field('Introduction')->default(false)->get();
    }
    /**
     * Returns the post title.
     *
     * @return string
     */
    public function title()
    {
        if ($this->view->name() !== 'partials.page-header' && $this->view->name() !== 'partials.image-header') {
            return get_the_title();
        }

        if (is_home()) {
            if ($home = get_option('page_for_posts', true)) {
                return get_the_title($home);
            }

            return __('Latest Posts', 'sage');
        }

        if (is_archive()) {
            return get_the_archive_title();
        }

        if (is_search()) {
            /* translators: %s is replaced with the search query */
            return sprintf(
                __('Search Results for %s', 'sage'),
                get_search_query()
            );
        }

        if (is_404()) {
            return __('404', 'sage');
        }

        return Acf::field('Title')->default(get_the_title())->get();

        // return get_the_title();
    }

    public function header_image() {
        if ((get_field('Background Image Style') || is_single() || is_archive()) && get_field('Background Image Style') != 'No Image' && has_post_thumbnail()) {
            return get_post_thumbnail_id();
        } else {
            return false;
        }
    }

}

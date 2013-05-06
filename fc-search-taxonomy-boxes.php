<?php
/*
Plugin Name: FC Search Taxonomy Boxes
Description: Adds a filter box to category (and other hierarchical taxonomies) selection box on Post edition screen.
Author: Federico Cingolani
Version: 1.0.0
Author URI: http://fcingolani.com.ar/
License: GPLv2
*/

function fcstb_add_admin_script($hook) {
    if( 'post.php' != $hook )
        return;

    wp_enqueue_style('fcstb_css', plugins_url('/styles.css', __FILE__) );

    wp_enqueue_script('fcstb_script', plugins_url('/script.js', __FILE__) );
    wp_localize_script('fcstb_script', 'fcstbL10n', array(
    	'filter'  => __('Filter'),
    ));
}

add_action('admin_enqueue_scripts', 'fcstb_add_admin_script' );
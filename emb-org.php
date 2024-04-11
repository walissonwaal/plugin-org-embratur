<?php
/**
 * Plugin Name:       Emb Org
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       emb-org
 *
 * @package CreateBlock
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_emb_org_block_init()
{
	register_block_type(__DIR__ . '/build', array(
		'render_callback' => 'render_organograma_block',
));
}

// Cria Post Type personalizado
function create_organograma_cpt()
{
	register_post_type(
		'organograma_member',
		array(
			'labels' => array(
				'name' => __('Membros do Organograma', 'emb-org'),
				'singular_name' => __('Membro do Organograma', 'emb-org'),
			),
			'public' => true,
			'has_archive' => true,
			'show_in_rest' => true, // Ativa o suporte ao editor de blocos
		)
	);
}

// Registra o bloco
add_action('init', 'create_block_emb_org_block_init');
// Registra o Post Type
add_action('init', 'create_organograma_cpt');

// Registra a rota na API do Wordpress
add_action('rest_api_init', function () {
	register_rest_route(
		'emb-org/v1',
		'/membros/',
		array (
			'methods' => 'GET',
			'callback' => 'get_organograma_data',
		)
	);
});

// Função callback para obter os posts do organogrma
function get_organograma_data()
{
	$args = array(
		'post_type' => 'organograma_member',
		'posts_per_page' => -1, // Buscar todos os membros
	);

	$query = new WP_Query($args);
	$membros = array();

	while ($query->have_posts()) {
		$query->the_post();

		$membro = array(
			// 'id' => get_the_ID(),
			// 'nome' => get_the_title(),
			'id' => get_field('id'), // Supondo que você esteja usando ACF
			'parentId' => get_field('parentid'),
			'first_name' => get_field('first_name'),
			'bio' => get_field('bio'),
			'department_name' => get_field('department_name'),
			'phone' => get_field('phone'),
			'email' => get_field('email'),
			'img_url' => get_field('img_url'),
			'movie_url' => get_field('movie_url'),
		);

		array_push($membros, $membro);
	}

	wp_reset_postdata();

	return rest_ensure_response($membros);
}

function render_organograma_block() {
	return '<div id="organograma-container"></div>';
}


// ORGANOGRAMA

// STYLES
function emb_org_enqueue_styles() {
	wp_enqueue_style('modal-css', plugin_dir_url(__FILE__) . './src/css/modal.css');
}
add_action('wp_enqueue_scripts', 'emb_org_enqueue_styles');

// JS ORGANOGRAMA
function emb_org_enqueue_scripts() {
	wp_enqueue_script('organograma-js', plugin_dir_url(__FILE__) . './src/js/organograma.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'emb_org_enqueue_scripts');

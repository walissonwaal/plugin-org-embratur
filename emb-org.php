<?php

/**
 * Plugin Name:       Organograma Embratur
 * Description:       Plugin desenvolvido para a apresentação organizacional da Embratur. Facilita a criação e a gestão de organogramas no WordPress, permitindo visualizar a estrutura hierárquica da organização de maneira clara e eficiente.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            in.Pacto
 * Author URI: https://inpacto.co
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
			'taxonomies'   => array('category'),
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
		'/membros',
		array(
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
			'composition' => get_field('composition'),
		);

		array_push($membros, $membro);
	}

	wp_reset_postdata();

	return rest_ensure_response($membros);
}

// Id autoincremento ACF
function acf_set_auto_increment_member_id($post_id)
{
	// Certifique-se de que estamos tratando de um novo post do tipo 'membros_do_organograma'
	if (get_post_type($post_id) == 'organograma_member' && get_post_status($post_id) == 'auto-draft') {
		$field_key = "field_6617e9217afba"; // Substitua pelo key real do seu campo ACF
		$last_id = get_option('acf_last_id', 0); // Pega o último ID usado
		$new_id = $last_id + 1; // Incrementa o ID

		// Atualiza o campo ACF com o novo ID
		update_field($field_key, $new_id, $post_id);

		// Atualiza o último ID usado
		update_option('acf_last_id', $new_id);
	}
}

// Adiciona a função ao hook 'save_post' com prioridade alta para garantir que execute depois da criação do post
add_action('save_post', 'acf_set_auto_increment_member_id', 20, 1);

// Popula o select PARENTID
function load_parent_id_choices($field)
{
	// Reset choices
	$field['choices'] = array();

	// Define custom post type
	$args = array(
		'post_type' => 'organograma_member',
		'posts_per_page' => -1  // Ajuste conforme necessário para limitar resultados
	);

	// Get custom post type items
	$posts = get_posts($args);

	// Loop through them to create a dynamic dropdown
	foreach ($posts as $post) {
		$post_id = get_field('id', $post->ID);  // Assumindo que 'id' é o campo autoincrementado
		$post_name = get_the_title($post->ID);  // Pega o título/nome do post para mostrar no select

		// Make the title the label and the autoincrement ID the value
		$field['choices'][$post_id] = $post_name;
	}

	return $field;
}

add_filter('acf/load_field/key=field_6617e9557afbb', 'load_parent_id_choices');




function render_organograma_block()
{
	return '<div id="organograma-container"></div>';
}


// ORGANOGRAMA

// STYLES
function emb_org_enqueue_styles()
{
	wp_enqueue_style('modal-css', plugin_dir_url(__FILE__) . './src/css/modal.css');
	wp_enqueue_style('video-css', plugin_dir_url(__FILE__) . './src/css/video.css');
	wp_enqueue_style('style-css', plugin_dir_url(__FILE__) . './src/css/style.css');
}

add_action('wp_enqueue_scripts', 'emb_org_enqueue_styles');

// JS ORGANOGRAMA
function emb_org_enqueue_scripts()
{
	wp_enqueue_script('organograma-js', plugin_dir_url(__FILE__) . './src/js/organograma.js', array(), '1.0.0', true);
	wp_enqueue_script('video-js', plugin_dir_url(__FILE__) . './src/js/video.js', array('organograma-js'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'emb_org_enqueue_scripts');

// Function to display author link
function display_author_link()
{
	$author_name = 'Your Name';
	$author_link = 'https://yourwebsite.com';
	echo 'By <a href="' . esc_url($author_link) . '" target="_blank">' . esc_html($author_name) . '</a>';
}
add_action('admin_footer', 'display_author_link');

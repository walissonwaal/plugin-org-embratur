/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import organograma from "./js/organograma";
import video from "./js/video";
import { Icon } from "@wordpress/components";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 *
 */

const OrganogramIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M88.2,53.4c0.8,0,1.5-0.7,1.5-1.5V39.2c0-0.8-0.7-1.5-1.5-1.5h-8.6v-6.1c0-0.8-0.7-1.5-1.5-1.5H51.5v-4.6h13.7c0.8,0,1.5-0.7,1.5-1.5V5c0-0.8-0.7-1.5-1.5-1.5H34.8c-0.8,0-1.5,0.7-1.5,1.5v19c0,0.8,0.7,1.5,1.5,1.5h13.7v4.6H21.9c-0.8,0-1.5,0.7-1.5,1.5v6.1h-8.6c-0.8,0-1.5,0.7-1.5,1.5v12.7c0,0.8,0.7,1.5,1.5,1.5H32c0.8,0,1.5-0.7,1.5-1.5V39.2c0-0.8-0.7-1.5-1.5-1.5h-8.6v-4.6h25.1v4.6h-8.6c-0.8,0-1.5,0.7-1.5,1.5v12.7c0,0.8,0.7,1.5,1.5,1.5h8.9v5.9h-8.9c-0.8,0-1.5,0.7-1.5,1.5v12.7c0,0.8,0.7,1.5,1.5,1.5h20.2c0.8,0,1.5-0.7,1.5-1.5V60.8c0-0.8-0.7-1.5-1.5-1.5h-8.3v-5.9h8.3c0.8,0,1.5-0.7,1.5-1.5V39.2c0-0.8-0.7-1.5-1.5-1.5h-8.6v-4.6h25.1v4.6H68c-0.8,0-1.5,0.7-1.5,1.5v12.7c0,0.8,0.7,1.5,1.5,1.5h8.6v5.9H68c-0.8,0-1.5,0.7-1.5,1.5v12.7c0,0.8,0.7,1.5,1.5,1.5h8.6v5.9H68c-0.8,0-1.5,0.7-1.5,1.5V95c0,0.8,0.7,1.5,1.5,1.5h20.2c0.8,0,1.5-0.7,1.5-1.5V82.3c0-0.8-0.7-1.5-1.5-1.5h-8.6v-5.9h8.6c0.8,0,1.5-0.7,1.5-1.5V60.8c0-0.8-0.7-1.5-1.5-1.5h-8.6v-5.9H88.2z M36.3,6.5h27.3v16H36.3V6.5z M30.5,50.4H13.3v-9.7h17.2V50.4z M58.6,71.9H41.4v-9.7h17.2V71.9z M58.6,50.4H41.4v-9.7h17.2V50.4z M86.7,93.5H69.5v-9.7h17.2V93.5z M86.7,71.9H69.5v-9.7h17.2V71.9z M69.5,40.7h17.2v9.7H69.5V40.7z" />
	</svg>
);

registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	organograma,
	video,
	icon: OrganogramIcon,

	/**
	 * @see ./save.js
	 */
	save: function () {
		return null; // Ou uma marcação mínima se necessário
	},
});

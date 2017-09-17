import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(els, offset) {
		this.itemsToReveal = els;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();
		// this.createWaypoints(offset); //ask Simon if I could do it this way?
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints() {
		var that = this;
		this.itemsToReveal.each(function() {
			var currentItem = this; // ask Simon why does it work like this
			new Waypoint({
				element: currentItem,
				handler: function() { //why is is $(currentItem)?
					$(currentItem).addClass("reveal-item--is-visible")
				},
				offset: that.offsetPercentage
			});
		});
	}
}

export default RevealOnScroll;
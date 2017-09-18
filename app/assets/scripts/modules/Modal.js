import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $('.open-modal');
		this.modal = $('.modal');
		this.closeModalButton = $('.modal__close');
		this.events();
	}

	events() {
		// this.openModalButton.click(this.toggleModal.bind(this));
		// this.closeModalButton.click(this.toggleModal.bind(this));

		// clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this));

		// clicking the x close modal button
		this.closeModalButton.click(this.closeModal.bind(this));

		// pushes any key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	// toggleModal() {
	// 	this.modal.toggleClass("modal--is-visible");
	// }

	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return  false;
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
		//return false;
	}
}

export default Modal;
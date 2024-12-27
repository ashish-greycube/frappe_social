frappe.views.SocialFactory = class SocialFactory extends frappe.views.Factory {
	show() {
		this.make('social');
		// if (frappe.pages.social) {
		// 	frappe.container.change_to('social');
		// } else {
		// 	this.make('social');
		// }
	}

	make(page_name) {
		const assets = [
			'social.bundle.js'
		];

		frappe.require(assets, () => {
			frappe.social.home = new frappe.social.Home({
				parent: this.make_page(true, page_name)
			});
		});
	}
};

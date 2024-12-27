// frappe.pages['social'].on_page_load = function(wrapper) {
// 	const assets = 'social.bundle.js';	
// 	let page_name='social'
// 	// var page = frappe.ui.make_app_page({
// 	// 	parent: wrapper,
// 	// 	title: 'Social',
// 	// 	single_column: true
// 	// });
// 	frappe.require(assets, () => {
// 		frappe.social.home = new frappe.social.Home({
// 			parent: frappe.make_page(true, page_name)
// 		});
// 	});

// }

frappe.pages["social"].on_page_load = function (wrapper) {
	frappe.require("social.bundle.js", () => {
		let social_home = new frappe.views.SocialFactory(wrapper);
		social_home.show();
	});
};


! function (e) {
	"use strict";
	e.cssCircleMenu = function (e) {
		function s() {
			a.addEventListener("click", function (e) {
				e.preventDefault(), t()
			})
		}

		function t() {
			a.classList.contains("is-active") ? c() : i()
		}

		function i() {
			n.classList.add("is-active"), a.classList.add("is-active"), o.classList.add("is-active")
		}

		function c() {
			n.classList.remove("is-active"), a.classList.remove("is-active"), o.classList.remove("is-active")
		}
		var n = document.querySelector(e),
			a = n ? n.querySelector(".js-menu-toggle") : void 0,
			o = n ? n.querySelector(".js-menu-mask") : void 0;
		if (!(n && a && o)) throw new Error("Invalid elements, check the structure.");
		return s(), {
			openMenu: i,
			closeMenu: c
		}
	}
}(window);
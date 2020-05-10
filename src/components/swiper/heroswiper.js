import React from "react";
import Swiper from "react-id-swiper";
import { Pagination } from "swiper/js/swiper.esm";
import "swiper/css/swiper.css";

class HeroSwiper extends React.Component {
	render() {
		const { children } = this.props;
		const params = {
			modules: [Pagination],
			containerClass: "swiper-container",
			effect: "fade",
			loop: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-pagination",
				type: "bullets",
				clickable: true,
			},
			// breakpoints: {
			//   768: {
			//     slidesPerView: 3,
			//     spaceBetween: 30
			//   },
			//   640: {
			//     slidesPerView: 2,
			//     spaceBetween: 20
			//   },
			//   320: {
			//     slidesPerView: 1,
			//     spaceBetween: 10
			//   }
			// }
		};
		return <Swiper {...params}>{children}</Swiper>;
	}
}

export default HeroSwiper;

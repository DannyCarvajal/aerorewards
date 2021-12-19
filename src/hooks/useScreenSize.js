import { useState, useEffect } from "react";

const useScreenSize = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	const handleResize = () => {
		if (window.innerWidth < 768) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isMobile]);

	return [isMobile];
};

export default useScreenSize;

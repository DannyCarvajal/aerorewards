import { addPointsUrl, reedemProductUrl, headers } from "constants/fetchUrls";

// CURRYING TO POST DATA
function postData(url) {
	return async data => {
		const request = await fetch(url, {
			method: "POST",
			headers,
			body: JSON.stringify(data),
		});
		return await request.json();
	};
}

function addPoints(points) {
	/* YOU CAN ADD POINTS JUST BY 1000, 5000 OR 7500 POINTS */
	if (points !== 1000 && points !== 5000 && points !== 7500) {
		return "value not allowed";
	}
	const increment = {
		amount: points,
	};

	return postData(addPointsUrl)(increment);
}

function reedemProduct(productId) {
	const reedem = {
		productId: productId,
	};

	return postData(reedemProductUrl)(reedem);
}

export { addPoints, reedemProduct };

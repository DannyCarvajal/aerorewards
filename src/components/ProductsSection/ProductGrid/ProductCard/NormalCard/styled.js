import styled from "styled-components";

import buyBlue from "assets/icons/buyBlue.svg";
import iconForbidden from "assets/icons/iconForbidden.svg";

const CanBuyIcon = styled.img.attrs(({ canBuy }) => ({
	src: canBuy ? buyBlue : iconForbidden,
	alt: "buyIcon",
}))`
	width: 42px;
	height: 42px;
`;

const ProductImg = styled.img.attrs(({ img }) => ({
	src: img,
	alt: "productImg",
}))`
	width: 234px;
	max-width: 90%;
	height: 169px;

	margin-top: 35px;
`;

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	position: relative;
	width: 260px;
	height: 380px;

	background: #ffffff;
	box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.1);
	border-radius: 15px;

	${CanBuyIcon} {
		position: absolute;
		top: 10px;
		right: 10px;
	}

	.pointsContainer {
		align-self: flex-start;

		margin-left: 20px;
	}
`;

const ProductInfoWrapper = styled.div`
	align-self: flex-start;

	width: 90%;

	padding-left: 20px;
	padding-bottom: 10px;

	border-bottom: 1px solid #d9d9d9;
`;

const ProductName = styled.h2`
	max-height: 25px;

	font-size: 2.1rem;
	font-weight: 700;
`;

const ProductCategory = styled.p`
	position: relative;
	left: ${({ largeText }) => (largeText ? "125px" : "0px")};

	color: ${({ theme }) => theme.TEXT_LIGHT};
	font-size: ${({ theme }) => theme.SMALL};
`;

const RedeemButton = styled.button`
	position: absolute;
	bottom: 15px;
	width: 85%;
	height: 40px;

	background: ${({ canBuy, theme }) => (canBuy ? theme.MAIN_BLUE : theme.RED_FORBIDDEN)};
	border-radius: 15px;
	border: none;

	color: white;
	font-size: ${({ theme }) => theme.SMALL};
	font-weight: 700;
	font-style: italic;
	text-align: center;

	cursor: ${({ canBuy }) => (canBuy ? "pointer" : "static")};

	&:hover {
		background: #18bbe8;
	}
`;

export {
	StyledCard,
	CanBuyIcon,
	ProductImg,
	ProductInfoWrapper,
	ProductName,
	ProductCategory,
	RedeemButton,
};

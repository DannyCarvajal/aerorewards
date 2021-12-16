import styled from "styled-components";
// Assets
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
	width: 243px;
	height: 175.5px;
	margin-top: 35px;
	max-width: 90%;
`;

const StyledCard = styled.div`
	width: 270px;
	height: 390px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	background: #ffffff;
	box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.1);
	border-radius: 15px;
	position: relative;

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
	width: 90%;
	padding-left: 20px;
	padding-bottom: 10px;
	border-bottom: 1px solid #d9d9d9;
	align-self: flex-start;
`;

const ProductName = styled.h2`
	font-size: 2.1rem;
	font-weight: 700;
	max-height: 25px;
`;

const ProductCategory = styled.p`
	position: relative;
	font-size: ${({ theme }) => theme.SMALL};
	color: ${({ theme }) => theme.TEXT_LIGHT};
	left: ${({ largeText }) => (largeText ? "125px" : "0px")};
`;

const RedeemButton = styled.button`
	width: 85%;
	height: 40px;
	font-size: ${({ theme }) => theme.SMALL};
	font-weight: 700;
	font-style: italic;
	background: ${({ canBuy, theme }) => (canBuy ? theme.MAIN_BLUE : theme.RED_FORBIDDEN)};
	color: white;
	border-radius: 15px;
	border: none;
	position: absolute;
	bottom: 15px;
	text-align: center;
	cursor: ${({ canBuy }) => (canBuy ? "pointer" : "static")};
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

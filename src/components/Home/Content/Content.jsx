import {
	HomeContentContainer,
	ConfettiBg,
	MainTitleHome,
	HomeContent,
	CallToAction,
} from "./styled";

const Content = () => {
	return (
		<HomeContentContainer>
			<ConfettiBg />
			<MainTitleHome>Aerorewards</MainTitleHome>
			<HomeContent>
				Redeem the most interesting products with your accumulated points from Aerostores. This is
				when buying becomes more exciting than ever. &nbsp;
				<b>
					The best for the best <i className="fas fa-hands-helping"></i>
				</b>
			</HomeContent>
			<CallToAction to="/products">Start Now</CallToAction>
		</HomeContentContainer>
	);
};

export default Content;

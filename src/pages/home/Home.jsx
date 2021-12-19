import { HomeSection } from "./styled";

import TrophyContainer from "components/Home/TrophyContainer/TrophyContainer";
import Content from "components/Home/Content/Content";

const Home = () => {
	return (
		<HomeSection>
			<TrophyContainer />
			<Content />
		</HomeSection>
	);
};

export default Home;

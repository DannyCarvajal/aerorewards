// Styles
import { SpinIcon, ButtonLevel3, ButtonLevel2, SpinButtonText, StyledSpinButton } from "./styled";

const SpinButton = () => {
	const SpinHandler = () => {
		alert("still in development");
	};

	return (
		<ButtonLevel3>
			<ButtonLevel2>
				<StyledSpinButton onClick={SpinHandler}>
					<SpinIcon />
					<SpinButtonText>SPIN</SpinButtonText>
				</StyledSpinButton>
			</ButtonLevel2>
		</ButtonLevel3>
	);
};

export default SpinButton;

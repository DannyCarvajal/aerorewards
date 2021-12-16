import styled from "styled-components";

const UserDataContainer = styled.div`
	width: 280px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	.userName {
		color: white;
		font-size: 2.5rem;
		font-weight: 400;
	}

	@media screen and (min-width: 768px) {
		.userName {
			color: ${({ theme }) => theme.TEXT_DARK};
			font-size: ${({ theme }) => theme.SUBTITLE};
		}
	}
`;

export { UserDataContainer };

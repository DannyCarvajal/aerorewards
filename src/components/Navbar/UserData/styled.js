import styled from "styled-components";

const UserDataContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	width: 280px;

	.userName {
		color: white;
		font-size: 2.5rem;
		font-weight: 400;
	}

	@media screen and (min-width: 768px) {
		.userName {
			min-width: 24px;

			color: ${({ theme }) => theme.TEXT_DARK};
			font-size: ${({ theme }) => theme.MEDIUM};
		}
	}
`;

export { UserDataContainer };

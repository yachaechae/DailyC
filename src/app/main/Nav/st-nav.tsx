import styled from "@emotion/styled";

export const NavSt = styled.nav`
	border-bottom: 1px solid #8e8e8e;
`;

export const Category = styled.ul`
	height: 70px;
	font-size: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 3rem;
`;

export const CategoryItem = styled.li`
	max-width: 200px;
	width: 100%;
	text-align: center;
	cursor: pointer;
	position: relative;
	color: #f49608;
	padding: 0.5rem 0;

	&:hover {
		background: #ffe8c7;
		border-radius: 25px;
	}
	&::after {
		position: absolute;
		top: 50%;
		right: -1.5rem;
		transform: translateY(-50%);
		height: 27px;
		content: "";
		border: 1px solid #f49608;
	}
	&:last-child::after {
		border: 0;
	}
`;

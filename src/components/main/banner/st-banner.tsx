import styled from "@emotion/styled";

export const Slider = styled.div`
	position: relative;
	width: 100vw;
	max-width: 100%;
	margin: 0 auto;
	overflow: hidden;

	& .prevButton,
	& .nextButton {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		font-size: 1.5rem;
		background-color: #ffffffcc;
		border: none;
		padding: 10px;
		cursor: pointer;
	}

	& .prevButton {
		left: 10px;
		z-index: 1;
	}

	& .nextButton {
		right: 10px;
	}
`;
export const SliderWrapper = styled.div`
	display: flex;
	transition: transform 0.5s ease;
`;
export const SlideImg = styled.img`
	flex: 0 0 100vw;
	height: auto;
`;

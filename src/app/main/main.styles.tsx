import styled from "@emotion/styled";

interface ContainerProps {
	marginTop?: string;
}

export const Container = styled.div<ContainerProps>`
	max-width: 1200px;
	width: 100%;
	margin: ${(props) => props.marginTop || "0"} auto 0;
`;
export const Title = styled.h2`
	font-size: 2.5rem;
	margin: 0 0 3.5rem;
`;

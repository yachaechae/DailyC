import OrangeIcon from "@/icon/OrangeIcon";
import styled from "@emotion/styled";

export const StyledOrangeIcon = styled(OrangeIcon)`
	& .top {
		fill: ${(props) => (props.liked ? "#00C67F" : "#fff")};
	}
	& .leaf {
		fill: ${(props) => (props.liked ? "#69D283" : "#fff")};
	}
	& .deepOrange {
		fill: ${(props) => (props.liked ? "#FF7F5A" : "#fff")};
	}

	& .orange {
		fill: ${(props) => (props.liked ? "#FF9148" : "#fff")};
	}
`;

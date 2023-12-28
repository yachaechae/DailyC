import * as React from "react";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { StyledOrangeIcon } from "./st-card";

export default function BasicCard() {
	const [liked, setLiked] = useState(false);

	const handleLikeClick = () => {
		setLiked(!liked);
	};
	return (
		<Card sx={{ maxWidth: 230 }}>
			<CardMedia
				component="img"
				height="194"
				image="https://lh3.googleusercontent.com/pw/ABLVV85sp4TkPwwUOkDwUn5JVw6BkKE8eZWYo7zbtMVbqxLx4aFdq50ByBE0Il1FSK8GM6HTDFk39TQPjLHDZK5StOJ3IxkQSWfPJVgR1dFFSr9G9M1G1MmbqGnSU2rk6vWc7fq-hKwppch_xCSCCUytMJTPBF-2tOTsTkkKbFVPbRppGm82PlSIsdevIM-909eIKI0Gmv0PBFn19Tq4B0hTin_pTQhetUvmZvS5Y8Yky3cIpb0ilnveC-vJF1zUvvEkD7xYwnkIKvDn8mHo4bwATXbbGJu9_BlfGGmyB2Wg4b1mJm0VbN_Ko_BG6W8H2Yo6KbqMXcjKZ8chulz2JTODoOBLyNRosCGpDgKEA2mphiCCjr4mvcxffE-B8n1pbO49k1z69ijgMspGMvdbODR-K94aCr4P8VJaVzsAG502gR3KhJlgrxAqbE5F5h-vDUkloyarIXRbbHsB3ekeO2RtvnAoLLqPTOhJYpYVQe7lAkM8zUsnq9d-l80HrvwnIVm7NLLhiETKi61ggFyBaJGEON65jynYreMN98EkLjKNm8_ZO5jl0XtM6Au6gt1BRTVXK3M5JLMR--F_SyykQBqcAKCi_BtxN3ZYiewhw5m2p6fxxDPcSZREA8jXsZ7JbHhdCMB2k5cZJTa4-Nopyafr5AFzUCRPsJV4KtHqulNcLqsRAFQ5AAo1yPvAIUx55TPCrl_M0FVL2dNgtUhD-hqHzQu99wCg_KjkEEKX95RayuF1Qe3fQjKTGLyea72PrHMfcpt5q4c_RnurL6qw66u8gJjmyyljNhsi7_pQVG8z2sfz-TmaDgvcFFSZtwdf5yiBAnFUF9scak0p0s7inmXgy6LudyGy9YW6ZgpYzKsNiVcDs8Ijk2mWD_lSucriKw=w1294-h1294-s-no-gm?authuser=0"
				alt="Paella dish"
			/>
			<CardHeader
				avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
				action={
					<IconButton
						aria-label="add to favorites"
						onClick={handleLikeClick}
						className={liked ? "liked" : ""}
					>
						<StyledOrangeIcon width={25} liked={liked}></StyledOrangeIcon>
					</IconButton>
				}
				title="Shrimp and Chorizo Paella"
				subheader="September 14, 2016"
			/>

			<CardContent>
				<Typography variant="body2" color="text.secondary">
					This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add
					1 cup of frozen peas along with the mussels, if you like.
				</Typography>
			</CardContent>
			<CardActions disableSpacing></CardActions>
		</Card>
	);
}

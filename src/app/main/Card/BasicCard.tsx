import * as React from "react";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import OrangeIcon from "@/icon/OrangeIcon";
import { AccountCircle } from "@mui/icons-material";
import { Judson } from "next/font/google";

const judson = Judson({ weight: "400", subsets: ["latin"] });

export default function BasicCard() {
	const [liked, setLiked] = useState(false);

	const handleLikeClick = () => {
		setLiked(!liked);
	};
	return (
		<Card sx={{ maxWidth: 250 }}>
			<CardContent className="relative p-0">
				<CardMedia component="img" height="194" image="http://placekitten.com/200/300"></CardMedia>
				<CardContent className="absolute bottom-0 left-0 bg-slate-50 bg-opacity-50">
					<Typography variant="body2" color="text.secondary">
						This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
						Add 1 cup of frozen peas along with the mussels, if you like.
					</Typography>
				</CardContent>
			</CardContent>
			<CardHeader
				className="bg-gray-300 py-2 px-3"
				avatar={
					<Avatar sx={{ bgcolor: "white" }} aria-label="recipe">
						<AccountCircle className="fill-orange size-[125%]"> </AccountCircle>
					</Avatar>
				}
				action={
					<IconButton
						aria-label="add to favorites"
						onClick={handleLikeClick}
						className={liked ? "liked" : ""}
					>
						<OrangeIcon width={35} liked={liked}></OrangeIcon>
					</IconButton>
				}
				title={<Typography className={`${judson.className}`}>유저이름</Typography>}
				subheader={<Typography className={`${judson.className}`}>180cm</Typography>}
			/>
		</Card>
	);
}

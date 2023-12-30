import * as React from "react";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import OrangeIcon from "@/icon/OrangeIcon";
import { AccountCircle, Bookmark, BookmarkBorder, WorkspacePremium } from "@mui/icons-material";
import { Jua, Judson } from "next/font/google";

const jua = Jua({ weight: "400", subsets: ["latin"] });
const judson = Judson({ weight: "400", subsets: ["latin"] });

export default function BasicCard() {
	const [liked, setLiked] = useState(false);
	const [bookmark, setBookmark] = useState(false);

	const handleLikeClick = () => {
		setLiked(!liked);
	};
	const handleBookmarkClick = () => {
		setBookmark(!bookmark);
	};
	return (
		<Card className="w-[250px]">
			<div className="relative group">
				<div className="absolute top-1 w-full flex justify-between">
					<WorkspacePremium className="size-12 fill-gold drop-shadow" />
					<div onClick={handleBookmarkClick} className="cursor-pointer">
						{bookmark ? (
							<Bookmark className="size-12 fill-orange " />
						) : (
							<BookmarkBorder className="size-12" />
						)}
					</div>
				</div>
				<CardMedia component="img" image="http://placekitten.com/200/300"></CardMedia>
				<div className="absolute w-full bottom-0 left-0 bg-slate-50 bg-opacity-50 p-4 hidden group-hover:block transition duration-200 ease-out group-hover:ease-in">
					<Typography
						variant="h4"
						className={`${jua.className} text-white drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] truncate`}
					>
						편안 데일리룩 편안 데일리룩
					</Typography>
					<Typography variant="h6" className={`${jua.className}`}>
						#트레이닝 # 편안 #집앞
					</Typography>
				</div>
			</div>
			<CardHeader
				className="bg-gray-300 py-2 px-3"
				avatar={
					<Avatar sx={{ bgcolor: "white" }}>
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

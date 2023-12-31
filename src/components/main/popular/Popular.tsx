import React from "react";
import BasicCard from "../card/BasicCard";
import { ArrowBackIosRounded, ArrowForwardIosRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function Popular() {
	return (
		<>
			<h2 className="mb-14 text-4xl">인기 코디</h2>

			<div className="w-full flex justify-between items-center gap-4">
				<IconButton>
					<ArrowBackIosRounded sx={{ fontSize: 40 }} color="primary" />
				</IconButton>
				<div className="w-full flex justify-between">
					<BasicCard rank="first" />
					<BasicCard rank="second" />
					<BasicCard rank="third" />
					<BasicCard rank="" />
				</div>
				<IconButton>
					<ArrowForwardIosRounded sx={{ fontSize: 40 }} color="primary" />
				</IconButton>
			</div>
		</>
	);
}

"use client";
import theme from "@/style/customTheme";
import { ThemeProvider } from "@mui/material";
import React from "react";
import { RecoilRoot } from "recoil";

export default function RecoilProvider({ children }: { children: React.ReactNode }) {
	return (
		<RecoilRoot>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</RecoilRoot>
	);
}

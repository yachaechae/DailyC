"use client";
import { openLoadingState } from "@/recoil/state";
import { Backdrop, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

function Loading() {
  const [openLoading, setOpenLoading] = useRecoilState(openLoadingState);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoading}
        onClick={() => {
          setOpenLoading(false);
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default Loading;

"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.replace("/main");
  return null;
  // main으로 리다이렉팅
}

"use client";

import React, { useEffect } from "react";
import Layout from "./profileLayout";
import { supabase } from "@/lib/supabase-config";

function ProfilePage() {
  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "fkdla432@gmail.com",
      password: "123456789",
    });
    console.log(data);
  }
  useEffect(() => {
    signInWithEmail();
  }, []);
  return (
    <>
      <Layout />
      <p>나의 코디</p>
    </>
  );
}

export default ProfilePage;

import React from "react";
import Form from "./Form";
import { auth } from "@/app/action";
import { redirect } from "next/navigation";
export const metadata = {
  title: "Sign In",
  description: "Generated by create next app",
};
const page = async () => {
  const checkAuth = await auth();
  if (checkAuth.auth) {
    redirect("/dashboard");
  }
  return <Form />;
};

export default page;

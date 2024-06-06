"use client";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
const Dashboard = () => {
  const { data: session, status: sessionStatus } = useSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <h1 className="text-black">{session.user?.name}</h1>
      <h1>{session.user?.email}</h1>
    </div>
  );
};

export default Dashboard;

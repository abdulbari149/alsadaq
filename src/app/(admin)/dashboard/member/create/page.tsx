import { currentUser } from "@/functions/user";
import React from "react";
import { Metadata } from "next";
import CreateMember from "@/components/screens/CreateMember";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: 'Al Sadaq | Create Member',
}

const Page = async () => {
	const { user } = await currentUser();
  if (user.role !== 'admin') {
    return notFound();
  }
	return <CreateMember />;
};

export default Page;

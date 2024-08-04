import { currentUser } from "@/functions/user";
import CreateBoycottProduct from "@/components/screens/CreateBoycottProduct";
import React from "react";

const Page = async () => {
	const { user } = await currentUser();
	return <CreateBoycottProduct user={user} />;
};

export default Page;

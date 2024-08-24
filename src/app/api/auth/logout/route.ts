import authorizer from "@/server/middleware/authorizer";
import handleError from "@/utils/handle-error";
import { Roles } from "@prisma/client";
import { cookies } from "next/headers";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
	try {
		await authorizer(Roles.admin, Roles.member);

		cookies().delete("token");

		return NextResponse.json(
			{ message: "Logout successfully!", success: true },
			{ status: 200 }
		);
	} catch (error) {
		return handleError(error);
	}
}

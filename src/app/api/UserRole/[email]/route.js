import UserModel from "@/app/UserModel/UserModel";
import { NextResponse } from "next/server";
import ConnectMongoose from "../../../../../lib/ConnectMongoose/ConnectMongoose";

export const GET = async (request, { params }) => {
  try {
    await ConnectMongoose();
    const email = await params.email;
    const query = await { email: email };
    const findUser = await UserModel.findOne(query).select("userRole");
    return NextResponse.json(
      {
        data: findUser,
        success: true,
        message: "Single user find success",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: error, success: false, message: "There was a server error" },
      { status: 400 }
    );
  }
};

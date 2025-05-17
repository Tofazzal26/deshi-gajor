import ReviewModel from "@/app/ReviewModel/ReviewModel";
import ConnectMongoose from "../../../../lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await ConnectMongoose();
    const data = await request.json();
    const res = await ReviewModel.create(data);
    return NextResponse.json(
      { message: "Review data added successfully", success: true, data: res },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "There was a server error", success: false, data: error },
      { status: 500 }
    );
  }
};

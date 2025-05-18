import ReviewModel from "@/app/ReviewModel/ReviewModel";
import ConnectMongoose from "../../../../../lib/ConnectMongoose/ConnectMongoose";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const GET = async (request, { params }) => {
  try {
    await ConnectMongoose();
    const id = params?.id;
    const query = { _id: new ObjectId(id) };
    const res = await ReviewModel.findById(query);
    return NextResponse.json({
      message: "Review Get Success",
      status: 200,
      success: true,
      data: res,
    });
  } catch (error) {
    return NextResponse.json({
      message: "There was a server error",
      status: 500,
      success: false,
      data: error,
    });
  }
};

import ReviewModel from "@/app/ReviewModel/ReviewModel";
import ConnectMongoose from "../../../../../lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  try {
    await ConnectMongoose();
    const body = await req.json();
    const { review } = body;
    const { id } = params;
    if (!id || !review) {
      return NextResponse.json({
        message: "ID or review is missing",
        success: false,
        status: 400,
      });
    }
    const result = await ReviewModel.findByIdAndUpdate(
      id,
      { $push: { comment: { review } } },
      { new: true }
    );

    return NextResponse.json({
      message: "Comment Add Success",
      data: result,
      success: true,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "There was a server error",
      data: error.message,
      success: false,
      status: 500,
    });
  }
};

import ReviewModel from "@/app/ReviewModel/ReviewModel";
import ConnectMongoose from "../../../../lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectMongoose();
    const res = await ReviewModel.find();
    const totalCount = await ReviewModel.countDocuments();
    return NextResponse.json({
      message: "All Review Get Success",
      data: res,
      status: 200,
      success: true,
      totalReview: totalCount,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Data Not Get",
      data: error,
      status: 500,
      success: false,
    });
  }
};

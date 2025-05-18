import ReviewModel from "@/app/ReviewModel/ReviewModel";
import ConnectMongoose from "../../../../lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await ConnectMongoose();
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");
    const size = searchParams.get("size");
    const page = searchParams.get("page");
    let query = {};
    if (search) {
      const regex = new RegExp(`^${search}`, "i");
      query.company_name = { $regex: regex };
    }
    const sizeNumber = parseInt(size) || 10;
    const pageNumber = parseInt(page) || 1;
    const res = await ReviewModel.find(query)
      .skip(sizeNumber * (pageNumber - 1))
      .limit(sizeNumber);
    const totalCount = await ReviewModel.countDocuments(query);
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

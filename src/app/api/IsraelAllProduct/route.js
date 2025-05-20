import IsraelModel from "@/app/IsraelModel/IsraelModel";
import ConnectMongoose from "../../../../lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await ConnectMongoose();
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");
    let query = {};
    if (search) {
      const regex = new RegExp(`^${search}`, "i");
      query.owner = { $regex: regex };
    }
    const resp = await IsraelModel.find(query);
    return NextResponse.json({
      message: "All Israel Get Success",
      data: resp,
      status: 200,
      success: true,
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

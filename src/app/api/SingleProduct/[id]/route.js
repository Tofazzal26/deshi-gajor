import IsraelModel from "@/app/IsraelModel/IsraelModel";
import ConnectMongoose from "../../../../../lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
export const GET = async (request, { params }) => {
  try {
    await ConnectMongoose();
    const id = await params?.id;
    const query = { _id: new ObjectId(id) };
    const res = await IsraelModel.findById(query);
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

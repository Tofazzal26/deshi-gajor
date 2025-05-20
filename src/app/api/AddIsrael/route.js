import IsraelModel from "@/app/IsraelModel/IsraelModel";
import ConnectMongoose from "../../../../lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await ConnectMongoose();
    const data = await req.json();
    const result = await IsraelModel.create(data);
    return NextResponse.json(
      {
        message: "Israel data added successfully",
        success: true,
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "There was a server error", success: false, data: error },
      { status: 500 }
    );
  }
};

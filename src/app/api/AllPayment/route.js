import PaymentModel from "@/app/PaymentModel/PaymentModel";
import ConnectMongoose from "../../../../lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectMongoose();
    const res = await PaymentModel.find();
    return NextResponse.json({
      message: "All Payment get success",
      data: res,
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

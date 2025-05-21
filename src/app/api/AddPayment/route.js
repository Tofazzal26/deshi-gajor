import PaymentModel from "@/app/PaymentModel/PaymentModel";
import ConnectMongoose from "../../../../lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await ConnectMongoose();
    const data = await req.json();
    const result = await PaymentModel.create(data);
    return NextResponse.json(
      {
        message: "Payment data added successfully",
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

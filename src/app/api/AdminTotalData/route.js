import ReviewModel from "@/app/ReviewModel/ReviewModel";
import ConnectMongoose from "../../../../lib/ConnectMongoose/ConnectMongoose";
import IsraelModel from "@/app/IsraelModel/IsraelModel";
import UserModel from "@/app/UserModel/UserModel";
import PaymentModel from "@/app/PaymentModel/PaymentModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectMongoose();

    const totalReview = await ReviewModel.countDocuments();
    const totalProduct = await IsraelModel.countDocuments();
    const totalUser = await UserModel.countDocuments();
    const donateResult = await PaymentModel.aggregate([
      {
        $group: {
          _id: null,
          totalDonate: { $sum: "$donate" },
        },
      },
    ]);

    const totalDonate = donateResult[0]?.totalDonate || 0;

    return NextResponse.json({
      message: "Data Fetched Successfully",
      data: {
        totalReview,
        totalProduct,
        totalUser,
        totalDonate,
      },
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

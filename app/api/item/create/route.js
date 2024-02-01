import connectDB from "../../../utils/database";
import { NextResponse } from "next/server";
import { ItemModel } from "../../../utils/schemaModels";

export async function POST(request) {
  const reqBody = await request.json();

  try {
    await connectDB();
    await ItemModel.create(reqBody);
    return NextResponse.json({ message: "アイテム作成" });
  } catch (err) {
    return NextResponse.json({ message: "アイテム作成失敗" });
  }
}

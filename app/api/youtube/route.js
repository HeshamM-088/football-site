import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { url, method = "GET" } = await request.json();

    const response = await axios({
      url,
      method,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.response ? error.response.data : error.message,
      },
      { status: error.response ? error.response.status : 500 }
    );
  }
};

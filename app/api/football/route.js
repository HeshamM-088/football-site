import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const {
      url,
      method = "GET",
      headers = { "X-Auth-Token": "e191e07f2acf423296dd397ab4d29910" },
      data = {},
    } = await request.json();

    const response = await axios({
      url,
      method,
      headers,
      data,
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

import { NextResponse } from "next/server"; // This is necessary 
import { getAllPhotos } from "@/lib/image-data";


export async function GET() 
{
    const data = await getAllPhotos();
    return NextResponse.json(data)
}
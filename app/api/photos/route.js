import { NextResponse } from "next/server"; // This is necessary 
import { getAllPhotos } from "@/lib/image-data";


export  function GET() 
{
    const data =  getAllPhotos();
    return NextResponse.json(data)
}
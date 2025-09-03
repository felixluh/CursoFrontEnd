// duas rotas de navegação -> Get/Post

import { NextResponse } from "next/server";
import TodoSchema from "../../../models/todo";
import connectMongo from "../../../util/mongodb";

export async function GET() {
    //tratamento de erro
    try {
        await connectMongo();
        const todos = await TodoSchema.find({});
        return NextResponse.json({success: true, data: todos});

    } catch (error) { 
      return NextResponse.json({success: false}, {status: 500});
    }

}


export async function POST(req) {
    try {
        await connectMongo();
        const data = await req.json(); //convertendo os dados do formulário
        const todo = await TodoSchema.create(data);
        return NextResponse.json({success: true, data: todo});
    } catch (error) {
        return NextResponse.json({success: false},{status:400});
    }
}
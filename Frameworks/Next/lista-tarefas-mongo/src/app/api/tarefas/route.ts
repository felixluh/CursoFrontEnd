//criar as rotas que não precisa de id

import { createTarefa, getAllTarefas } from "@/controllers/tarefa.controler";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const tarefas = await getAllTarefas();
        //tratta a respota obtida com a conexão como MOngoDB
        return NextResponse.json({ sucess: true, data: tarefas });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error:`Falha ao buscar as tarefas: ${error}`
        }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();//verifica se o coneudo esta em json
        const newTarefa = await createTarefa(data);
        return NextResponse.json({ success: true, data: newTarefa }, { status: 201 });
    } catch (error) {
        return NextResponse.json({success: false, error:`Falha ao criar as tarefas: ${error}`}, {status: 400})

    }
}
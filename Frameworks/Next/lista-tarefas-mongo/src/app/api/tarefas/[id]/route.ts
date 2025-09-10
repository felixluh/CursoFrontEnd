//put e delete que usam id para fazer a requisições

import { deleteTarefa, updateTarefa } from "@/controllers/tarefa.controler";
import { error } from "console";
import { Params } from "next/dist/server/request/params";
import { NextRequest, NextResponse } from "next/server";

interface Parametros{
    id: string
}

export async function PUT(req: NextRequest, {params}:{params:Parametros}) {
    try {
        const {id} = params;
        const data = await req.json();
        const TarefaAtualizada = await updateTarefa(id, data);
        if(!TarefaAtualizada) {
            return NextResponse.json({success: false, error: "Not Found"}, {status:404});
        } 
        return NextResponse.json({success: true, data: TarefaAtualizada})
    } catch (error) {
        return NextResponse.json({
            success:true,
            error: `Erro ao atualizar Tarefa: ${error}`
        }, {status: 400});0
    }
}

export async function DELETE(req: NextRequest, {params}:{params: Parametros}) {
    try {
        const {id} = params;
        const resultado = await deleteTarefa(id);

        if(!resultado){
            return NextResponse.json({success: false, error: "Not Found"},{status:404});
        }
        return NextResponse.json({succes: true, data:{}});
    } catch (error) {
        return NextResponse.json({
            success:true, 
            error: `Erro ao Deletar Tarefa: ${error}`
        }, {status: 400});
    }
}
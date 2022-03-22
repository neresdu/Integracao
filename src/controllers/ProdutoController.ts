import { Request, Response } from "express";
import { Produto } from "../models/Produto";

const produtos : Produto[] = [];

export class ProdutoController{
    create(request: Request, response: Response) {

        produtos.push(request.body);

        response.
        status(201).
        json({ message: "Produto cadastrado", data : produtos});
    }

    list(){

    }

    update(){

    }

    delete(){

    }
}
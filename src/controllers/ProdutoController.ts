import { request, Request, Response } from "express";
import { ProdutoRepository } from "../repositories/ProdutoRepository";

const produtoRepository = new ProdutoRepository();

export class ProdutoController{
    create(request: Request, response: Response) {

       const produtos = produtoRepository.create(request.body)

        response.
        status(201).
        json({ message: "Produto cadastrado", data : produtos});
    }

    list(request: Request, response: Response){
        response.
        status(200).
        json({message: "Listagem de produtos", data : produtoRepository.list()});
        
    }

    update(request: Request, response: Response){
        response.
        status(201).
        json({message: "Produto alterado", data : produtoRepository.update(request.body)});

    }

    delete(request: Request, response: Response){
        response.
        status(201).
        json({message: "Produto alterado", data : produtoRepository.delete(request.params.nome)});
    }
}
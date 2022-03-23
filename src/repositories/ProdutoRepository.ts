import { Produto } from "../models/Produto";



const produtos : Produto[] = [];

export class ProdutoRepository{

    create(produto: Produto): Produto[] {
        produtos.push(produto);
        return produtos;
    }   
    list(): Produto[]{
        return produtos;
        
    }
    delete(nomeProduto: String): Produto[] {
        console.log(nomeProduto);
        const index = produtos.findIndex((produto) => produto.nome === nomeProduto);
        produtos.splice(index,1);
        return produtos;
        
    }   
    update(produtoAlterado: Produto): Produto[] {
        const index = produtos.findIndex((produto) => produto.nome === produtoAlterado.nome);
        produtos[index] = produtoAlterado;
        return produtos;
        
    }   

}
import {Request, Response} from 'express';
import Produto from '../models/produto';


export const getProducts = async (req: Request, res: Response) => {
    const listProdutos = await Produto.findAll();

    res.json(listProdutos);
}

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);

    if(produto) {
        res.json(produto)
    } else {
        res.status(404).json({
            msg: `Não existe produto com este id ${id}`
        })
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);

    if(!produto){
        res.status(404).json({
            msg: `Produto não existe com este id ${id}`
        })
    }else {
        await produto.destroy();
        res.json({
            msg: 'Produto eliminado com exito'
        })
    }
    
}

export const postProduct = async (req: Request, res: Response) => {
    const {body } = req;

    try {
        await Produto.create(body);  
        res.json({
            msg: `Produto adicionado com exito`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Erro ao adicionar item`
        })
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const {body } = req;
    const { id } = req.params;

    try {

        const produto = await Produto.findByPk(id);

        if(produto) {
            await produto.update(body);
            res.json({
                msg: `Produto foi atualizado`
            })
        }else {
            res.status(404).json({
                msg: `Não existe o produto com este id ${id}`
            })
        } 
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Erro ao adicionar item`
        }) 
    }
}


"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.postProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const produto_1 = __importDefault(require("../models/produto"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProdutos = yield produto_1.default.findAll();
    res.json(listProdutos);
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const produto = yield produto_1.default.findByPk(id);
    if (produto) {
        res.json(produto);
    }
    else {
        res.status(404).json({
            msg: `Não existe produto com este id ${id}`
        });
    }
});
exports.getProduct = getProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const produto = yield produto_1.default.findByPk(id);
    if (!produto) {
        res.status(404).json({
            msg: `Produto não existe com este id ${id}`
        });
    }
    else {
        yield produto.destroy();
        res.json({
            msg: 'Produto eliminado com exito'
        });
    }
});
exports.deleteProduct = deleteProduct;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield produto_1.default.create(body);
        res.json({
            msg: `Produto adicionado com exito`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Erro ao adicionar item`
        });
    }
});
exports.postProduct = postProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const produto = yield produto_1.default.findByPk(id);
        if (produto) {
            yield produto.update(body);
            res.json({
                msg: `Produto foi atualizado`
            });
        }
        else {
            res.status(404).json({
                msg: `Não existe o produto com este id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Erro ao adicionar item`
        });
    }
});
exports.updateProduct = updateProduct;

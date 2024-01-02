
import express, { Application, Request, Response} from 'express';
import cors from 'cors';
import routesProduto from '../routes/produto';
import db from '../db/connection';


class Server {
    private app: Application;
    private port: string;

constructor() {
    console.log(process.env.PORT);
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routers();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Aplicação correndo na porta ${this.port}`)
    })
}   

    routers(){
        this.app.get('/', (req: Request, res: Response) => {
                res.json({
                    msg: 'API Funcionando 2'
                })
            })
            this.app.use('/api/produtos', routesProduto);
    }


    midlewares() {
        this.app.use(express.json());

        this.app.use(cors());

    }


    async dbConnect(){
        try {
            db.authenticate();
            console.log('Base de dados conectada');
        } catch (error) {
            console.log(error);
            console.log('Erro ao conectar a base de dados connection.ts');
        }
    } 
}
export default Server;
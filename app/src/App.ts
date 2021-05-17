import 'reflect-metadata'
import './container'
import express, { Express } from 'express'
import { connection } from './typeorm/DatabaseConnection'
import { CreateUserController } from './useCase/CreateUserController'

class App {
    public execute(): Express {
        const app = express()

        app.use(express.json())
        
        connection.use(app)
        
        const createUserController = new CreateUserController()

        app.post('/user/create', (req, res) => {
            createUserController.handle(req, res)
        })

        return app
    }
}

const app = new App()

export { app }
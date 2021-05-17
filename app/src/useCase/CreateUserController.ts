import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { CreateUserService } from './CreateUserService';

class CreateUserController {
    public async handle(req: Request, res: Response): Promise<Response> {
        // const {name, email} = req.body
        const name = "Tiago Rizzo"
        const email = "tiagorizzo@gmail.com"

        const createUserService = container.resolve(CreateUserService)

        await createUserService.execute(name, email)

        return res.status(201).json({ status: "ok" });
    }
}

export { CreateUserController }
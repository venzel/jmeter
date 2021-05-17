import { Express } from 'express'
import { createConnection } from 'typeorm'

class DatabaseConnection {
    public async use(app: Express): Promise<void> {
        await createConnection()
            .then(() => {
                app.emit('connected')
            })
            .catch((e) => {
                console.log(e)
                console.log('Database connection error!')
            })
    }
}

const connection = new DatabaseConnection()

export { connection }
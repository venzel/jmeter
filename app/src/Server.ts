import { app } from './App'

class Server {
    public static start(): void {
        const appExecuted = app.execute()

        appExecuted.on('connected', () => {
            console.log('Connected in databases!')

            const server_port = process.env.SERVER_PORT || '3005'

            appExecuted.listen(server_port, () => {
                console.log(`Server listen in port ${server_port}!`)
            })
        })
    }
}

Server.start()
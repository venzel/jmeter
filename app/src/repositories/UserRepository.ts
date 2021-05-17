import { v4 as uuid } from 'uuid'
import { getRepository, Repository } from 'typeorm'
import { User } from '../entities/User'

class UserRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository<User>(User)
    }

    public async save(name: string, email: string): Promise<void> {
        const data = this.repository.create({ id: uuid(), name, email})

        await this.repository.save(data)
    }
}

export { UserRepository }
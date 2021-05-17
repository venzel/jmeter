import { inject, injectable } from 'tsyringe'
import { UserRepository } from '../repositories/UserRepository'

@injectable()
class CreateUserService {
    constructor(
        @inject('UserRepository') private userRepository: UserRepository
    ) {}

    public async execute(name: string, email: string): Promise<void> {
        await this.userRepository.save(name, email)
    }
}

export { CreateUserService }
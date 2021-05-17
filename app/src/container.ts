import { container } from 'tsyringe'
import { UserRepository } from 'repositories/UserRepository'

container.registerSingleton<UserRepository>('UserRepository', UserRepository)
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from 'typeorm'

@Entity('users')
class User {
    @PrimaryGeneratedColumn('rowid')
    public id: string

    @Column()
    public name: string

    @Column()
    public email: string

    @CreateDateColumn()
    public created_at: Date
}

export { User }
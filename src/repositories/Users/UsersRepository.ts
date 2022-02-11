import { Service } from "typedi";
import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import { User } from "../../entities/User.schema";
import { IUsersRepository } from "./IUsersRepository";

const buildUsersRepository = () => getCustomRepository(UsersRepository);

@Service({ factory: buildUsersRepository })
@EntityRepository(User)
export class UsersRepository extends Repository<User> implements IUsersRepository {
    async getUsers(): Promise<User[]> {
        const users = await this.find();
        return users;
    }

    async findById(id: string): Promise<User> {
        const user = await this.findOne(id);
        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.findOne({ email });
        return user;
    }

    async saveUser(user: User): Promise<void> {
        await this.save(user);
    }
}
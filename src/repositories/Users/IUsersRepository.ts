import { User } from "../../entities/User.schema";

export interface IUsersRepository {
    getUsers(): Promise<User[]>;
    findById(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    create(args: Omit<User, "id" | "created_at" | "updated_at">): User;
    saveUser(user: User): Promise<void>;
}
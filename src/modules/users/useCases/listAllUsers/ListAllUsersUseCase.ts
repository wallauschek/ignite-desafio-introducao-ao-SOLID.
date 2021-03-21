import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("You need to be an administrator to list all users.");
    }
    if (!user.admin) {
      throw new Error("You need to be an administrator to list all users.");
    }

    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };

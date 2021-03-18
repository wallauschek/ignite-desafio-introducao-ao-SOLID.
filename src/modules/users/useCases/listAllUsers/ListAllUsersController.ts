import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequest {
  user_id: string;
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    if (Array.isArray(user_id)) {
      throw Error("user_id must be a string");
    }
    try {
      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.json(users);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };

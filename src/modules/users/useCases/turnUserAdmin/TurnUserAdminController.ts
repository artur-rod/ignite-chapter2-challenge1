import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      const turnUserAdmin = this.turnUserAdminUseCase.execute({
        user_id: String(user_id),
      });

      return response.json(turnUserAdmin);
    } catch (err) {
      return response.status(404).json({ error: err.message || err });
    }
  }
}

export { TurnUserAdminController };

import { Response, Request } from 'express';
import { container } from 'tsyringe';
import UpdatedUserAvatarService from '@modules/users/services/UpdatedUserAvatarService';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updatedUserAvatar = container.resolve(UpdatedUserAvatarService);

    const user = await updatedUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  }
}

import dbConnect from '~/server/utils/database';
import { errorMessage } from '~/lib';
import { authController } from '~/server/controllers';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'POST':
      await authController.register(req, res);
      break;

    default:
      return res.status(500).json({
        message: errorMessage.INTERNAL_SERVER_ERROR,
      });
  }
}

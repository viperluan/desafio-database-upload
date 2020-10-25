import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const pathLocation = path.resolve(__dirname, '..', '..', './tmp');

export default {
  directory: pathLocation,
  storage: multer.diskStorage({
    destination: pathLocation,
    filename(_, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};

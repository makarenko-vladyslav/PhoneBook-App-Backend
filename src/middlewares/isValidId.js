import { isValidObjectId } from 'mongoose';
import createError from '../utils/createError.js';

export const isValidId = (req, res, next) => {
  const { contactId } = req.params;

  if (!isValidObjectId(contactId)) {
    return next(createError(404, 'Not found').json());
  }

  next();
};

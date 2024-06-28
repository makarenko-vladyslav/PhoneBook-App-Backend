import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { contactId } = req.params;

  if (!contactId || !isValidObjectId(contactId)) {
    throw createHttpError(400, 'Not valid ID');
  }

  next();
};

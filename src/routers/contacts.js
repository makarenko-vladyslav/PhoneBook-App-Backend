import { Router } from 'express';

import { authenticate } from '../middlewares/authenticate.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';

import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';

import {
  getContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';

import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/index.js';

const router = Router();

router.use(authenticate);

router.get('/', checkRoles(ROLES.ADMIN), ctrlWrapper(getContactsController));

router.get(
  '/:contactId',
  checkRoles(ROLES.ADMIN, ROLES.USER),
  isValidId,
  ctrlWrapper(getContactByIdController),
);

router.post(
  '/',
  checkRoles(ROLES.ADMIN, ROLES.USER),
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.patch(
  '/:contactId',
  checkRoles(ROLES.ADMIN, ROLES.USER),
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

router.delete(
  '/:contactId',
  checkRoles(ROLES.ADMIN, ROLES.USER),
  isValidId,
  ctrlWrapper(deleteContactController),
);

export default router;

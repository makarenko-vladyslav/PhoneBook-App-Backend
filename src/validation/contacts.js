import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should have at least {#limit} characters',
    'string.max': 'Name should have at most {#limit} characters',
    'any.required': 'Name is required',
  }),
  phoneNumber: Joi.string()
    .pattern(/^(\+380\d{9})$/)
    .required()
    .messages({
      'string.pattern.base':
        'Phone number should start with +380 and have 12 digits',
      'any.required': 'Phone number is required',
    }),
  email: Joi.string().email().messages({
    'string.email': 'Email should be in format mymail@my.com',
  }),
  isFavorite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should have at least {#limit} characters',
    'string.max': 'Name should have at most {#limit} characters',
  }),
  phoneNumber: Joi.string()
    .pattern(/^(\+380\d{9})$/)
    .messages({
      'string.pattern.base':
        'Phone number should start with +380 and have 12 digits',
    }),
  email: Joi.string().email().messages({
    'string.email': 'Email should be in format mymail@my.com',
  }),
  isFavorite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
})
  .min(1)
  .messages({
    'object.min': 'At least one field is required for update',
  });

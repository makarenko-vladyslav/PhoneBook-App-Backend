import mongoose, { Schema } from 'mongoose';

const ContactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      required: false,
      default: 'personal',
    },
    userId: { type: String, required: true, ref: 'users' },
    photo: { type: String, required: false },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ContactsCollection = mongoose.model('contacts', ContactsSchema);

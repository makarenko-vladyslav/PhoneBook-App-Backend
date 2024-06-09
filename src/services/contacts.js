import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  return await ContactsCollection.create(payload);
};

export const patchContact = async (contactId, payload = {}) => {
  const updateOptions = { new: true, includeResultMetadata: true };

  const rawResult = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    updateOptions,
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upsert),
  };
};

export const deleteContact = async (contactId) => {
  return await ContactsCollection.findByIdAndDelete({
    _id: contactId,
  });
};

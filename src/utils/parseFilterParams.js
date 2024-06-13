const parseBoolean = (value) => {
  const isString = typeof value === 'string';
  if (!isString) return;

  const isFavorite = (value) => (value.toLowerCase() === 'true' ? true : false);

  if (isFavorite(value)) return value;
};

const parseType = (value) => {
  const isString = typeof value === 'string';
  if (!isString) return;
  const type = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

  if (type(value)) return value;
};

export const parseFilterParams = (query) => {
  const { isFavorite, contactType } = query;

  const parsedFavorite = parseBoolean(isFavorite);
  const parsedType = parseType(contactType);

  return {
    isFavorite: parsedFavorite,
    contactType: parsedType,
  };
};

export const getSearchParam = (location, name) => {
  if (!location || !location.search) {
    return null;
  }
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(name);
};
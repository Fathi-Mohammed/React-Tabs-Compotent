export const getSearchParams = () => {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams;
};

export const getInitalActiveTab = (initialIndex) => {
  const searchParams = getSearchParams();
  const initialIndexQuery = searchParams.get("activeTab");

  return !!initialIndexQuery
    ? parseInt(searchParams.get("activeTab"))
    : initialIndex;
};
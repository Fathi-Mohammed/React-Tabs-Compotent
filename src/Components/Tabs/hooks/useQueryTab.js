import { useEffect } from "react";
import { getSearchParams } from "../utils/searchParamsInit";

export const useQueryTab = (activeTab) => {
  useEffect(() => {
    if (!getSearchParams().get("activeTab") && +activeTab >= 0)
      setActiveTabQuery(activeTab);
  }, [activeTab]);

  const setActiveTabQuery = (activeTab) => {
    const searchParams = getSearchParams();
    const history = window.history;

    searchParams.set("activeTab", activeTab);
    history.pushState(null, null, `?${searchParams}`);
  };

  return { setActiveTabQuery };
};

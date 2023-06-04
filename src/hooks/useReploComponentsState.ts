import { useEffect } from "react";
import { useStateContext } from "../../components/ReploGlobalState";
import {useRefreshReploComponentsState} from "./useRefreshReploComponentsState";

export function useReploComponentsState() {
  const { state: { components: data}} = useStateContext();
  const updateData = useRefreshReploComponentsState();

  useEffect(() => {
    updateData();
  }, [updateData]);

  return [data, updateData] as const;
}
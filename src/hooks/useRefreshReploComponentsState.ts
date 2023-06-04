import {UpdateBackendDataAction, useStateContext} from "../../components/ReploGlobalState";
import { useCallback } from "react";

const fetchReploComponents = () => fetch("/api/component").then((response) => response.json());

export function useRefreshReploComponentsState() {
  const { dispatch} = useStateContext();

  return useCallback((components?: UpdateBackendDataAction['payload']) => {
    if (components) {
      dispatch({ type: 'UPDATE_BACKEND_DATA', payload: components })
      return;
    }

    fetchReploComponents().then(fetchedComponents => {
      dispatch({ type: 'UPDATE_BACKEND_DATA', payload: fetchedComponents })
    })
  }, [dispatch]);
}
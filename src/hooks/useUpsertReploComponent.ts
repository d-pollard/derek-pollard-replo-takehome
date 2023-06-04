import {useRefreshReploComponentsState} from "./useRefreshReploComponentsState";
import { useCallback } from "react";
import { Component } from "../types";

const upsertFetchReploComponent = (shouldUpdate: boolean, data: Record<string, string>) => {
  return fetch("/api/component", {
    method: shouldUpdate ? 'PUT' : 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
};


export function useUpsertReploComponent() {
  const refreshState = useRefreshReploComponentsState();

  return useCallback(<T extends Component['type']>(val: string, type: T, id?: Component['id']) => {
    let data: Record<string, string> = { type };

    if (id) {
      data.id = id;
    }

    switch (type) {
      case "text":
        data.text = val;
        break;
      case "image":
        data.src = val;
    }

    return upsertFetchReploComponent(!!id, data).then(() => {
      refreshState();
    })
  }, [refreshState]);
}
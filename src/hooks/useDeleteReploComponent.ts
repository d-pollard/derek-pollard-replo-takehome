import { Component } from "../types";
import { useCallback } from "react";
import { useRefreshReploComponentsState } from "./useRefreshReploComponentsState";

const deleteReploComponent = (id: Component['id']) => {
  return fetch("/api/component", {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id })
  })
};

export function useDeleteReploComponent(id: Component['id']) {
  const updateData = useRefreshReploComponentsState();
  return useCallback(() => {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }
    return deleteReploComponent(id).then(() => {
      updateData();
    });
  }, [id, updateData]);
}
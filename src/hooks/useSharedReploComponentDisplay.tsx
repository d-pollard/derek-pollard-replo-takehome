import React, {useMemo, useState} from "react";
import {ReploComponentHeader} from "../../components/ReploComponentHeader";
import {Component} from "../types";
import {useDeleteReploComponent} from "./useDeleteReploComponent";
import {ReploComponentForm} from "../../components/forms/ReploComponentForm";

interface Props {
  title: string;
  component: Component;
}

export function useSharedReploComponentDisplay({ component, title } : Props) {
  const [isEditing, setIsEditing] = useState(false);
  const onDeleteFn = useDeleteReploComponent(component.id);

  const header = useMemo(() => {
    return (
      <ReploComponentHeader
        title={title}
        onEdit={() => setIsEditing(editing => !editing)}
        onDelete={onDeleteFn}
      />
    )
  }, [onDeleteFn, title]);

  const footer = useMemo(() => {
    if (!isEditing) return null;

    const currentValue = component.type === 'text' ? component.text : component.src;

    return (
      <div className="pt-3">
        <ReploComponentForm
          type={component.type}
          id={component.id}
          currentValue={currentValue}
          onFinish={() => setIsEditing(false)}
        />
      </div>
    )
  }, [component, isEditing]);

  return {header, footer}
}
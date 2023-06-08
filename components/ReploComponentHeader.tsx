import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/20/solid";
import React from "react";
import {useDeleteReploComponent} from "../src/hooks/useDeleteReploComponent";

interface Props {
  title: string;
  onEdit: () => void;
  onDelete: () => void;
}

export function ReploComponentHeader({ title, onEdit, onDelete }: Props) {
  return (
    <div className="flex justify-between">
      <h1>{title}</h1>

      <div className="space-x-1">
        <button onClick={onDelete} className="h-5">
          <TrashIcon className="h-5" />
        </button>

        <button onClick={onEdit} type="button">
          <PencilSquareIcon className="h-5" />
        </button>
      </div>
    </div>
  )
}
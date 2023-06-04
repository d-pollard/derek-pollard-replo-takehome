import { PencilSquareIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  title: string;
  onEdit: () => void;
}

export function ReploComponentHeader({ title, onEdit }: Props) {
  return (
    <div className="flex justify-between">
      <h1>{title}</h1>

      <button onClick={onEdit} type="button">
        <PencilSquareIcon className="h-5" />
      </button>
    </div>
  )
}
import { Button } from "./Button";
import { useCallback, useState } from "react";
import { Component } from "../src/types";
import { ReploComponentForm } from "./forms/ReploComponentForm";

export function ComponentPicker() {
  const [componentToAdd, setComponentToAdd] = useState<Component['type']>();

  const changeComponentToAdd = useCallback((type?: Component['type']) => () => {
    setComponentToAdd(currentType => {
      return currentType === type ? undefined : type;
    });
  }, []);

  return (
    <div className="absolute top-0 left-0 p-2 space-y-5">
      <div className="space-x-3">
        <Button onClick={changeComponentToAdd('image')}>Add Image</Button>
        <Button onClick={changeComponentToAdd('text')}>Add Text</Button>
      </div>

      <div>
        {componentToAdd && <ReploComponentForm type={componentToAdd} onFinish={changeComponentToAdd()} />}
      </div>
    </div>
  )
}

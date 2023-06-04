import { Component, ImageReploComponent, TextReploComponent } from "../../src/types";
import {useCallback, useState} from "react";
import {Button} from "../Button";
import {useUpsertReploComponent} from "../../src/hooks/useUpsertReploComponent";

interface Props<T extends Component> {
  type: T['type'];
  id?: Component['id'];
  currentValue?: TextReploComponent['text'] | ImageReploComponent['src'];
  onFinish?: () => void;
}

export function ReploComponentForm<T extends Component>({ id, type, currentValue = '', onFinish } : Props<T>) {
 const [val, setValue] = useState(currentValue);
 const placeholder = type === 'text' ? 'Some text here...' : 'http://placekitten.com/200/300';
 const upsertComponent = useUpsertReploComponent();

 const onSave = useCallback(() => {
   upsertComponent(val, type, id).then(() => {
     onFinish && onFinish();
   });
 }, [id, onFinish, type, upsertComponent, val]);

 return (
   <div className="space-y-3">
     <div className="relative">
       <label
         htmlFor={type}
         className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
       >
         {type}
       </label>
       <input
         onKeyDown={e => e.code === 'Enter' ? onSave() : null}
         type="text"
         name={type}
         id={type}
         value={val}
         onChange={e => setValue(e.target.value)}
         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
         placeholder={placeholder}
       />
     </div>
     <Button onClick={onSave} type="success">
       Save
     </Button>
   </div>
 )
}
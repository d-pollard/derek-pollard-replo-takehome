import React, {useState} from "react";
import Card from "./Card";
import { TextReploComponent } from "../src/types";
import { ReploComponentHeader } from "./ReploComponentHeader";
import { ReploComponentForm } from "./forms/ReploComponentForm";

const Text: React.FC<{ component: TextReploComponent }> = ({ component }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Card>
      <ReploComponentHeader title="Text" onEdit={() => setIsEditing(editing => !editing)} />
      <p>{component.text}</p>

      {isEditing && (
        <div>
          <ReploComponentForm
            type={component.type}
            id={component.id}
            currentValue={component.text}
            onFinish={() => setIsEditing(false)}
          />
        </div>
      )}
    </Card>
  );
};

export default Text;
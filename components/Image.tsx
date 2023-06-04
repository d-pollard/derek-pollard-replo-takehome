import React, {useState} from "react";
import Card from "./Card";
import { ImageReploComponent } from "../src/types";
import { ReploComponentForm } from "./forms/ReploComponentForm";
import { ReploComponentHeader } from "./ReploComponentHeader";

const Image: React.FC<{ component: ImageReploComponent }> = ({ component }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Card>
      <ReploComponentHeader title="Image" onEdit={() => setIsEditing(editing => !editing)} />

      <img
        src={component.src}
        alt="Image"
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          objectPosition: "center center",
        }}
      />

      {isEditing && (
        <div>
          <ReploComponentForm
            type={component.type}
            id={component.id}
            currentValue={component.src}
            onFinish={() => setIsEditing(false)}
          />
        </div>
      )}
    </Card>
  );
};

export default Image;
import React, {useCallback, useEffect, useState} from "react";
import Card from "./Card";
import { ImageReploComponent } from "../src/types";
import { ReploComponentForm } from "./forms/ReploComponentForm";
import { ReploComponentHeader } from "./ReploComponentHeader";

const Image: React.FC<{ component: ImageReploComponent }> = ({ component }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [imageSrc, setImageSrc] = useState(component.src);

  useEffect(() => {
    setImageSrc(component.src)
  }, [component.src]);

  const onImageFailedLoading = useCallback(() => {
    setImageSrc('https://placehold.co/200x300?text=Image+Error')
  }, []);

  return (
    <Card>
      <ReploComponentHeader title="Image" onEdit={() => setIsEditing(editing => !editing)} />

      <img
        onError={onImageFailedLoading}
        src={imageSrc}
        alt="Image"
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          objectPosition: "center center",
        }}
      />

      {isEditing && (
        <div className="pt-3">
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
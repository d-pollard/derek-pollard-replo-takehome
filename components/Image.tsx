import React, { useCallback, useEffect, useRef, useState } from "react";
import Card from "./Card";
import { ImageReploComponent } from "../src/types";
import { useSharedReploComponentDisplay } from "../src/hooks/useSharedReploComponentDisplay";

const Image: React.FC<{ component: ImageReploComponent }> = ({ component }) => {
  const lastFailedRef = useRef('');
  const [imageSrc, setImageSrc] = useState(component.src);
  const { header, footer } = useSharedReploComponentDisplay({ title: 'Image', component });

  useEffect(() => {
    if (lastFailedRef.current === component.src) return;
    setImageSrc(component.src);
  }, [component.src]);

  const onImageFailedLoading = useCallback(() => {
    lastFailedRef.current = component.src;
    setImageSrc('https://placehold.co/200x300?text=Image+Error')
  }, [component.src]);

  return (
    <Card>
      {header}

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

      {footer}
    </Card>
  );
};

export default Image;
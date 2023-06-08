import React from "react";
import Card from "./Card";
import { TextReploComponent } from "../src/types";
import {useSharedReploComponentDisplay} from "../src/hooks/useSharedReploComponentDisplay";

const Text: React.FC<{ component: TextReploComponent }> = ({ component }) => {
  const { header, footer } = useSharedReploComponentDisplay({component, title: 'Text'});

  return (
    <Card>
      {header}

      <p>{component.text}</p>

      {footer}
    </Card>
  );
};

export default Text;
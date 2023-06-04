import type { NextPage } from "next";
import React from "react";
import Text from "../components/Text";
import Image from "../components/Image";
import { ComponentPicker } from "../components/ComponentPicker";
import { useReploComponentsState } from "../src/hooks/useReploComponentsState";

const Home: NextPage = () => {
  const [data] = useReploComponentsState()

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ComponentPicker />
      <div className="pt-10 md:pt-0">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            padding: "12px",
            width: "400px",
            fontFamily: "Roboto, sans-serif",
            margin: "0 auto",
          }}
        >
          {data.map((component) => {
            if (component.type === "text") {
              return <Text key={component.id} component={component} />;
            }
            if (component.type === "image") {
              return <Image key={component.id} component={component} />;
            }

            return null;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;

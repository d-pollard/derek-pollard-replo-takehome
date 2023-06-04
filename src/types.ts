export interface ReploComponent {
  id: string;
}

export interface TextReploComponent extends ReploComponent {
  type: "text";
  text: string;
}

export interface ImageReploComponent extends ReploComponent {
  type: "image";
  src: string;
}

export type Component = TextReploComponent | ImageReploComponent;

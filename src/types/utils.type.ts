import { ImageProps } from "next/image";

export type TabItem = {
  id: string;
  value: string;
  title: string;
  products: Array<
    {
      id: string;
    } & Record<
      "boycott" | "alternate",
      { name: string; image: ImageProps["src"] }
    >
  >;
};
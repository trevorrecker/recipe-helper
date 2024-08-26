"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Loading = ({ children }: Props) => {
  return <div>Loading...</div>;
};

export default Loading;

"use client";

type Props = {
  children: React.ReactNode;
};

function ClientSide({ children }: Props) {
  return <>{children}</>;
}

export default ClientSide;

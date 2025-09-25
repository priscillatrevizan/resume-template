import React from "react";
import { useResume } from "../hooks/useResume";

export default function ResumeContainer({ children }: { children?: React.ReactNode }) {
  useResume(); // mantém o hook chamado para garantir contexto, valor não usado aqui intencionalmente

  return <div id="resume-content">{children}</div>;
}

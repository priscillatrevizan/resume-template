import React from "react";
import { useResume } from "../hooks/useResume";
import styles from "./ResumeContainer.module.css";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

export default function ResumeContainer({ children, className, ...props }: Props) {
  useResume(); // mantém o hook chamado para garantir contexto, valor não usado aqui intencionalmente

  const combined = [styles.container, className].filter(Boolean).join(" ");

  return (
    <div {...props} className={combined}>
      {children}
    </div>
  );
}

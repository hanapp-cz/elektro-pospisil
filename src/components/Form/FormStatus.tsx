import * as React from "react";

import { cn } from "@/utils/cn";

type TStatus = "idle" | "success" | "error";

type TProps = NoChildren & {
  status: TStatus;
};

export const FormStatus: React.FC<TProps> = ({ status }) => {
  if (status === "idle") {
    return null;
  }

  const isSuccess = status === "success";

  return (
    <div className="font-medium">
      <p className={cn(isSuccess ? "text-secondary" : "text-red-600")}>
        {isSuccess && "Zpráva byla úspěšně odeslána."}
        {!isSuccess && "Chyba při odesílání zprávy. Zkuste to prosím znovu."}
      </p>
    </div>
  );
};

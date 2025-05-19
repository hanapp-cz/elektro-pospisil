"use client";

import * as React from "react";
import { useFormStatus } from "react-dom";

import { Form } from "radix-ui";

import { getButtonStyles } from "../ButtonLink";

type TProps = NoChildren;

export const SubmitButton: React.FC<TProps> = () => {
  const status = useFormStatus();

  return (
    <Form.Submit asChild>
      <button
        type="submit"
        className={getButtonStyles(
          "py-3 px-8 text-sm min-w-36 justify-center self-start"
        )}
        disabled={status.pending}
      >
        {status.pending ? "Odesílání..." : "Odeslat"}
      </button>
    </Form.Submit>
  );
};

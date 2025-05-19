"use client";

import * as React from "react";

import { Form } from "radix-ui";

import { FieldError } from "./Form/FieldError";
import { FormField } from "./Form/FormField";
import { FormStatus } from "./Form/FormStatus";
import { SubmitButton } from "./Form/SubmitButton";

type TStatus = PropsOf<typeof FormStatus>["status"];
type TProps = NoChildren;

export const ContactForm: React.FC<TProps> = () => {
  const refForm = React.useRef<HTMLFormElement>(null);
  const [status, setStatus] = React.useState<TStatus>("idle");

  const handleSubmit = async (formData: FormData) => {
    if (status !== "idle") {
      setStatus("idle");
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    const result = await response.json();
    const isSuccess = result.success;

    setStatus(isSuccess ? "success" : "error");

    if (isSuccess) {
      refForm.current?.reset();
    }
  };

  const startAgain = () => {
    if (status !== "success") return;
    setStatus("idle");
  };

  return (
    <Form.Root
      ref={refForm}
      onFocus={startAgain}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(new FormData(e.currentTarget));
      }}
      className="flex flex-col gap-y-4"
    >
      <div className="flex flex-wrap gap-4 [&>*]:flex-1">
        <FormField fieldName="firstName" label="Jméno" />
        <FormField fieldName="lastName" label="Příjmení" />
      </div>

      <FormField fieldName="email" label="E-mail" type="email" isRequired>
        <FieldError match="valueMissing">Zadejte váš e-mail.</FieldError>
        <FieldError match="typeMismatch">
          E-mail není vyplněný správně.
        </FieldError>
      </FormField>

      <FormField
        fieldName="message"
        minLength={10}
        label="Zpráva"
        type="textarea"
        isRequired
      >
        <FieldError match="valueMissing">Napište nám zprávu.</FieldError>
        <FieldError match="tooShort">
          Zpráva musí mít aspoň 10 znaků.
        </FieldError>
      </FormField>

      <div className="ml-1 sm:ml-0 flex flex-col sm:flex-row gap-4 sm:items-center">
        <SubmitButton />
        <FormStatus status={status} />
      </div>
    </Form.Root>
  );
};

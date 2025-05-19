"use client";

import * as React from "react";

import { Form } from "radix-ui";

import { FieldError } from "./Form/FieldError";
import { FormField } from "./Form/FormField";
import { SubmitButton } from "./Form/SubmitButton";

type TProps = NoChildren;

export const ContactForm: React.FC<TProps> = () => {
  const handleSubmit = async (formData: FormData) => {
    await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <Form.Root
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

      <SubmitButton />
      {/* {status === "success" && (
        <p className="text-secondary font-medium">
          Zpráva byla úspěšně odeslána.
        </p>
      )} */}
      {/* {state && <p className="text-red-600">{state}</p>} */}
    </Form.Root>
  );
};

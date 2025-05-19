"use client";

import * as React from "react";

import { Form } from "radix-ui";

import { FormField } from "./Form/FormField";
import { SubmitButton } from "./Form/SubmitButton";

type TProps = NoChildren;

export const ContactForm: React.FC<TProps> = () => {
  // const handleSubmit = async (formData: FormData) => {
  //   const response = await fetch("/api/contact", {
  //     method: "POST",
  //     body: formData,
  //   });
  //   const result = await response.json();
  // };

  return (
    <Form.Root
      // action={handleSubmit}
      className="flex flex-col gap-y-4"
    >
      <div className="flex flex-wrap gap-4 [&>*]:flex-1">
        <FormField fieldName="firstName" label="Jméno" />
        <FormField fieldName="lastName" label="Příjmení" />
      </div>

      <FormField fieldName="email" label="E-mail" type="email" isRequired />
      <FormField
        fieldName="message"
        label="Zpráva"
        type="textarea"
        isRequired
      />

      <SubmitButton />
      {/* {status === "success" && (
        <p className="text-secondary font-medium">
          Zpráva byla úspěšně odeslána.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600">Něco se pokazilo, zkuste to znovu.</p>
      )} */}
    </Form.Root>
  );
};

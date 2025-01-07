"use client";

import { formProps } from "@/types";
import { useRef } from "react";

const Form = ({ children, action, onSubmit }: formProps) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      action={async (formData) => await action(formData)}
      onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;

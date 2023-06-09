"use client";
import { FloatingInput } from "../../../design-system";
import { ContactSchema } from "../../../lib/validators/contact-form";
import { Textarea } from "../../ui/Textarea";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactSchema>({
    mode: "onSubmit",
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = (data: ContactSchema) => {
    console.log(data);
  };

  return (
    <div className="col-span-1  w-full  flex justify-start">
      <form
        className="bg-gray shadow-2xl px-7 py-8 w-full max-w-lg  "
        // onSubmit={handleSubmit(onSubmit)}
      >
        <FloatingInput
          className="mb-4"
          type="text"
          placeholder="Name"
          label="Name"
          htmlFor="name"
        />
        <FloatingInput
          type="email"
          placeholder="Email"
          label="Email"
          htmlFor="email"
          className="mb-4"
        />
        <FloatingInput
          type="number"
          placeholder="Phone"
          label="Phone"
          htmlFor="phone"
          className="mb-4"
        />
        <div className="mb-2">
          <label htmlFor="message" className="text-white text-sm font-bold">
            Message
          </label>
          <Textarea className="bg-grayLight" rows={8} />
        </div>
        <button className="w-full bg-blue">Enviar</button>
        <p>* Nunca compartiremos tu informacion con terceros.</p>
      </form>
    </div>
  );
};

export default ContactForm;
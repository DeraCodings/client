"use client";

import { useFormState, useFormStatus } from "react-dom";
import { sendEmail } from "../api/action";

import { RiLoader5Fill } from "react-icons/ri";

const initilaState = {
  message: "",
  errors: {
    name: "",
    email: "",
    message: "",
  },
  error: "",
};

function ContactForm({ contactPageData }) {
  const [state, formAction] = useFormState(sendEmail, initilaState);

  return (
    <div>
      <div>
        <div>
          <h2 className="text-3xl text-green-600 font-bold">
            {contactPageData[1]?.headingText}
          </h2>
          <p className="mb-4">{contactPageData[1]?.subtitle}</p>
        </div>
        <div className="py-6">
          <form action={formAction}>
            <div className="mb-4">
              <label htmlFor="name">Your name</label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                // required
                className="border w-full md:w-3/4 py-2 pl-2 rounded-lg rounded-l-lg block md:inline focus:outline-slate-500 border-gray-500"
                placeholder="Enter your name..."
              />
              {state.errors?.name && (
                <p className="text-red-500">{state.errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email">Your email</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                // required
                className="border w-full md:w-3/4 py-2 pl-2 rounded-lg rounded-l-lg block md:inline focus:outline-slate-500 border-gray-500"
                placeholder="Enter your email..."
              />
              {state.errors?.email && (
                <p className="text-red-500">{state.errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                name="message"
                id="message"
                // required
                cols={100}
                rows={10}
                className="border w-full md:w-3/4 py-3 pl-2 rounded-lg focus:outline-slate-500 border-gray-500"
                placeholder="Enter your message..."
              ></textarea>
              {state.errors?.message && (
                <p className="text-red-500">{state.errors.message}</p>
              )}
            </div>
            <SubmitButton />
          </form>
        </div>
        {state?.message && <p className="text-green-600">{state.message}</p>}
        {state?.error && (
          <p className="text-red-600 font-semibold">{state.error}</p>
        )}
      </div>
    </div>
  );
}

export default ContactForm;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending ? true : false}
      className="bg-green-600 text-white font-semibold px-3 py-2 rounded-lg"
    >
      {pending ? (
        <span>
          Submitting <RiLoader5Fill className="animate-spin" />
        </span>
      ) : (
        "Submit"
      )}
    </button>
  );
}

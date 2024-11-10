"use client";

import { useFormState, useFormStatus } from "react-dom";
import { subscribeToNewsletter } from "../../api/action";
import { useEffect, useState } from "react";
import { RiLoader5Fill } from "react-icons/ri";

const initialState = {
  success: "",
  error: "",
};

function SubscriberForm() {
  const [state, formAction] = useFormState(subscribeToNewsletter, initialState);
  const [successMessage, setSuccessMessage] = useState(state?.success);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(state?.success);
      }, 1000);

      // Clear timer if component unmounts or success message changes
      return () => clearTimeout(timer);
    }
  }, [state?.success, successMessage]);

  return (
    <div className="flex justify-center items-center mt-4">
      <form
        action={formAction}
        className="flex flex-col gap-3 md:gap-0 p-4 md:flex-row w-4/5"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email..."
          required
          className="border md:border-2 md:border-green-600 border-transparent w-full md:w-3/4 py-3 pl-2 rounded-lg rounded-l-lg block md:inline md:rounded-r-none focus:outline-none"
        />
        <SubmitNewsletterButton />
      </form>
      {state?.error && <p className="text-red-500">{state.error}</p>}
      {state?.success && <p className="text-green-600">{state.success}</p>}
    </div>
  );
}

export default SubscriberForm;

function SubmitNewsletterButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending ? true : false}
      className="bg-green-600 text-white text-nowrap px-4 py-2 rounded-lg rounded-r-lg block md:rounded-l-none md:inline"
    >
      {pending ? (
        <span>
          Subscribing <RiLoader5Fill className="animate-spin" />
        </span>
      ) : (
        "Get daily tips"
      )}
    </button>
  );
}

"use server";

import { z } from "zod";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const contactFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Name field is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().trim().min(1, { message: "Please type in a message" }),
});

export async function sendEmail(prevState: any, formData: FormData) {
  const contactFormData = Object.fromEntries(formData);
  const validatedContactFormData = contactFormSchema.safeParse(contactFormData);

  console.log(validatedContactFormData?.data);

  if (!validatedContactFormData.success) {
    console.log(validatedContactFormData.error);
    // const fieldErrors = validatedContactFormData.error.format();
    const formFieldErrors =
      validatedContactFormData.error.flatten().fieldErrors;

    return {
      errors: {
        name: formFieldErrors?.name,
        email: formFieldErrors?.email,
        message: formFieldErrors?.message,
      },
    };
  }

  try {
    await sgMail.send({
      to: process.env.SENDGRID_EMAIL,
      from: process.env.SENDGRID_EMAIL,
      subject: `Inquiry from ${validatedContactFormData?.data.name}`,
      html: `
            <h3>${validatedContactFormData?.data.email}</h3>
            <p>${validatedContactFormData?.data.message}</p>
            `,
    });

    return {
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Your message was not sent. Please try again.",
    };
  }
}

export async function subscribeToNewsletter(
  prevState: any,
  formData: FormData
) {
  const email = formData.get("name");

  const api = "https://api.sendgrid.com/v3/marketing/contacts";

  const data = {
    list_ids: [process.env.SENDGRID_MAILING_ID],
    contacts: [{ email }],
  };

  const headers = {
    Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    "Content-Type": "application/json",
  };

  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify(data),
  };

  try {
    await fetch(api, options);
    // const data = res.json();

    // console.log(data);

    return {
      success: "You've successfully subscribed to receiving daily tips",
    };
  } catch (error) {
    console.log("Error occurred: ", error);
    return {
      error: "An error occurred while subscribing you. Please try again",
    };
  }
  // const request = {
  //   url: `v3/marketing/contacts`,
  //   method: "PUT",
  //   body: JSON.stringify(data),
  //   headers
  // };

  // client
  //   .request(request)
  //   .then(([res, body]) => {
  //     console.log(res.statusCode);
  //     console.log(res.body);
  //     return {
  //       success: "You've successfully subscribed to receiving daily tips",
  //     };
  //   })
  //   .catch((err) => {
  //     console.log("An error occurred: ", err);
  //     return {
  //       error: "An error occurred while subscribing you. Please try again",
  //     };
  //   });
}

export async function fetchLogo() {
  const path = `/api/logo`;

  const url = new URL(path, "http://127.0.0.1:1337");

  console.log(url);

  url.searchParams.append("populate", "logo");

  const res = await fetch(url, { cache: "no-cache" });
  // let res:any;
  // if (process.env.NODE_ENV !== 'production') {
  //   // Skip fetch calls or use mock data
  // } else {
  //   res = await fetch(`${url}/api/logo`, {cache: "no-cache"});
  // }
  // if (!res?.ok) throw new Error("Failed to fetch image");

  const data = res.json();

  return data;
}

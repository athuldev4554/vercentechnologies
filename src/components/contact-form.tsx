"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactValues } from "@/lib/contact";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { firstname: "", email: "", message: "" },
    mode: "onTouched",
  });

  async function onSubmit(values: ContactValues) {
    setStatus("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error("Enquiry could not be sent.");
      }
      reset();
      setStatus("Thank you. Your enquiry has been submitted. We'll be in touch.");
    } catch {
      setStatus("We couldn't send your enquiry. Please try again.");
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit, () =>
        setStatus("Please check the highlighted fields."),
      )}
      aria-describedby="form-status"
    >
      <div className="flex flex-wrap items-start gap-5">
        <div className="min-w-0 flex-1 basis-full sm:basis-0">
          <label htmlFor="firstname" className="mb-2 block text-sm text-ink">
            Name
          </label>
          <input
            {...register("firstname")}
            id="firstname"
            type="text"
            autoComplete="given-name"
            placeholder="Your name"
            required
            aria-invalid={Boolean(errors.firstname)}
            aria-describedby={errors.firstname ? "firstname-error" : undefined}
            className="h-[52px] w-full min-w-0 border border-[#c6d0c8] bg-white px-4 py-3 text-[14px] text-ink placeholder:text-[#77827b] aria-invalid:border-red-600 aria-invalid:focus-visible:outline-red-600"
          />
          {errors.firstname && (
            <p
              id="firstname-error"
              className="mt-2 text-xs text-red-700"
              role="alert"
            >
              {errors.firstname.message}
            </p>
          )}
        </div>
        <div className="min-w-0 flex-1 basis-full sm:basis-0">
          <label htmlFor="email" className="mb-2 block text-sm text-ink">
            Business email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="h-[52px] w-full min-w-0 border border-[#c6d0c8] bg-white px-4 py-3 text-[14px] text-ink placeholder:text-[#77827b] aria-invalid:border-red-600 aria-invalid:focus-visible:outline-red-600"
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-2 text-xs text-red-700"
              role="alert"
            >
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="w-full min-w-0">
          <label htmlFor="message" className="mb-2 block text-sm text-ink">
            What would you like to build or integrate?
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={5}
            maxLength={5000}
            placeholder="Tell us about your project, the systems you want to connect, or the challenge you want to solve."
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="w-full min-w-0 resize-y border border-[#c6d0c8] bg-white px-4 py-3 text-[14px] text-ink placeholder:text-[#77827b] aria-invalid:border-red-600 aria-invalid:focus-visible:outline-red-600"
          />
          {errors.message && (
            <p id="message-error" className="mt-2 text-xs text-red-700" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-[52px] items-center justify-center gap-7 border px-6 py-[14px] text-sm font-medium transition-colors duration-200 border-primary bg-primary text-white hover:border-[#0d4844] hover:bg-[#0d4844] mt-1 cursor-pointer disabled:cursor-wait disabled:opacity-70"
        >
          {isSubmitting ? "Sending…" : "Send enquiry"}{" "}
          <span
            className="inline-block shrink-0 text-xl leading-none"
            aria-hidden="true"
          >
            ↗
          </span>
        </button>
      </div>
      <p
        id="form-status"
        role="status"
        aria-live="polite"
        className="mt-4 text-[11px] leading-5 text-muted"
      >
        {status}
      </p>
    </form>
  );
}

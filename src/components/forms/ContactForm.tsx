"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(
      /^(\+1)?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Please enter a valid US phone number"
    ),
  email: z.string().email("Please enter a valid email address"),
  serviceArea: z.string().min(1, "Please select a service area"),
  serviceNeeded: z.string().min(1, "Please select a service"),
  description: z
    .string()
    .min(20, "Please describe your project in at least 20 characters"),
  referralSource: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceAreas = [
  "Stonebridge Ranch",
  "Craig Ranch",
  "Trinity Falls",
  "Tucker Hill",
  "Allen",
  "Fairview",
  "Celina",
  "Anna",
  "McKinney (General)",
  "Other",
];

const servicesNeeded = [
  "Driveway",
  "Patio",
  "Pool Deck",
  "Block Wall",
  "Foundation/Slab",
  "Commercial",
  "Other",
];

const referralSources = [
  "Google",
  "Facebook",
  "Referral",
  "Yard Sign",
  "Truck/Vehicle",
  "Other",
];

type ContactFormProps = {
  defaultArea?: string;
};

export default function ContactForm({ defaultArea }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      serviceArea: defaultArea || "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full px-4 py-3 border border-border rounded bg-white text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";
  const labelClasses = "block text-sm font-body font-medium text-primary mb-1";
  const errorClasses = "text-red-600 text-xs mt-1";

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <h3 className="font-display text-xl font-bold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700">
          We&apos;ll be in touch within 1 business day!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
          Something went wrong — please call us at{" "}
          <a href="tel:+12144278053" className="font-bold underline">
            (214) 427-8053
          </a>
          .
        </div>
      )}

      <div>
        <label htmlFor="name" className={labelClasses}>
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className={cn(inputClasses, errors.name && "border-red-500")}
        />
        {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={cn(inputClasses, errors.phone && "border-red-500")}
          />
          {errors.phone && (
            <p className={errorClasses}>{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={cn(inputClasses, errors.email && "border-red-500")}
          />
          {errors.email && (
            <p className={errorClasses}>{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="serviceArea" className={labelClasses}>
            Service Area *
          </label>
          <select
            id="serviceArea"
            {...register("serviceArea")}
            className={cn(inputClasses, errors.serviceArea && "border-red-500")}
          >
            <option value="">Select an area</option>
            {serviceAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          {errors.serviceArea && (
            <p className={errorClasses}>{errors.serviceArea.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="serviceNeeded" className={labelClasses}>
            Service Needed *
          </label>
          <select
            id="serviceNeeded"
            {...register("serviceNeeded")}
            className={cn(
              inputClasses,
              errors.serviceNeeded && "border-red-500"
            )}
          >
            <option value="">Select a service</option>
            {servicesNeeded.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.serviceNeeded && (
            <p className={errorClasses}>{errors.serviceNeeded.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="description" className={labelClasses}>
          Project Description *
        </label>
        <textarea
          id="description"
          rows={5}
          {...register("description")}
          className={cn(inputClasses, errors.description && "border-red-500")}
        />
        {errors.description && (
          <p className={errorClasses}>{errors.description.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="referralSource" className={labelClasses}>
          How did you hear about us?
        </label>
        <select
          id="referralSource"
          {...register("referralSource")}
          className={inputClasses}
        >
          <option value="">Select (optional)</option>
          {referralSources.map((source) => (
            <option key={source} value={source}>
              {source}
            </option>
          ))}
        </select>
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Sending..." : "Send My Request"}
      </Button>
    </form>
  );
}

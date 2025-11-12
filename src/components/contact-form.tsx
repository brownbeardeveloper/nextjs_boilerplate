"use client";
import { useState, FormEvent } from "react";
import { validateEmail } from "../../utils";
import SubmitButton from "./submit-button";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const maxMessageLength = 1800;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Simulated API call - replace with your actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Example API call:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setSubmissionStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmissionStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="What should we call you?"
          className={`w-full px-4 py-3 bg-background border rounded-md 
            transition-all duration-200 outline-none
            placeholder:text-muted-foreground
            focus:ring-2 focus:ring-primary/20 focus:border-primary
            ${errors.name ? "border-destructive" : "border-input hover:border-primary/50"}`}
        />
        {errors.name && (
          <p className="mt-2 text-sm font-semibold text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm mb-2"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className={`w-full px-4 py-3 bg-background border rounded-md 
            transition-all duration-200 outline-none
            placeholder:text-muted-foreground
            focus:ring-2 focus:ring-primary/20 focus:border-primary
            ${errors.email ? "border-destructive" : "border-input hover:border-primary/50"}`}
        />
        {errors.email && (
          <p className="mt-2 text-sm font-semibold text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="message" className="block text-sm">
            Message
          </label>
          <span className="text-xs text-muted-foreground">
            {formData.message.length}/{maxMessageLength}
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          maxLength={maxMessageLength}
          placeholder="Tell us what's on your mind…"
          className={`w-full px-4 py-3 bg-background border rounded-md 
            transition-all duration-200 outline-none resize-none
            focus:ring-2 focus:ring-primary/20 focus:border-primary
            ${errors.message ? "border-destructive" : "border-input hover:border-primary/50"}`}
        />
        {errors.message && (
          <p className="mt-2 text-sm font-semibold text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Privacy Notice */}
      <p className="text-xs">
        By submitting this form, you agree that we will process and store your
        information.
      </p>

      {/* Submit Button */}
      {submissionStatus ? (
        <div
          className={`p-4 rounded-md text-sm font-medium animate-in fade-in slide-in-from-top-2 duration-300 text-center
            ${submissionStatus.type === "success"
              ? "text-green-600"
              : "text-red-600"
            }`}
        >
          {submissionStatus.message}
        </div>
      ) : (
        <SubmitButton text={isSubmitting ? "Sending..." : "Send Message"} variant={isSubmitting ? "customGray" : "customBlack"} />
      )}
    </form>
  );
}
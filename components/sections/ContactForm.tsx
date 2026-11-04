"use client";

import type { FormEvent } from "react";
import { contactInfo } from "@/data/footer";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const topic = String(formData.get("topic") ?? "General enquiry");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`${topic} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\n${message}`,
    );

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="wf-contact-form" onSubmit={handleSubmit}>
      <div className="wf-contact-form-heading">
        <p className="wf-contact-kicker">Send us a note</p>
        <h2>How can we help?</h2>
        <p>Share a few details and we’ll help direct your enquiry to the right place.</p>
      </div>

      <label>
        Your name
        <input autoComplete="name" name="name" required />
      </label>
      <div className="wf-contact-form-row">
        <label>
          Email address
          <input autoComplete="email" name="email" type="email" required />
        </label>
        <label>
          Phone number (optional)
          <input autoComplete="tel" name="phone" type="tel" />
        </label>
      </div>
      <label>
        What are you enquiring about?
        <select name="topic" defaultValue="Products and customisation">
          <option>Products and customisation</option>
          <option>Business enquiry</option>
          <option>Nashik winery tours</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        Your message
        <textarea name="message" rows={3} required />
      </label>
      <button className="wf-contact-submit" type="submit">Submit</button>
    </form>
  );
}

'use client';
import Contact from "../Components/Contact";

export const metadata = {
  title: "Contact | Cheema Advertising",
  description: "Get in touch for signboards, stickers, LED and branding solutions in Sharjah and UAE.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Contact />
    </main>
  );
}

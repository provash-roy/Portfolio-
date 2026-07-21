"use client";

import { Mail, MapPin, ArrowUpRight, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { sendContactMessage } from "@/actions/contact";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    try {
      setLoading(true);

      const result = await sendContactMessage(data);

      if (result.success) {
        alert("Message sent successfully 🚀");
        reset();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-12 py-24 bg-zinc-50 dark:bg-[#090a0f]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className=" mb-16 text-center">
          <p className="text-cyan-500 font-semibold uppercase tracking-[0.35em] text-sm">
            Contact
          </p>

          <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Let&apos;s build something amazing together.
            <span className="text-cyan-400"> </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_450px] gap-12">
          {/* LEFT CONTENT */}

          <div className="space-y-10">
            <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              I&apos;m open to freelance projects, internship opportunities,
              full-time roles, and collaborations. If you have an idea, let&apos;s
              discuss how we can transform it into a scalable product.
            </p>

            {/* Contact Cards */}

            <div className="grid sm:grid-cols-2 gap-6">
              <ContactCard icon={<Mail />} title="Email">
                <Link
                  href="mailto:provashray94@gmail.com"
                  className="text-cyan-400-600 dark:text-zinc-300  transition"
                >
                  <p className="text-cyan-400-600">provashray94@gmail.com</p>
                </Link>
              </ContactCard>

              <ContactCard icon={<MapPin />} title="Location">
                <p className="text-zinc-600 dark:text-zinc-300">
                  Remote • Worldwide
                </p>
              </ContactCard>
            </div>

            {/* Social */}

            <div className="flex flex-wrap gap-4">
              <SocialButton
                href="https://github.com/provash-roy"
                icon={<FaGithub />}
                text="Github"
              />

              <SocialButton
                href="https://www.linkedin.com/in/provash-roy-687a703a0/"
                icon={<FaLinkedin />}
                text="LinkedIn"
              />
            </div>
          </div>

          {/* FORM */}

          <div
            className="
            rounded-[2rem]
            border
            border-zinc-200
            dark:border-zinc-800
            bg-white
            dark:bg-zinc-950
            p-8
            shadow-xl
            "
          >
            <h3 className="text-cyan-400 text-xl font-bold mb-2">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <InputField
                label="Name"
                placeholder="Your Name"
                error={errors.name?.message}
                {...register("name", {
                  required: "Name is required",
                })}
              />

              <InputField
                label="Email"
                type="email"
                placeholder="Your Email"
                error={errors.email?.message}
                {...register("email", {
                  required: "Email is required",
                })}
              />

              <div>
                <label className="text-sm font-medium">Message</label>

                <textarea
                  {...register("message", {
                    required: "Message is required",
                  })}
                  rows={2}
                  placeholder="Your Message"
                  className="
                  mt-2
                  w-full
                  rounded-xl
                  border
                  border-zinc-300
                  dark:border-zinc-700
                  bg-transparent
                  px-5
                  py-4
                  outline-none
                  focus:border-cyan-400
                  resize-none
                  "
                />

                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                disabled={loading}
                type="submit"
                className="
                w-full
                rounded-xl
                py-6
                bg-cyan-400
                text-black
                font-semibold
                hover:bg-cyan-300
                "
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ================= COMPONENTS =================

function ContactCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="
rounded-3xl
border
border-zinc-200
dark:border-zinc-800
bg-white
dark:bg-zinc-950
p-6
shadow-sm
"
    >
      <div className="text-cyan-400">{icon}</div>

      <h3 className="mt-5 text-lg font-semibold">{title}</h3>

      <div className="mt-2">{children}</div>
    </div>
  );
}

function SocialButton({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Button
        variant="outline"
        className="
rounded-full
gap-2
"
      >
        {icon}

        {text}

        <ArrowUpRight size={15} />
      </Button>
    </Link>
  );
}

import { forwardRef } from "react";

const InputField = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
  }
>(({ label, error, ...props }, ref) => (
  <div>
    <label className="text-sm font-medium">{label}</label>

    <input
      ref={ref}
      {...props}
      className="
mt-2
w-full
rounded-xl
border
border-zinc-300
dark:border-zinc-700
bg-transparent
px-5
py-4
outline-none
focus:border-cyan-400
"
    />

    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
  </div>
));

InputField.displayName = "InputField";

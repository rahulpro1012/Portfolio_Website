import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
  FaExclamationCircle,
} from "react-icons/fa";

function Email() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation Logic
  const validate = () => {
    let tempErrors = {};

    // Name: Required
    if (!formData.name.trim()) tempErrors.name = "Name is required";

    // Email: Regex Check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    // Subject: Required
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";

    // Message: Min Length
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
    }

    setErrors(tempErrors);
    // Return true if no errors
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error for this field as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Run Validation
    if (!validate()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    // 2. Submit if valid
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_46jamv7",
        "template_fuqcq6w",
        e.target,
        "ZuluNHpnCwFBdv0lM"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          console.log(result.text);
          setIsSubmitting(false);
          setFormData({ name: "", subject: "", email: "", message: "" });
          setErrors({});
        },
        (error) => {
          toast.error("Failed to send. Please try again later.");
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="email"
      className="relative w-full py-20 bg-primary font-sans text-textMain overflow-hidden transition-colors duration-300"
    >
      <ToastContainer position="bottom-right" theme="dark" />

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header (Mobile) */}
        <div className="mb-12 lg:hidden animate-fadeIn">
          <p className="text-accent font-mono mb-2 text-sm tracking-widest uppercase">
            04. What&apos;s Next?
          </p>
          <h2 className="text-4xl font-bold text-textMain">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN: CONTACT INFO */}
          <div className="space-y-8 animate-fadeIn">
            <div className="hidden lg:block">
              <p className="text-accent font-mono mb-4 text-sm tracking-widest uppercase">
                04. What&apos;s Next?
              </p>
              <h2 className="text-5xl font-bold text-textMain">
                Get In <span className="text-accent">Touch</span>
              </h2>
            </div>

            <p className="text-textMuted text-lg leading-relaxed max-w-lg">
              I am currently looking for new opportunities as a{" "}
              <strong className="text-textMain">Full Stack Developer</strong>.
              Whether you have a question about my stack, a project idea, or
              just want to say hi, my inbox is always open!
            </p>

            <a
              href="mailto:rahul@example.com"
              className="inline-flex items-center gap-3 text-xl font-bold text-textMain hover:text-accent transition-colors"
            >
              <FaEnvelope />
              rahulmudaliar1012@gmail.com
            </a>

            <div className="flex gap-6 pt-4">
              <SocialIcon
                href="https://github.com/rahulpro1012"
                icon={<FaGithub />}
                label="GitHub Profile"
              />
              <SocialIcon
                href="https://www.linkedin.com/in/rahul-mudaliar/"
                icon={<FaLinkedin />}
                label="LinkedIn Profile"
              />
              <SocialIcon
                href="https://twitter.com"
                icon={<FaTwitter />}
                label="Twitter Profile"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <div
            className="w-full bg-secondary/30 backdrop-blur-md p-8 rounded-2xl border border-border shadow-2xl animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-textMuted"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-primary/50 border rounded-lg px-4 py-3 text-textMain outline-none transition-all
                      ${
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-border focus:border-accent"
                      }
                    `}
                    placeholder="John Doe"
                  />
                  {errors.name && <ErrorMessage msg={errors.name} />}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-textMuted"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-primary/50 border rounded-lg px-4 py-3 text-textMain outline-none transition-all
                      ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-border focus:border-accent"
                      }
                    `}
                    placeholder="john@example.com"
                  />
                  {errors.email && <ErrorMessage msg={errors.email} />}
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-textMuted"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-primary/50 border rounded-lg px-4 py-3 text-textMain outline-none transition-all
                    ${
                      errors.subject
                        ? "border-red-500 focus:border-red-500"
                        : "border-border focus:border-accent"
                    }
                  `}
                  placeholder="Project Collaboration"
                />
                {errors.subject && <ErrorMessage msg={errors.subject} />}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-textMuted"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full bg-primary/50 border rounded-lg px-4 py-3 text-textMain outline-none transition-all resize-none
                    ${
                      errors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-border focus:border-accent"
                    }
                  `}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <ErrorMessage msg={errors.message} />}
              </div>

              {/* BUTTON: Subtle Outline Style */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    group flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all duration-300
                    ${
                      isSubmitting
                        ? "bg-transparent border border-textMuted text-textMuted cursor-not-allowed opacity-50"
                        : "bg-transparent border border-accent text-accent hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1"
                    }
                  `}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="transform group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left text-textMuted text-sm font-mono">
            <p>Designed & Built by Rahul Mudaliar</p>
            <p className="mt-1 text-xs text-textMuted">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-textMuted hover:text-accent transition-colors text-sm font-mono uppercase tracking-widest"
          >
            Back to Top
            <div className="p-2 border border-border rounded-full group-hover:border-accent group-hover:-translate-y-1 transition-all">
              <FaArrowUp />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

// Helper Component for Error Messages
const ErrorMessage = ({ msg }) => (
  <p className="flex items-center gap-1 text-red-500 text-xs mt-1 animate-fadeIn">
    <FaExclamationCircle /> {msg}
  </p>
);

function SocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary border border-border text-textMuted hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

export default Email;

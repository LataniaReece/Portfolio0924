import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import DOMPurify from "dompurify";

import SectionHeader from "../SectionHeader";
import SectionSubHeading from "../SectionSubHeading";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface CustomCloseButtonProps {
  closeToast: (e: React.MouseEvent<HTMLElement>) => void;
}

const CustomCloseButton: React.FC<CustomCloseButtonProps> = ({
  closeToast,
}) => (
  <span
    onClick={closeToast}
    className="text-white hover:text-slate-300 hover:cursor-pointer"
  >
    x
  </span>
);

interface ContactFormValues {
  fromName: string;
  fromEmail: string;
  emailMessage: string;
}

const ContactSection = () => {
  const validationSchema = Yup.object().shape({
    fromName: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    fromEmail: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    emailMessage: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const handleSubmit = (
    values: ContactFormValues,
    { setSubmitting, resetForm }: FormikHelpers<ContactFormValues>
  ) => {
    setSubmitting(true);

    // Sanitize the form inputs to prevent XSS
    const cleanValues = {
      fromName: DOMPurify.sanitize(values.fromName).replace(/[\r\n]/g, ""),
      fromEmail: DOMPurify.sanitize(values.fromEmail).replace(/[\r\n]/g, ""),
      emailMessage: DOMPurify.sanitize(values.emailMessage),
    };

    const templateParams = {
      to_name: "Latania",
      from_name: cleanValues.fromName,
      message: cleanValues.emailMessage,
      reply_to: cleanValues.fromEmail,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast.success("Message sent successfully! I’ll be in touch soon.", {
          className: "dark-toast",
          closeButton: ({ closeToast }) => (
            <CustomCloseButton closeToast={closeToast} />
          ),
        });
        resetForm();
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        toast.error("Oops! Something went wrong. Please try again later.", {
          className: "dark-toast",
          closeButton: ({ closeToast }) => (
            <CustomCloseButton closeToast={closeToast} />
          ),
        });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-12 bg-defaultBg">
      <div className="container mx-auto">
        <SectionHeader heading="Contact Me" />
        <SectionSubHeading subHeading="Let’s connect and build something great together!" />

        <Formik
          initialValues={{ fromName: "", fromEmail: "", emailMessage: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form
              className="w-full mx-auto bg-defaultBgDarker p-6 rounded-lg shadow-white"
              noValidate
            >
              <div className="mb-4">
                <Field
                  type="text"
                  name="fromName"
                  placeholder="What's your name?"
                  className="w-full px-3 py-2 text-white placeholder-slate-400 bg-transparent border rounded-md border-slate-400 focus:outline-none focus:border-primaryColor"
                  required
                />
                <ErrorMessage
                  name="fromName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <Field
                  type="email"
                  name="fromEmail"
                  placeholder="What's your email address?"
                  className="w-full px-3 py-2 text-slate-50 placeholder-slate-400 bg-transparent border rounded-md border-slate-400 focus:outline-none focus:border-primaryColor"
                  required
                />
                <ErrorMessage
                  name="fromEmail"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <Field
                  as="textarea"
                  name="emailMessage"
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full px-3 py-2 text-slate-50 placeholder-slate-400 bg-transparent  border rounded-md border-slate-400 focus:outline-none focus:border-primaryColor"
                  required
                />
                <ErrorMessage
                  name="emailMessage"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 text-slate-50 bg-primaryColor hover:bg-primaryColorDark rounded-lg transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
export default ContactSection;

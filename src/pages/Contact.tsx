import background3 from "@/assets/backgrounds/background3.svg";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
import { useRef, useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) {
      return;
    }

    const formData = new FormData(form);
    const requiredFields = ["user_name", "user_email", "message"];
    for (const fieldName of requiredFields) {
      const value = formData.get(fieldName) as string;
      if (!value.trim()) {
        toast({
          description: `Please fill in the ${fieldName.replace(
            "_",
            " "
          )} field.`,
        });
        return;
      }
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_qx3bp3s",
        "template_gltahqo",
        "#myForm",
        "ltuwZqfYf2jhw_OLm"
      );
      toast({
        description: "Your message has been sent.",
      });
      form.reset();
    } catch (error) {
      toast({
        description: "Send failed",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className=" h-fit p-4 items-center flex flex-col md:flex-row justify-center border-b-2 gap-20"
      id="contact"
    >
      <img
        src={background3}
        className=" absolute md:relative w-2/3 md:w-1/4 -z-10"
      />
      <div>
        <h1 className=" text-3xl mt-10 text-center font-bold mb-4">
          Contact Us
        </h1>
        <form
          ref={formRef}
          id="myForm"
          onSubmit={sendEmail}
          className=" w-80 backdrop-blur-md p-2 rounded-md space-y-4"
        >
          <input
            type="text"
            placeholder="User name"
            className=" w-full p-4 bg-transparent border placeholder:text-black dark:placeholder:text-white rounded-md"
            name="user_name"
          />
          <input
            type="email"
            placeholder="Enter your email address"
            className=" w-full p-4 bg-transparent border placeholder:text-black dark:placeholder:text-white rounded-md"
            name="user_email"
          />
          <textarea
            placeholder="Send a Message"
            className=" w-full p-4 bg-transparent border placeholder:text-black h-32 dark:placeholder:text-white rounded-md"
            name="message"
          />
          <Button
            className=" w-full dark:bg-slate-900 dark:text-white"
            type="submit"
            value="Send"
            disabled={isLoading}
          >
            {isLoading ? "submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

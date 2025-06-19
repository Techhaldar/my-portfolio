import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  setTimeout(() => {
    setSuccess("");
  }, 5000);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dmo61zg", "template_rtlhxhg", form.current, {
        publicKey: "p6xOL1OEvfUJcYDyz",
      })
      .then(
        () => {
          setName(""), setEmail(""), setMessage("");
          setSuccess("Message sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-green-600">{success}</p>
      <form
        className="flex flex-col gap-4 text-white"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          type="text"
          placeholder="your name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="enter email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          type="text"
          placeholder="Message"
          rows={9}
          cols={50}
          required
          className="rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={handleMessage}
        ></textarea>
        <button className="p-4 bg-cyan rounded-lg hover:bg-darkCryan transition-all text-white font-bold duration-500 hover:text-white">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

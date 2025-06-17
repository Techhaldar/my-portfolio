import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form action="" className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="your name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <input
          type="email"
          placeholder="enter email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <textarea
          type="text"
          placeholder="Message"
          rows={9}
          cols={50}
          required
          className="rounded-lg bg-lightBrown p-2"
        ></textarea>
        <button className="p-4 bg-cyan rounded-lg hover:bg-darkCryan transition-all text-white font-bold duration-500 hover:text-white">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

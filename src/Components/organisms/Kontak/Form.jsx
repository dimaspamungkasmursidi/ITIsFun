import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm, ValidationError } from "@formspree/react";
import Button from "../../atoms/Button";

const Form = () => {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [state, handleSubmit] = useForm("meqywvkz");
  if (state.succeeded) {
    return (
      <div className="flex justify-center items-center w-full h-[19rem]">
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 50 }}
          animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center w-full max-w-2xl h-full border p-6 bg-glass-light rounded-md backdrop-blur-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="#FC4A1A"
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20"
          >
            <path d="M1 21h4V9H1v12zM23 10c0-.55-.45-1-1-1h-6.31l.95-4.57c.03-.12.05-.25.05-.38 0-.5-.19-.99-.53-1.37L14.41 1 7.83 7.59C7.34 8.08 7 8.79 7 9.5V19c0 .83.67 1.5 1.5 1.5h9.69c.64 0 1.2-.4 1.41-1.01l2.59-7.64c.04-.12.06-.25.06-.39v-1.96-.01c-.01-.01-.01-.03-.01-.05 0-.02.01-.03.01-.05v-.01-.01-.01z" />
          </svg>

          <h1 className="text-2xl font-bold text-white londrina-regular text-center">
            Terimakasih telah menghubungi kami, tim kami akan segera membalas
            pesan kamu.
          </h1>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="w-[100%]">
      {/* FORM */}
      <div className="flex flex-col justify-center items-center w-full">
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 50 }}
          animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl h-full p-6 bg-glass-light rounded-md backdrop-blur-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        >
          <form action="" onSubmit={handleSubmit}>
            <fieldset id="fs-frm-inputs">
              <div>
                <label
                  className="londrina-reguler font-semibold text-white"
                  htmlFor="full-name"
                >
                  Nama kamu :
                </label>
                <input
                  type="text"
                  name="Name"
                  id="full-name"
                  required=""
                  placeholder="Masukkan nama kamu"
                  className="appearance-none w-full p-1.5 pl-4 mb-4 mt-1 text-secondary bg-glass-light backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-300 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div>
                <label
                  className="londrina-reguler font-semibold text-white"
                  htmlFor="email"
                >
                  Email kamu :
                </label>
                <input
                  type="email"
                  name="reply-to"
                  required=""
                  id="email"
                  placeholder="Masukkan email kamu"
                  className="appearance-none w-full p-1.5 pl-4 mb-4 mt-1 text-secondary bg-glass-light backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-300 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div>
                <label
                  className="londrina-reguler font-semibold text-white"
                  htmlFor="message"
                >
                  Pesan :
                </label>
                <textarea
                  name="Message"
                  id="message"
                  cols="30"
                  rows="4"
                  required=""
                  placeholder="Masukkan pesan yang mau kamu tanyakan"
                  className="appearance-none w-full p-1.5 pl-4 mb-4 mt-1 text-secondary bg-glass-light backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-300 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </fieldset>
            <Button disabled={state.submitting}>Kirim</Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Form;

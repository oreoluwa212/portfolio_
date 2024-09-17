import Link from "next/link";

import { LuMail } from "react-icons/lu";
import { FaLinkedinIn, FaX } from "react-icons/fa6";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import Hoc from "./Hoc";

import { BiSolidPhone } from "react-icons/bi";

const Contact = () => {
  return (
    <section id="contact" className="lg:py-16 py-10">
      <Hoc>
        <p className="smallHeading">get in touch</p>
      </Hoc>

      <Hoc>
        <h3 className="heading">contact</h3>
      </Hoc>

      <Hoc>
        <p className="xl:mt-16 mt-10">
          Impressed with my work & skills? Want to work with me? You can reach
          out to me through the social media handles below or you can simply
          give me a call <BiSolidPhone className="inline" />.
        </p>
      </Hoc>

      <div className="mt-8">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
          <Hoc>
            <div className="flex gap-4 flex-row items-center mb-4">
              <Link className="" href="mailto:oreoluwaajayyiruth@gmail.com">
                <span className="bg-teal/80 rounded-lg h-14 w-14 flex justify-center items-center">
                  <LuMail className="text-4xl text-white" />
                </span>
              </Link>
              <Link
                href="mailto:oreoluwaajayyiruth@gmail.com"
              >
                oreoluwaajayyiruth@gmail.com
              </Link>
            </div>
          </Hoc>

          <Hoc>
            <div className="flex gap-4 flex-row items-center mb-4">
              <Link
                className=""
                href="https://www.linkedin.com/in/oreoluwaajayi"
              >
                <span className="bg-teal/80 rounded-lg h-14 w-14 flex justify-center items-center">
                  <FaLinkedinIn className="text-4xl text-white" />
                </span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/oreoluwaajayi"
              >
                oreoluwa ajayi
              </Link>
            </div>
          </Hoc>

          <Hoc>
            <div className="flex gap-4 flex-row items-center mb-4">
              <Link className="" href="https://github.com/oreoluwa212">
                <span className="bg-teal/80 rounded-lg h-14 w-14 flex justify-center items-center">
                  <AiFillGithub className="text-4xl text-white" />
                </span>
              </Link>
              <Link
                href="https://github.com/oreoluwa212"
              >
                oreoluwa212
              </Link>
            </div>
          </Hoc>

          <Hoc>
            <div className="flex gap-4 flex-row items-center mb-4">
              <Link className="" href="https://twitter.com/oreoluwa_ruth">
                <span className="bg-teal/80 rounded-lg h-14 w-14 flex justify-center items-center">
                  <FaTwitter className="text-4xl text-white" />
                </span>
              </Link>
              <Link href="https://twitter.com/oreoluwa_ruth">
                oreoluwa_ruth
              </Link>
            </div>
          </Hoc>
        </div>
      </div>
    </section>
  );
};

export default Contact;

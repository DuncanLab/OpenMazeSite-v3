import Layout from "../components/layout";
import Team from "../components/Team";
import { keys } from "../config/keys";
import map from "../public/map.svg";

const inputStyle =
  "appearance-none w-full py-1 px-2 focus:outline-none bg-dark-light border border-white rounded-lg";

export default function Contact() {
  return (
    <>
      <img
        src={map}
        alt=""
        className="z-neg fixed h-screen w-full lg:w-screen lg:h-screen"
      />
      <Layout>
        <div>
          <h1 className="text-4xl text-white p-10">The Team</h1>
          <div className="flex justify-center mt-16 mb-16 px-10">
            <Team />
          </div>
          <div className="flex flex-wrap relative mt-24 mb-16">
            <div className="w-full flex m-auto justify-start">
              <div className="mt-8 lg:-mt-24 px-4 lg:px-12">
                <div className="text-white px-6">
                  <div className="contact sm:flex-1 max-w-md sm:min-w-xs sm:mt-10">
                    <h2 className="text-3xl font-semibold mb-4">
                      Have a Question?
                    </h2>
                    <div className="border border-white rounded-lg mt-4">
                      <p className="p-6">
                        This website is associated with the official release of
                        OpenMaze which you can find{" "}
                        <a
                          href="https://psyarxiv.com/bsj47"
                          target="_blank"
                          className="underline"
                        >
                          here
                        </a>
                        . For the newest version and future updates to OpenMaze,
                        please visit{" "}
                        <a
                          href="https://openmaze.ca"
                          target="_blank"
                          className="underline"
                        >
                          openmaze.ca
                        </a>
                        .
                      </p>
                    </div>
                    <h4 className="mb-8 opacity-75 mt-8">
                      Have a question about the first version of OpenMaze?
                      Contact us via email.
                    </h4>
                    <div className="icons flex flex-col mb-10">
                      <div className="flex mb-2 items-center mb-6">
                        <i className="fas fa-user mr-3"></i>
                        <p>
                          University of Toronto <br /> Toronto, ON <br /> M5S,
                          Canada
                        </p>
                      </div>
                      {/* <div className="block flex mb-2 items-baseline mb-6">
                        <i className="fas fa-phone mr-3"></i>
                        <p>+ 1 416-946-0207</p>
                      </div> */}
                      <div className="block flex mb-2 items-baseline mb-6">
                        <i className="fas fa-envelope mr-3"></i>
                        <a href="mailto:duncanlabuoft@gmail.com">
                          <p>duncanlabuoft@gmail.com</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

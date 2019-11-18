import Layout from "../components/layout";

export default function Tutorials() {
  return (
    <>
      <Layout>
        <div className="pb-10 mx-2 sm:mx-10">
          <p
            className="absolute z-neg font-bold text-6xl mt-1 sm:text-7xl md:text-8xl lg:text-10xl"
            style={{ color: "#E8EFF9" }}
          >
            Step 1
          </p>
          <div className="step-1 pt-9 mx-2 mb-8 sm:pt-12 md:pt-14 lg:pt-18">
            {/* Title */}
            <div className="flex items-center content-center mb-14 md:mb-24 lg:mb-32">
              <div
                className="flex items-center justify-center rounded-full h-6 w-6 md:h-8 md:w-8 text-white text-xs mr-4"
                style={{ backgroundColor: "#FF4444" }}
              >
                1
              </div>
              <p className="sm:text-lg md:text-xl">Installation and Setup</p>
            </div>

            {/* Content */}
            <div className="mx-1 text-justify max-w-4xl mx-auto">
              <p>
                To start using Open Maze software in your experiments you will
                need:
              </p>
              <br />
              <ol className="list-decimal list-inside ml-3">
                <li>The Unity Application</li>
                <li>Open Maze Software</li>
                <li>Sublime Text Editor</li>
              </ol>

              <br />
              <ol className="list-decimal ml-6 mb-20">
                {/* Step 1 */}
                <div className="mb-8">
                  <li className="text-xl text-left mb-2">
                    Download and Install Unity
                  </li>
                  <div>
                    <p>
                      <a
                        href="https://unity3d.com/get-unity/download"
                        target="_blank"
                        className="text-blue-700"
                      >
                        Click Here
                      </a>{" "}
                      to redirect to the Unity Download page. Please select
                      which version of Unity you would like and begin the
                      download process. Please note the the personal version of
                      Unity is free but you must pass their terms and conditions
                      to use it.{" "}
                    </p>
                    <br />
                    <p>
                      After installing Unity, open up the application and login
                      or create an account.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="mb-8">
                  <li className="text-xl text-left mb-2">
                    Download and Install OpenMaze
                  </li>
                  <p>
                    Navigate to the Open Maze{" "}
                    <a
                      href="https://github.com/DuncanLab/OpenMaze/releases"
                      target="_blank"
                      className="text-blue-700"
                    >
                      Github
                    </a>{" "}
                    release page, where you will download the latest version of
                    Open Maze.
                  </p>
                  <br />
                  <div className="flex flex-wrap justify-around items-center">
                    <img
                      src={require(`../public/githubDownload.png`)}
                      alt="Github"
                      className="w-full max-w-md"
                    />
                    <p>
                      Click <span className="font-bold">OpenMaze - Beta</span>{" "}
                      to download
                    </p>
                  </div>
                  <br />
                  <p>
                    Once the ZIP file is done downloading, unzip it in an easy
                    to access place on your computer and move on to the final
                    step.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="mb-8">
                  <li className="text-xl text-left mb-2">
                    Download and Install Sublime Text
                  </li>
                  <p>
                    Note: If you already have a text editor compatible with
                    .json and .py files then you can skip this step and simply
                    use the editor you are most comfortable with.
                  </p>
                  <br />
                  <p>
                    Navigate to{" "}
                    <a
                      href="https://www.sublimetext.com/3"
                      target="_blank"
                      className="text-blue-700"
                    >
                      sublimetext.com
                    </a>{" "}
                    to download a text editor. Select your operating system and
                    then download the text editor.
                  </p>
                </div>
              </ol>

              {/* Setting Up Unity */}
              <div>
                <p className="text-2xl mb-6 sm:text-4xl">
                  Setting Up Unity with Open Maze
                </p>
                <ol className="list-decimal ml-6 mb-10">
                  <li className="mb-4">Open Unity</li>
                  <li className="mb-4">
                    If you have not already made an account in Unity, do so now.
                    If you already have login credentials, make sure you are
                    logged in.
                  </li>
                  <li className="mb-4">
                    <p>
                      Once you are logged in you should see a list of projects.
                      If this is your first time logging in, then you will not
                      see this list. If the Open Maze folder is on the display,
                      click to open it from there. If you do not see the Open
                      Maze folder that you downloaded right in front of you,
                      click the <span className="font-bold">Open</span> button
                      at the top right corner of the window to open up a file
                      search window. Navigate to the upzipped, downloaded, Open
                      Maze folder and select it, clicking{" "}
                      <span className="font-bold">Open</span> after doing so.
                    </p>
                    <br />
                    <div className="flex flex-wrap justify-around items-center">
                      <p className="lg:max-w-xs">
                        If you clicked <span className="font-bold">Open</span>{" "}
                        and you see the following (or similar) error message,
                        please press <span className="font-bold">Continue</span>
                        .
                      </p>
                      <img
                        src={require(`../public/errorUnity.png`)}
                        alt="Github"
                        className="w-full h-full max-w-md"
                      />
                    </div>
                    <br />
                    <br />
                    <p>
                      At this point, the Unity will begin loading the Open Maze
                      software. This may take some time so please be patient
                      with the process.
                    </p>
                    <br />
                    <br />
                    <div className="flex flex-wrap justify-around items-center">
                      <img
                        src={require(`../public/unityFirstLoad.png`)}
                        alt="Github"
                        className="w-full h-full max-w-md"
                      />
                      <p className="lg:max-w-xs">
                        You should now have a screen that looks like the one to
                        the left! At this point you are all set up to begin
                        running your experiments! Please Continue scrolling and
                        watch or read our tutorials to find out more about
                        configuring your environments, building your own and
                        discover the endless opportunities of Open Maze!
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <p
            className="absolute z-neg font-bold text-6xl mt-1 sm:text-7xl md:text-8xl lg:text-10xl"
            style={{ color: "#E8EFF9" }}
          >
            Step 2
          </p>
          <div className="step-1 pt-9 mx-2 mb-8 sm:pt-12 md:pt-14 lg:pt-18">
            {/* Title */}
            <div className="flex items-center content-center mb-14 md:mb-24 lg:mb-32">
              <div
                className="flex items-center justify-center rounded-full h-6 w-6 md:h-8 md:w-8 text-white text-xs mr-4"
                style={{ backgroundColor: "#FF4444" }}
              >
                2
              </div>
              <p className="sm:text-lg md:text-xl">Installation and Setup</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

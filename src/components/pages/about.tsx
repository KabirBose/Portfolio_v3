import Image from "next/image";

const About = () => {
  return (
    <div className="bg-zinc-900 h-[35rem] flex flex-col justify-center content-center gap-3 p-10 text-xl">
      <h1 className="font-semibold text-2xl md:text:3xl">About Me</h1>
      <p>
        I am a student at Ontario Tech University, studying{" "}
        <strong className="text-blue-500">
          Networking & IT Security (Hons){" "}
        </strong>
        .
      </p>
      <p>
        I have <strong className="text-blue-500">4+ years</strong> of experience
        in full-stack development, IT, and cybersecurity.
      </p>
      <p>Welcome to my website!</p>
      <div className="flex justify-center items-center mt-5">
        <Image
          src={"/linux.svg"}
          alt="linux penguin"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default About;

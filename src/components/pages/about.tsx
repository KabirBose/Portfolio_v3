const About = () => {
  return (
    <div className="bg-zinc-950 h-[35rem] flex flex-col justify-center content-center gap-3 p-10 text-xl">
      <h1 className="font-semibold text-2xl md:text:3xl">Hello there!</h1>
      <p>
        I am a student at Ontario Tech University, studying{" "}
        <strong className="text-blue-500">
          Networking & Information Technology Security (Hons){" "}
        </strong>
        .
      </p>
      <p>
        I have <strong className="text-blue-500">4+ years</strong> of experience
        in full-stack development, IT, and cybersecurity.
      </p>
      <p>Welcome to my portfolio!</p>
    </div>
  );
};

export default About;

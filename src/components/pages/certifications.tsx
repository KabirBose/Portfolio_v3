import Card from "../ui/card/card";

const Certifications = () => {
  return (
    <div className="bg-zinc-900 min-h-[35rem] flex flex-col justify-center content-center gap-3 p-10 text-xl">
      <h1 className="font-semibold text-2xl md:text:3xl">Certifications</h1>
      <p>
        My networking, software development, and cybersecurity certificates.
      </p>

      <div className="mt-3 flex flex-col gap-5">
        <Card
          name="CS50's Introduction to Python"
          author="Harvard CS50 & David Malan"
          desc="Python, Data Structures, Algorithms, Object-Oriented Programming, Functional Programming"
        />
        <Card
          name="The Complete Web Development Bootcamp"
          author="Dr. Angela Yu"
          desc="HTML, CSS, JavaScript, JQuery, NodeJS, Express, EJS, Git, Postgres SQL, BlockChain"
        />
        <Card
          name="React - The Complete Guide"
          author="Maximillian Schwarzmüller"
          desc="ReactJS, Redux, NextJS, TypeScript, Authentication, MongoDB, React Dev Tools, Framer Motion"
        />
        <Card
          name="The Complete JavaScript Course"
          author="Jonas Schmedtmann"
          desc="JavaScript, Data Structures, Object-Oriented Programming, Document Object Model, Git"
        />
        <Card
          name="The Complete NodeJS Bootcamp"
          author="Jonas Schmedtmann"
          desc="NodeJS, Express, Pug, MongoDB, Mongoose, Model View Controller, APIs, Authentication"
        />
        <Card
          name="CCNA: Introduction to Networks"
          author="Cisco Networking Academy"
          desc="Cisco Packet Tracer, Wireshark, LAN Switching, WAN Routing, TCP/IP, DHCP, IPv4 & IPv6 Addressing"
        />
      </div>
    </div>
  );
};

export default Certifications;

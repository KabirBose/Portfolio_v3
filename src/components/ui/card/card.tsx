interface Props {
  name: string;
  author: string;
  desc: string;
}

const Card = ({ name, author, desc }: Props) => {
  return (
    <div className="bg-zinc-800 rounded-lg p-5 cursor-pointer">
      <h1 className="text-xl font-semibold text-blue-500">{name}</h1>
      <h3 className="italic">{author}</h3>
      <p className="mt-2">{desc}</p>
    </div>
  );
};

export default Card;

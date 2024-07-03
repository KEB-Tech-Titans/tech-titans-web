const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[80%] h-[700px] rounded-xl p-8 bg-white place-self-center">
      {children}
    </div>
  );
};

export default Card;

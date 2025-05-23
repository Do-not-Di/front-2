const Header = ({
  title,
}: {
  title?: string;
}) => {
  return (
    <header className="h-14 flex items-center px-4">
      <h1 className="text-lg font-bold flex-1 text-center">{title}</h1>
    </header>
  );
};

export default Header;

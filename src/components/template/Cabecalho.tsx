import Carrinhos from "./Carrinhos";
import Logo from "./Logo";

const Cabecalho = () => {
  return (
    <header className="flex justify-between items-center bg-zinc-800 h-20 px-10">
      <Logo />
      <Carrinhos />
    </header>
  );
};

export default Cabecalho;

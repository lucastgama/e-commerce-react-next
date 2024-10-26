"use client";
import AreaItenCarrinho from "@/components/carrinho/AreaItenCarrinho";
import CarrinhoVazio from "@/components/carrinho/CarrinhoVazio";
import TotalCarrinho from "@/components/carrinho/TotalCarrinho";
import Pagina from "@/components/template/Pagina";
import useCarrinho from "@/data/hooks/useCarrinho";

const PaginaCarrinho = () => {
  const { itens, adicionar, remover } = useCarrinho();
  return (
    <Pagina className="flex flex-col gap-10">
      {itens.length === 0 ? (
        <CarrinhoVazio />
      ) : (
        <>
          <div className="flex flex-col gap-5">
            {itens.map((item) => (
              <AreaItenCarrinho
                key={item.produto.id}
                item={item}
                adicionar={(item) => adicionar(item.produto)}
                remover={(item) => remover(item.produto)}
              />
            ))}
          </div>
          <TotalCarrinho itens={itens} />
        </>
      )}
    </Pagina>
  );
};

export default PaginaCarrinho;

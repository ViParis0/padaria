import React from "react";

export default function Filters(props: any) {
  const handleClick = ({ target }: any) => {
    // chamada a API passando o value, despois setar o estado com o retorno da API
    // props.calbackParent([])
    console.log(target.value);
  };

  return (
    <div className="position: relative flex">
      <button type="button" className="p-3" value="comidas" onClick={(e) => handleClick(e)}>
        Comidas
      </button>
      <button type="button" value="bebidas" onClick={(e) => handleClick(e)}>
        Bebidas
      </button>
      <button type="button" value="paes" onClick={(e) => handleClick(e)}>
        Pães
      </button>
      <button type="button" value="sobremesas" onClick={(e) => handleClick(e)}>
        Sobremesas
      </button>
    </div>
  );
}

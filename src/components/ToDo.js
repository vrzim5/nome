//ToDo.js é as imagens responsivas ao click.


//biblioteca REACT
// link: https://pt-br.react.dev/blog/2023/03/16/introducing-react-dev
import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
//fim das importações da biblioteca.

//contante To Do, precisa de texto, update e delete.
//retorna
//texto(EX:. visibilidade)
//icons
//BiEdit(imagem do quadrado com lapis) ao clicar acontece o "Update Mode". atualizando
//AiFillDelete(imagem da lixeira) ao clicar acontece o "Delete to do". deletando
const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div> 
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

//sei la que porra é essa aqui embaixo.
export default ToDo;

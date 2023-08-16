"use client"
import { ModalProdutos } from "@/components/modalProdutos";
import { familiaDadinho } from "./produtos";
import { useState } from "react";

export default function Home() {

  const [carrinho, setCarrinho] = useState([])

  return (
    <>

      <main className="p-10 text-xs w-[1000px]">
        <div className="flex w-full bg-gray-200">
          <img className="w-[180px] h-[170px] border-2 border-black border-b-0 border-r-0" src="https://www.dadinhooriginal.com.br/wp-content/uploads/2016/02/BONECO-COM-LOGO-1.png" />
          <div className="flex-col w-full">
            <div className="bg-gray-100 p-2 align-middle border-2 border-black text-red-700 font-bold">
              DOCE SABOR INDÚSTRIA E COMÉRCIO DE PRODUTOS ALIMENTÍCIOS EIRELI</div>
            <div className="bg-gray-100 p-2 align-middle border-2 border-black border-t-0 font-bold">
              CNPJ : 07.175.867/0002-08 - INSCRIÇÃO ESTADUAL :  143.154.297.110</div>
            <div className="bg-gray-100 p-2 align-middle border-2 border-black border-t-0">
              Rua Monsenhor Abreu, 73 - Pari - São Paulo - SP - CEP: 03035-115</div>
            <div className="bg-gray-100 p-2 align-middle border-2 border-black border-t-0">
              ADM DE VENDAS  (11) 2612-6270  Whastapp (11) 98365-0691</div>
            <div className="bg-gray-100 p-2 align-middle border-2 border-black border-t-0 border-b-0 text-red-700 font-semibold">
              pedidos@dsabor.com.br ou pedidos@dadinhooriginal.com.br</div>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-gray-100 p-2 align-middle border-2 border-black border-t-2 flex gap-2">
            <div className="font-bold ">CÓDIGO:</div>
            <div className="border-black border-r-2 pr-2">RESPOSTA</div>
            <div className="font-bold">RAZÃO SOCIAL:</div>
            <div className="break-normal">RESPOSTA</div>
          </div>
          <div className="bg-gray-100 p-2 w-full align-middle border-2 border-black border-t-0 flex gap-2">
            <div className="font-bold">CNPJ:</div>
            <div className="border-black border-r-2 pr-2">RESPOSTA</div>
            <div className="font-bold">INSCR. EST:</div>
            <div>RESPOSTA</div>
          </div>
          <div className="bg-gray-100 p-2 align-middle border-2 border-black border-t-0 flex gap-2">
            <div className="font-bold">RUA:</div>
            <div className="w-full">RESPOSTA</div>
          </div>
          <div className="bg-gray-100 p-2 align-middle border-2 border-black border-t-0 flex gap-2">
            <div className="font-bold">BAIRRO:</div>
            <div className="border-black border-r-2 pr-2 w-full">RESPOSTA</div>
            <div className="font-bold">CIDADE:</div>
            <div className=" border-black border-r-2 pr-2">RESPOSTA</div>
            <div className="font-bold">ESTADO:</div>
            <div className="">RESPOSTA</div>
          </div>
          <div className="bg-gray-100 p-2 align-middle border-2 border-black border-t-0 flex gap-2">
            <div className="font-bold">CEP:</div>
            <div className="border-black border-r-2 pr-2 w-1/4">RESPOSTA</div>
            <div className="font-bold">TELEFONE:</div>
            <div className=" border-black border-r-2 pr-2 w-1/4">RESPOSTA</div>
            <div className="font-bold">TELEFONE:</div>
            <div className=" border-black border-r-2 pr-2 w-1/4">RESPOSTA</div>
            <div className="font-bold">Fax:</div>
            <div className="w-1/4">RESPOSTA</div>
          </div>
          <div className="bg-gray-100 w-full p-2 align-middle border-2 border-black border-t-0 flex gap-2">
            <div className="font-bold w-auto whitespace-nowrap">E-Mail:</div>
            <div className="border-black border-r-2 pr-2 w-full">RESPOSTA</div>
            <div className="font-bold w-auto whitespace-nowrap">N° SUFRAMA:</div>
            <div className="w-full">RESPOSTA</div>
          </div>
          <div className="bg-gray-100 w-full p-2 align-middle border-2 border-black border-t-0 flex gap-2 flex-nowrap">
            <div className="font-bold w-auto">Transporte:</div>
            <div className="border-black border-r-2 pr-2 w-full">RESPOSTA</div>
            <div className="font-bold w-auto">Telefone:</div>
            <div className="w-full">RESPOSTA</div>
          </div>
          <div className="bg-gray-100 w-full p-2 align-middle border-2 border-black border-t-0 flex gap-2 flex-nowrap">
            <div className="font-bold w-auto whitespace-nowrap">CONDIÇÃO DE PAGAMENTO:</div>
            <div className="border-black border-r-2 pr-2 w-full">RESPOSTA</div>
            <div className="font-bold w-auto whitespace-nowrap">Descontos em %:</div>
            <div className="w-full">RESPOSTA</div>
          </div>
        </div>
        <div className="flex justify-center items-center m-10">
          <button className="bg-green-300 p-4 border-black border-2 font-bold text-lg">Adicionar Produtos</button>
        </div>
        <div className="bg-gray-100 p-2 align-middle border-2 border-black border-t-2 flex gap-2">
          <div className="border-black border-r-2 pr-2 font-bold w-[60px] whitespace-nowrap text-center">CÓDIGO</div>
          <div className="border-black border-r-2 pr-2 font-bold w-[300px] whitespace-nowrap text-center">PRODUTO</div>
          <div className="border-black border-r-2 pr-2 font-bold w-[60px] whitespace-nowrap text-center">PESO</div>
          <div className="border-black border-r-2 pr-2 font-bold w-[90px] whitespace-nowrap text-center">EMBALAGEM</div>
          <div className="border-black border-r-2 pr-2 font-bold w-[80px] whitespace-nowrap text-center">C.FISCAL</div>
          <div className="border-black border-r-2 pr-2 font-bold w-[80px] whitespace-nowrap text-center">QTDE</div>
          <div className="border-black border-r-2 pr-2 font-bold w-[80px] whitespace-nowrap text-center">PREÇO</div>
          <div className="font-bold w-[120px] whitespace-nowrap text-center">TOTAL</div>
        </div>
        {familiaDadinho.map(e => <div key={e.produto} className="bg-gray-100 p-2 align-middle border-2 border-black border-t-2 flex gap-2 [&:nth-child(even)]:bg-gray-300" >
          <div className="border-black border-r-2 border-t-0 pr-2 font-bold w-[60px] whitespace-nowrap text-center">{e.codigo}</div>
          <div className="border-black border-r-2 border-t-0 pr-2 font-bold w-[300px] whitespace-nowrap text-center">{e.produto}</div>
          <div className="border-black border-r-2 border-t-0 pr-2 font-bold w-[60px] whitespace-nowrap text-center">{e.peso}</div>
          <div className="border-black border-r-2 border-t-0 pr-2 font-bold w-[90px] whitespace-nowrap text-center">{e.embalagem}</div>
          <div className="border-black border-r-2 border-t-0 pr-2 font-bold w-[80px] whitespace-nowrap text-center">{e.ClassFiscal}</div>
          <div className="border-black border-r-2 border-t-0 pr-2 font-bold w-[80px] whitespace-nowrap text-center">{e.qtde}</div>
          <div className="border-black border-r-2 border-t-0 pr-2 font-bold w-[80px] whitespace-nowrap text-center">{e.preco}</div>
          <div className="border-t-0 font-bold w-[120px] whitespace-nowrap text-center">{e.total}</div>
        </div>)}
      </main>
      {/* <ModalProdutos /> */}
    </>
  )
}

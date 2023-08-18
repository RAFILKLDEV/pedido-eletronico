"use client"
import { ModalProdutos } from "@/components/modalProdutos";
import { familiaDadinho } from "./produtos";
import { useState } from "react";

export default function Home() {

  const [carrinho, setCarrinho] = useState([])

  const [cnpj, setCnpj] = useState("")
  const [razaoSocial, setRazaoSocial] = useState("")
  const [cnaeCodigo, setCnaeCodigo] = useState("")
  const [inscEstadual, setInscEstadual] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")
  const [cep, setCep] = useState("")
  const [telefone, setTelefone] = useState("")
  const [telefone2, setTelefone2] = useState("")
  const [fax, setFax] = useState("")
  const [cnpjEmail, setCnpjEmail] = useState("")
  const [email, setEmail] = useState("")
  const [XMLEmail, setXMLEmail] = useState("")
  const [dados, setDados] = useState({
    NOME: undefined,
    NUMERO: undefined,
    CEP: undefined,
    ["CNAE PRINCIPAL CODIGO"]: undefined,
    ["RAZAO SOCIAL"]: undefined,
    COMPLEMENTO: undefined,
    DDD: undefined,
    EMAIL: undefined,
    TELEFONE: undefined,
    BAIRRO: undefined,
    MUNICIPIO: undefined,
    LOGRADOURO: undefined,
    SETOR: undefined,
    STATUS: undefined,
    UF: undefined,
  })

  function validarInput() {
    if (cnpj.length === 14) {
      validarCnpj()
    }
  }

  async function validarCnpj() {
    const request = `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}`
    const response = await fetch(request).then(res => res.json())
    console.log("aqui", response)
    setRazaoSocial(response["RAZAO SOCIAL"])
    setCnaeCodigo(response["CNAE PRINCIPAL CODIGO"])
    setLogradouro(`${response.LOGRADOURO} N° ${response.NUMERO}`)
    setBairro(response.BAIRRO)
    setCidade(response.MUNICIPIO)
    setEstado(response.UF)
    setCep(response.CEP)
    setTelefone(response.TELEFONE)
    setCnpjEmail(response.EMAIL)
  }

  return (
    <>
      {/* <ModalProdutos /> */}
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
            <div className="font-bold">CÓDIGO:</div>
            <input className="border-black border-r-2 pr-2" value={cnaeCodigo} onChange={e => setCnaeCodigo(e.target.value)}></input>
            <div className="font-bold whitespace-nowrap">RAZÃO SOCIAL:</div>
            <input className="break-normal w-full" value={razaoSocial} onChange={e => setRazaoSocial(e.target.value)}></input>
          </div>
          <div className="bg-gray-100 p-2 w-full align-middle border-2 border-black border-t-0 flex gap-2">
            <div className="font-bold">CNPJ:</div>
            <input className="border-black border-r-2 pr-2 text-center bg-inherit font-bold" value={cnpj}
              onChange={e => setCnpj(e.target.value)} onBlur={validarInput} />
            <div className="font-bold whitespace-nowrap">INSCR. ESTADUAL:</div>
            <input className="w-full" value={inscEstadual} onChange={e => setInscEstadual(e.target.value)}></input>
          </div>
          <div className="bg-gray-100 p-2 align-middle border-2 border-black border-t-0 flex gap-2">
            <div className="font-bold">RUA:</div>
            <input className="w-full border-black border-r-2" value={logradouro} onChange={e => setLogradouro(e.target.value)}></input>
            <div className="font-bold">BAIRRO:</div>
            <input className="border-black border-r-2 pr-2 w-full" value={bairro} onChange={e => setBairro(e.target.value)}></input>
            <div className="font-bold">CIDADE:</div>
            <input className=" border-black border-r-2 pr-2 w-96 whitespace-nowrap" value={cidade} onChange={e => setCidade(e.target.value)}></input>
            <div className="font-bold">ESTADO:</div>
            <input className="w-52" value={estado} onChange={e => setEstado(e.target.value)}></input>
          </div>

          <div className="bg-gray-100 p-2 align-middle border-2 border-black border-t-0 flex gap-2">
            <div className="font-bold">CEP:</div>
            <input className="border-black border-r-2 pr-2 w-1/4" value={cep} onChange={e => setCep(e.target.value)}></input>
            <div className="font-bold">TELEFONE:</div>
            <input className=" border-black border-r-2 pr-2 w-1/4" value={telefone} onChange={e => setTelefone(e.target.value)}></input>
            <div className="font-bold">TELEFONE:</div>
            <input className=" border-black border-r-2 pr-2 w-1/4" value={telefone2} onChange={e => setTelefone2(e.target.value)}></input>
            <div className="font-bold">FAX:</div>
            <input className="w-1/4" value={fax} onChange={e => setFax(e.target.value)}></input>
          </div>
          <div className="bg-gray-100 w-full p-2 align-middle border-2 border-black border-t-0 flex gap-2">
            <div className="font-bold w-auto whitespace-nowrap">EMAIL:</div>
            <input className="border-black border-r-2 pr-2 w-full" value={cnpjEmail} onChange={e => setCnpjEmail(e.target.value)}></input>
            <div className="font-bold w-auto whitespace-nowrap">EMAIL:</div>
            <input className="border-black border-r-2 pr-2 w-full" value={email} onChange={e => setEmail(e.target.value)}></input>
            <div className="font-bold w-auto whitespace-nowrap">EMAIL P/ XML:</div>
            <input className="w-full" value={XMLEmail} onChange={e => setXMLEmail(e.target.value)}></input>
          </div>
        </div>

        {/* TRIBUTOS */}

        <div className="mt-4 bg-gray-100 w-full p-2 align-middle border-2 border-black border-t-2 flex gap-2 flex-nowrap">
          <div className="font-bold w-auto">Transportadora:</div>
          <div className="border-black border-r-2 pr-2 w-full">RESPOSTA</div>
          <div className="font-bold w-auto">Telefone:</div>
          <div className="w-full">RESPOSTA</div>
        </div>
        <div className="flex w-full bg-gray-200 ">
          <div className="bg-gray-100 w-full p-2 align-middle border-2 border-black border-t-0 flex gap-2 flex-nowrap">
            <div className="font-bold w-auto whitespace-nowrap">CONDIÇÃO DE PAGAMENTO:</div>
            <div className="border-black border-r-2 pr-2 w-full">RESPOSTA</div>
            <div className="font-bold w-auto whitespace-nowrap">Descontos em %:</div>
            <div className="w-full">RESPOSTA</div>
          </div>
        </div>
        <div className="flex w-full bg-gray-200 ">
          <div className="bg-gray-100 w-full p-2 align-middle border-2 border-black border-t-0 flex gap-2 flex-nowrap">
            <div className="font-bold w-auto whitespace-nowrap">TIPO DE VENDA:</div>
            <select className="border-black border-r-2 pr-2 w-full">
              <option>VENDA</option>
              <option>BONIFICAÇÃO</option>
            </select>
            <div className="font-bold w-auto whitespace-nowrap">CANAL:</div>
            <select className="border-black border-r-2 pr-2 w-full">
              <option>ATACADO</option>
              <option>AUTO SERVIÇO</option>
              <option>CASH & CARRY</option>
              <option>DISTRIBUIDOR</option>
              <option>ESPECIAL</option>
              <option>CESTEIRO</option>
              <option>EXPORTAÇÃO</option>
            </select>
            <div className="font-bold w-auto whitespace-nowrap">TRIBUTAÇÃO:</div>
            <select className="border-black border-r-2 pr-2 w-full">
              <option>SIMPLES</option>
              <option>RPA</option>
            </select>
            <div className="font-bold w-auto whitespace-nowrap">SUBST. TRIBUTÁRIA:</div>
            <select className="border-black border-r-2 pr-2 w-full">
              <option>SIM</option>
              <option>NÃO</option>
            </select>
          </div>
        </div>

        {/* BOTÃO ADICIONAR PRODUTOS */}

        <div className="flex justify-center items-center m-10">
          <button className="bg-green-300 p-4 border-black border-2 font-bold text-lg">Adicionar Produtos</button>
        </div>

        {/* TABELA DE PRODUTOS */}

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

    </>
  )
}

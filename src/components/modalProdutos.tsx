import { familiaBombons, familiaCobertos, familiaDadinho, familiaDoceSaber, familiaGamadinho, familiaInstitucional, familiaPacoca, familiaWaferELanchinhos, lista } from "@/app/produtos";
import { Produto } from "./produto";
import { useEffect, useState } from "react";

export function ModalProdutos() {

    interface ListaProdutosType {
        codigo: number;
        produto: string;
        peso: string;
        embalagem: string;
        ClassFiscal: number;
        preco: number;
        total: number;
        qtde: number;
    }

    const [list, setList] = useState<ListaProdutosType[]>([])
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState<ListaProdutosType[]>([])

    function ordenarPorNome([...array]: { produto: string }[]) {
        array.sort((a, b) => {
            if (a.produto > b.produto) {
                return 1
            }

            if (a.produto < b.produto) {
                return -1
            }

            return 0
        })

        return array
    }

    function filtro(array: ListaProdutosType[]) {
        filter.map(e => {
            array.map(el => {
                if (e.produto == el.produto) {
                    return <Produto produto={e} />
                }
            })
        })
    }

    useEffect(() => {
        const listaFlat = [...lista].flat()
        ordenarPorNome(listaFlat)
        setList(listaFlat)
    }, [])

    return <div className=" flex flex-col z-10 absolute min-h-screen w-full top-0 bg-yellow-600 p-10 gap-12">
        <div className="w-full flex items-center justify-center gap-4">
            <img className="w-32" src="https://www.dadinhooriginal.com.br/wp-content/uploads/2016/02/BONECO-COM-LOGO-1.png" />
            <img className="w-32" src="https://supermercadobomdemais.com.br/wp-content/uploads/2020/09/Wafer-Dadinho-Trad.png" />
            <img className="w-32" src="https://www.dadinhooriginal.com.br/wp-content/uploads/2016/02/BONECO-COM-LOGO-1.png" />
            <img className="w-32" src="https://www.dadinhooriginal.com.br/wp-content/uploads/2016/02/BONECO-COM-LOGO-1.png" />
            <img className="w-32" src="https://www.dadinhooriginal.com.br/wp-content/uploads/2016/02/BONECO-COM-LOGO-1.png" />
            <img className="w-32" src="https://www.dadinhooriginal.com.br/wp-content/uploads/2016/02/BONECO-COM-LOGO-1.png" />
            <img className="w-32" src="https://www.dadinhooriginal.com.br/wp-content/uploads/2016/02/BONECO-COM-LOGO-1.png" />
        </div>
        <div className="flex items-center justify-center gap-2">
            <input value={search} onChange={e => setSearch(e.target.value)} className="w-80 text-center p-1 placeholder-black font-bold border-black border-2" placeholder="Pesquisa..." />
        </div>
        <div className="w-full grid grid-cols-5 items-center justify-center gap-4 flex-wrap">
            {
                list.map(e => {
                    console.log(Boolean([]))
                    if (search !== "") {
                        if (e.produto.toLowerCase().includes(search.toLowerCase())) {
                            console.log("includes")
                            return <Produto produto={e} />
                        }

                        return
                    }
                    console.log("não")

                    return <Produto produto={e} />
                })
            }
        </div>
    </div>
}
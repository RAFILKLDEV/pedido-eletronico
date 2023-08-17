export function Produto({ produto, filter, setFilter }: {
    produto: {
        produto: string, peso: string,
        preco: number, embalagem: string, familia: string
    },
    filter: string
    setFilter: Function
}) {


    return <div className="h-56 w-52 flex flex-col items-center bg-gray-200 border-black border-2 px-2 py-2">
        <img className="w-20" src="https://www.dadinhooriginal.com.br/wp-content/uploads/2016/02/BONECO-COM-LOGO-1.png" />
        <div className="w-full text-center font-bold">{produto?.produto}</div>
        <div className="font-semibold text-orange-700 text-sm">{produto?.peso}</div>
        <div className="font-semibold text-blue-700 text-sm">{produto?.embalagem}</div>
        <div className="h-full flex gap-1">
            <div className="font-semibold">R$</div>
            <div className="text-green-800 font-semibold">{produto?.preco}</div>
        </div>
    </div>
}
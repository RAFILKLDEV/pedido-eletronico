export function Produto({ produto }: { produto: { produto: string, peso: string, preco: string } }) {
    return <div className="flex flex-col gap-0.5 items-center bg-gray-200 border-black border-2 px-10 py-2">
        <img className="w-20" src="https://www.dadinhooriginal.com.br/wp-content/uploads/2016/02/BONECO-COM-LOGO-1.png" />
        <div className="w-32 text-center">{produto?.produto}</div>
        <div>{produto?.peso}</div>
        <div>{produto?.preco}</div>
    </div>
}
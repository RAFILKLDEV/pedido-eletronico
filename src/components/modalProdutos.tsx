import { familiaBombons } from "@/app/produtos";
import { Produto } from "./produto";

export function ModalProdutos() {
    return <div className="flex flex-col z-10 absolute min-h-fit w-full top-0 bg-yellow-600 p-10 gap-12">
        <div className="w-full flex items-center justify-center gap-4">
            <img className="w-32" src="https://www.dadinhooriginal.com.br/wp-content/uploads/2016/02/BONECO-COM-LOGO-1.png" />
            <img className="w-32" src="https://www.dadinhooriginal.com.br/wp-content/uploads/2016/02/BONECO-COM-LOGO-1.png" />
            <img className="w-32" src="https://www.dadinhooriginal.com.br/wp-content/uploads/2016/02/BONECO-COM-LOGO-1.png" />
            <img className="w-32" src="https://www.dadinhooriginal.com.br/wp-content/uploads/2016/02/BONECO-COM-LOGO-1.png" />
            <img className="w-32" src="https://www.dadinhooriginal.com.br/wp-content/uploads/2016/02/BONECO-COM-LOGO-1.png" />
            <img className="w-32" src="https://www.dadinhooriginal.com.br/wp-content/uploads/2016/02/BONECO-COM-LOGO-1.png" />
            <img className="w-32" src="https://www.dadinhooriginal.com.br/wp-content/uploads/2016/02/BONECO-COM-LOGO-1.png" />
        </div>
        <div className="w-full flex items-center justify-center gap-4 flex-wrap">
            {familiaBombons.map(e => <Produto key={e.produto} produto={e} />)}
        </div>

    </div>
}
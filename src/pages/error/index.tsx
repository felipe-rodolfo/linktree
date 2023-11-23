import { Link } from "react-router-dom";

export function ErrorPage(){
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center text-white">
      <h1 className="font-bold text-4x1 mb-4 white">Página não encontrada</h1>
      <p className="mb-4">Você caiu em uma página que não existe!</p>

      <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to="/">
        Voltar para home
      </Link>
    </div>
  )
}
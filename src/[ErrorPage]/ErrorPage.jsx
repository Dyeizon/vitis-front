import { useRouteError } from "react-router-dom";
import './ErrorPage.css';
import logo from './../img/logo.png';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <a href="/">
        <button type="button" class="absolute top-0 animate-bounce left-0 m-7 flex items-center justify-center w-1/2 px-5 py-2 text-sm font-bold text-white transition-colors duration-200 bg-green-800 border rounded-lg gap-x-2 sm:w-auto">
          <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          <span>Voltar</span>
      </button>
      </a>
      
      <img src={logo} alt="Logo" />
      <h1>Ops...</h1>
      <p>Occoreu um erro!</p>
      <span className="text-gray-600">[{error.status}] {error.statusText || error.message}</span>
      <span className="text-red-300 text-sm">{error.data}</span>
    </div>
  );
}
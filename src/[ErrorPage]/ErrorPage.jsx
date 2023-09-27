import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Ops...</h1>
      <p>Occoreu um erro!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex gap-4 min-h-screen items-center justify-center flex-col"
    >
      <h1 className="font-bold text-4xl">Oops!</h1>
      <p className="font-medium text-xl">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="font-bold text-xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

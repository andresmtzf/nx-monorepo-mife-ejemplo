import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ErrorDisplay = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error';
  }

  return (
    <div>
      <h1>Ooops!</h1>
      <p>Ha ocurrido un error</p>
      <i>{errorMessage}</i>
    </div>
  );
};

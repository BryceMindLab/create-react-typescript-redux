export function tap(prom, successH, errorH) {
  return prom
    .then(
      response => {
        successH(response);
        return response;
      },
      error => {
        errorH(error);
        throw error;
      }
    )
    .catch(error => {
      errorH(error);
    });
}

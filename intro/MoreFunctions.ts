function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never{
  throw new Error(errmsg);
}

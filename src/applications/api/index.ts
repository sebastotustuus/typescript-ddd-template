import Server from "./server";

const handleError = (e: any) => {
    console.log(e);
    process.exit(1);
}

try {
    new Server().start().catch(handleError)
} catch (error) {
    handleError(error)
}

process.on('uncaughtException', err => {
  console.log('[UncaughtException]: ', err);
  process.exit(1);
});
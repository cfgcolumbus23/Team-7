export function printHelloOnServer() {
    if (import.meta.env.SSR) {
        console.log('Hello from server')
    }
}
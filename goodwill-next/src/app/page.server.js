export function printHello() {
    // only print on the server
    if (typeof window === 'undefined') {
        console.log('Hello World!')
    }
}
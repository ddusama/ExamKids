export const validateCedula = (ci) => {
    ci = ci.trim()
    if (typeof ci === 'number') {
        ci = ci.toString();
    }
    if (typeof ci !== 'string') {
        throw new Error('El número de cédula debe ser un string');
    }
    if (!isNumber(ci)) return false;
    if (ci.length !== 10) return false;

    const code = parseInt(ci.substring(0, 2));
    if (code <= 0 || (code >= 25 && code !== 30)) return false;

    const digits = ci.split('').map(Number);
    const verifier = digits.pop();
    const calculated = digits.map((d, i) => {
        let computed = (i + 1) % 2 === 0 ? d : d * 2
        return computed <= 9 ? computed : computed - 9
    }).reduce((p, c, i) => p + c, 0) % 10
    return calculated === 0 ? 0 : 10 - calculated === verifier;
}

function isNumber(value) {
    return !isNaN(parseInt(value));
}

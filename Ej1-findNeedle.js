const findNeedle = (palabra, palabrota) => {
    for (let i = 0; i < palabra.length; i++) {
        if (palabra.slice(i + i palabrota.length) === palabrota) {
            return i;
        }
    }
    return -1;
}
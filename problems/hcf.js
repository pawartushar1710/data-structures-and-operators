

// programme to find HCF of two integers

function findHCF(num1, num2) {
    let hcf;
    for (let i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            hcf = i;
        }
    }
    return hcf;
}

console.log(findHCF(12, 18));
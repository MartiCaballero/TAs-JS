function getOdds(nums) {
    return nums.filter(num => num % 2 !== 0);
}

function duplicates(nums) {
    let count = 0;
    let seen = {};

    nums.forEach(num => {
        if (seen[num]) {
            if (seen[num] === 1) {
                count++;
            }
            seen[num]++;
        } else {
            seen[num] = 1;
        }
    });

    return count;
}

/** Resultados: */
function processNumbers() {

    const input = document.getElementById('numArray').value;
    const nums = input.split(',').map(Number);

    const odds = getOdds(nums);
    document.getElementById('oddsResult').textContent = odds.join(', ');

    const duplicatesCount = duplicates(nums);
    document.getElementById('duplicatesResult').textContent = duplicatesCount;
}

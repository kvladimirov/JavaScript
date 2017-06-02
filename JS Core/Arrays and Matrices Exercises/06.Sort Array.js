function sortArray(input) {
    input.sort().sort((a, b) => a.length-b.length);
    console.log(input.join('\n'));
}
sortArray(['alpha', 'beta', 'gamma']);
sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArray(['test', 'deny', 'dzny', 'omen', 'Default']);

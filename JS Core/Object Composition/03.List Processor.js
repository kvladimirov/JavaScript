function listProcessor(commands) {
    let processor = (function () {
        let temp = [];

        function add(item) {
            temp.push(item);
        }

        function remove(item) {
            temp = temp.filter(e => e != item);
        }

        function toString() {
            return temp.join(', ');
        }

        function print() {
            console.log('' + temp);
        }

        return {add, remove, print};
    })();

    for (let command of commands) {
        let [operation, argument] = command.trim().split(/\s+/);
        processor[operation](argument);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);
function votingSystem(action) {
    let that = this;
    let patcher = (function () {
        function upvote() {
            that.upvotes++;
        }

        function downvote() {
            that.downvotes++;
        }

        function fakeRecords(num) {
            return 0.25 * num;
        }

        function calculateRating() {
            let totalVotes = that.upvotes + that.downvotes;
            if (totalVotes >= 10) {
                if (that.upvotes / totalVotes > 0.66) {
                    return 'hot';
                } else if (that.upvotes - that.downvotes >= 0 && that.upvotes > 100 || that.downvotes > 100) {
                    return 'controversial';
                } else if (that.upvotes - that.downvotes < 0) {
                    return 'unpopular';
                }
            }

            return 'new';
        }

        function score() {
            let up = that.upvotes;
            let down = that.downvotes;

            let totalScore = that.upvotes - that.downvotes;
            if (that.upvotes + that.downvotes > 50) {
                let additionalVotes = fakeRecords(Math.max(that.upvotes, that.downvotes));
                up = Math.ceil(that.upvotes + additionalVotes);
                down = Math.ceil(that.downvotes + additionalVotes);
            }

            let rating = calculateRating();

            return [up, down, totalScore, rating];
        }

        return {upvote, downvote, score};
    })();

    return patcher[action]();

}

var forumPost = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaaa',
    upvotes: 100,
    downvotes: 100,
};


votingSystem.call(forumPost, 'upvote');
votingSystem.call(forumPost, 'downvote');
console.log(votingSystem.call(forumPost, 'score'));
for(let i = 0; i < 50; i++) {
    votingSystem.call(forumPost, 'downvote');
}
console.log(votingSystem.call(forumPost, 'score'));
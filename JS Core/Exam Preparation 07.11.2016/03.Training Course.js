class TrainingCourse{
    constructor(title,trainer){
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    addTopic(title,date){
        let currentTopic = {
            title: title,
            date: date
        };
        this.topics.push(currentTopic);
        this.topics.sort((a,b) => a['date'] - b['date']);
        return this;
    }

    get firstTopic(){
        return this.topics[0];
    }
    get lastTopic(){
        return this.topics[this.topics.length-1];
    }

    toString(){
        let heading = `Course "${this.title}" by ${this.trainer}`;
        let topicsStr = '';

        for(let topic of this.topics){
            topicsStr += `\n * ${topic['title']} - ${topic['date']}`
        }

        if(this.topics.length === 0){
            return heading + '\n';
        }
        else{
            return heading + topicsStr;
        }

    }
}

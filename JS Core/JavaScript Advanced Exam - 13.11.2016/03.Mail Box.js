class MailBox {
    constructor(){
        this.collection  = [];
        this.messageCount = 0;
    }

    addMessage(subject, text){
        this.collection .push([subject, text]);
        //noinspection JSAnnotator
        this.messageCount++;
        return this;
    }
    deleteAllMessages(){
        this.collection = [];
        // while(this.collection .length > 0){
        //     this.collection.pop();
        //     this.messageCount--;
        // }
    }

    findBySubject(substr){
        let result = [];
        for(let [subj, text] of this.collection){
            for(let i = 0; i < subj.length; i++){
                let str = '' + subj[i] + subj[i+1];
                if (str === substr){
                    let obj = {
                        subject: subj,
                        text: text
                    };
                    result.push(obj)
                }
            }


        }
        return result;
    }

    toString(){
        let result = '';
        if (this.collection.length > 0){
            for(let [subj, text] of this.collection){
                result += ` * [${[subj]}] ${text}\n`;
            }
        }else{
            result += ` * (empty mailbox)`;
        }
        return result;
    }
    messageCount(){
        return this.messageCount;
    }
}
let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("New mailbox:\n" +
    new MailBox().addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());





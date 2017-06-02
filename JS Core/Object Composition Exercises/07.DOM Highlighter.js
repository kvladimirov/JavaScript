function domHighlight(selector) {

    let start = $(selector);
    let maxDepth = 0;
    let maxElement ='';
    
    function setDepth(depth, element) {
        if (depth > maxDepth){
            maxDepth = depth;
            maxElement = element;
        }

        let children = $(element).children();
        children.each((index,element) => setDepth(depth + 1, element));
    }
    
    setDepth(1,start);
    
    let htmlElement = $(maxElement);
    htmlElement.addClass('highlight');
    while(maxDepth){
        maxDepth--;
    
        htmlElement.addClass('highlight');
        htmlElement = htmlElement.parent();
    }
}

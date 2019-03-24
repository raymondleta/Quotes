export class Quote {
    public showAuthor:boolean;
    constructor(
        public id: number,
        public quote: string,
        public author: string,
        public completeDate:Date
    ){
        this.showAuthor=false
    }
}


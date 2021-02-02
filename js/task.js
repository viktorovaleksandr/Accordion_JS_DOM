class Accordion {
    constructor(container) {
        this.container = container;
        this.accordion = {};

        this.accordionAddClass();
        this.createEventToogleAccordion();
        this.removeClassActive(this.accordionItem);
    }
    accordionAddClass() {
        const list = this.container.querySelector('.list');
        this.accordion = list.children;

        Array.from(this.accordion).map(item => {
            item.classList.add('accordion');
        });
    }
    createEventToogleAccordion() {
        this.container.addEventListener("click", (event) => {
                    
           if (event.target.classList.contains('accordion')) {
                const accordionItem =  event.target;
                accordionItem.classList.toggle('active');
                
                this.removeClassActive(accordionItem);       
           } 
        });               
    }  
    removeClassActive(accordionItem) {
            
        Array.from(this.accordion).forEach(item => {
            if (item != accordionItem) {
                item.classList.remove('active');
            }
        });
    }
}

new Accordion(document.getElementById("container"));


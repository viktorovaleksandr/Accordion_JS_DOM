class Accordion {
    constructor(container) {
        this.container = container;

        this.addClass();
        this.createEventToogleListener();
        this.removeClassActive(this.currentItem);
    }

    addClass() {
        const divList = this.container.firstElementChild;
        const listItems = divList.children;

        Array.from(listItems).map(item => {
            item.classList.add('accordion-item');
        });
    }

    createEventToogleListener() {

    const accordionMenuLists = this.container.querySelectorAll('.accordion-item');

        this.container.addEventListener("click", (event) => {
           if (event.target.classList.contains('accordion-item')) {
              const menuItem =  event.target;
               menuItem.classList.toggle('active');
                
                this.removeClassActive(menuItem);       
           } 
        });
    }  

    removeClassActive(MenuItem) {

        const accordionHeaders = this.container.querySelectorAll('.accordion-item');

        Array.from(accordionHeaders).forEach(item => {
            if (item != MenuItem) {
                item.classList.remove('active');
            }
        });
    }
}

new Accordion(document.getElementById("container"));


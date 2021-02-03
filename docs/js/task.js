class Accordion {
    constructor(container) {
        this.container = container;

        this.accordionAddClass();
        this.createEventToogleTitle();
        this.removeClassActive(this.accordionTitleClick);
    }
    accordionAddClass() {
        const list = this.container.querySelector('.list');
        this.accordionCollection = list.children;

        Array.from(this.accordionCollection).map(accordion => {
            accordion.classList.add('accordion');
        });
    }
    createEventToogleTitle() {
        const titles = this.container.querySelectorAll('.title');
        
        titles.forEach(title => {
            title.addEventListener("click", (event) => {
                
                const accordionTitleClick = event.target.nextElementSibling;
                accordionTitleClick.classList.toggle('active');
                
                this.removeClassActive(accordionTitleClick);        
            });  
        });                
    }  
    removeClassActive(accordionTitle) {
        const accordionBodies = this.container.querySelectorAll('.body');
          
            accordionBodies.forEach(body => {
                if (body != accordionTitle) 
                body.classList.remove('active');    
            });
        }
    }
new Accordion(document.getElementById("container"));


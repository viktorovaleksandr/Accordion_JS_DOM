class Accordion {
    constructor(container) {
        this.container = container;

        this.accordionAddClass();
        this.addTitleClickEventListener();
        this.removeActiveClasses(this.accordionItemBody);
    }
    accordionAddClass() {
        const list = this.container.querySelector('.list');

        Array.from(list).map(accordion => {
            accordion.classList.add('accordion');
        });
    }
    addTitleClickEventListener() {
        const titles = this.container.querySelectorAll('.title');
        
        titles.forEach(title => {
            title.addEventListener("click", (event) => {
                
                const accordionItemBody = event.target.nextElementSibling;
                accordionItemBody.classList.toggle('active');
                
                this.removeActiveClasses(accordionItemBody);        
            });  
        });                
    }  
    removeActiveClasses(accordionItemBody) {
        const accordionBodies = this.container.querySelectorAll('.body');
          
            accordionBodies.forEach(body => {
                if (body !== accordionItemBody) 
                body.classList.remove('active');    
            });
        }
    }
new Accordion(document.getElementById("container"));


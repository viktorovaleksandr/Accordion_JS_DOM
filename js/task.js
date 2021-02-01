class Accordion {
    constructor(container) {
        this.container = container;
        this.currentItem = null;
        this.listItems = [];

        this.init();
        this.createUlMenu();
        this.createEventToogleListener();
        this.removeClassActive(this.currentItem);
    }

    init() {
        const list = this.container.querySelector('.list');
        list.classList.add('hide');
        const listItems = this.container.querySelectorAll('.list-item');
        this.listItems = listItems;
    }
    createUlMenu() {
            
        const accordionMenuLists = Array.from(this.listItems).map(item => {

            const titleName = item.querySelector('.title').textContent;
            const bodyName = item.querySelector('.body').textContent;
            
            const accordionMenuLi = document.createElement('li');
            accordionMenuLi.className = 'accordion-menu-item';

            const accordionMenuDiv = document.createElement('div');
            accordionMenuDiv.className = '.body';

            accordionMenuLi.textContent = titleName;
            accordionMenuDiv.textContent = bodyName;
            
            accordionMenuLi.append(accordionMenuDiv);
            return accordionMenuLi;
        });

        const ulAccordionMenu = document.createElement('ul');
        ulAccordionMenu.className = 'accordion-menu';

        ulAccordionMenu.append(...accordionMenuLists);
        this.container.prepend(ulAccordionMenu);
    }

    createEventToogleListener() {

    const accordionMenuLists = this.container.querySelectorAll('.accordion-menu-item');
            
        this.container.addEventListener("click", (event) => {
           if (event.target.classList.contains('accordion-menu-item')) {
              const menuItem =  event.target;
               menuItem.classList.toggle('active');
                
                this.removeClassActive(menuItem);       
           } 
        });
    }  

    removeClassActive(tabMenuItemId) {

        const accordionHeaders = this.container.querySelectorAll('.accordion-menu-item');

        Array.from(accordionHeaders).forEach(item => {
            if (item != tabMenuItemId) {
                item.classList.remove('active');
            }
        });
    }
}

new Accordion(document.getElementById("container"));

// 2) мы к html доступа не имеем?
// 1) нужно ли вытягивать из базис листа текст из боди и тайтла?
// 3) проверка на валидность?


    // Need functions that will select my scrollSection and insert img elements of my default dinner images from a folder

    const gallery = document.querySelector('.gallery');
    const scrollSection = document.querySelector('.scrollSection');
    const menuCategory = document.querySelector('#menuCategory');


    const dinnerGallery = [
        'dinner/dinner 1.png',
        'dinner/dinner 2.png',
        'dinner/dinner 3.png',
        'dinner/dinner 4.png',
    ]

    const appetizerGallery = [
        'appetizers/appetizer 1.png',
        'appetizers/appetizer 2.png',
        'appetizers/appetizer 3.png',
        'appetizers/appetizer 4.png',
    ]

    const dessertGallery = [
        'desserts/dessert 1.png',
        'desserts/dessert 2.png',
        'desserts/dessert 3.png',
        'desserts/dessert 4.png',
    ]


    //Displays Default Dinner Gallery and Title
    dinnerGallery.forEach(img => {
        let image = document.createElement('img');
        image.src = img;
        image.classList.add('card','active');
        scrollSection.appendChild(image);

        menuCategory.innerText = 'Dinner';
        menuCategory.classList.add('active') 
    });




    //Need listeners that will allow arrows to load next or prev set of photos for next or prev menu category should also change gallery title
    const leftArrow = document.querySelector('#leftArrow');
    const rightArrow = document.querySelector('#rightArrow');

    leftArrow.addEventListener('click', prevGallery);
    rightArrow.addEventListener('click', nextGallery);

    function nextGallery(){
        clearGallery();
        // clearCategory();

        //Conditional Adding of Gallery Photo Set Without "active" class
        if (menuCategory.innerText == "Dinner") {
            appetizerGallery.forEach(img => {
                let image = document.createElement('img');
                image.src = img;
                image.classList.add('card')
                scrollSection.appendChild(image);
                //Update Menu Category
                menuCategory.innerText = 'Appetizers'; 
            });
        } else if (menuCategory.innerText == "Appetizers") {
            dessertGallery.forEach(img => {
                let image = document.createElement('img');
                image.src = img;
                image.classList.add('card')
                scrollSection.appendChild(image);
                //Update Menu Category
                menuCategory.innerText = 'Desserts'; 
            });
        } else {
            dinnerGallery.forEach(img => {
                let image = document.createElement('img');
                image.src = img;
                image.classList.add('card');
                scrollSection.appendChild(image);
                //Update Menu Category
                menuCategory.innerText = 'Dinner'; 
            });
        }

        // Grabs All Cards and adds "active" class
        const cards = document.querySelectorAll('.card');
        function addActive(){
            cards.forEach(card =>{
                scrollSection.querySelector('.card')
                card.classList.add('active')
            })
        }

        // Delays adding of "active" class to apply transition
        setTimeout(addActive)
    }

    function prevGallery(){
        clearGallery();

        //Conditional Adding of Gallery Photo Set Without "active" class
        if (menuCategory.innerText == "Dinner") {
            dessertGallery.forEach(img => {
                let image = document.createElement('img');
                image.src = img;
                image.classList.add('card')
                scrollSection.appendChild(image);
                //Update Menu Category
                menuCategory.innerText = 'Desserts'; 
            });
        } else if (menuCategory.innerText == "Appetizers") {
            dinnerGallery.forEach(img => {
                let image = document.createElement('img');
                image.src = img;
                image.classList.add('card')
                scrollSection.appendChild(image);
                //Update Menu Category
                menuCategory.innerText = 'Dinner'; 
            });
        } else {
            appetizerGallery.forEach(img => {
                let image = document.createElement('img');
                image.src = img;
                image.classList.add('card');
                scrollSection.appendChild(image);
                //Update Menu Category
                menuCategory.innerText = 'Appetizers'; 
            });
        }

        // Grabs All Cards and adds "active" class
        const cards = document.querySelectorAll('.card');
        function addActive(){
            cards.forEach(card =>{
                scrollSection.querySelector('.card')
                card.classList.add('active')
            })
        }

        // Delays adding of "active" class to apply transition
        setTimeout(addActive)
    }

    function clearGallery(){
        let allCards = document.querySelectorAll('.card');
        allCards.forEach(card => {
            scrollSection.removeChild(card)
        });
    }


    // Can be worked to possibly add fade in for Category Title
    // function clearCategory (){
    //     let categoryName = document.querySelector('#menuCategory');
    //     document.querySelector('#one').removeChild(categoryName)
    // }


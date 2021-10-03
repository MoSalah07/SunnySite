// Show Menu
const myOpen = document.querySelector( '.open-icon' ),
    myClose = document.querySelector( '.close-icon' ),
    myList = document.querySelector( 'ul.list' );

if(myOpen) {
    myOpen.addEventListener( 'click', _ => { 
        myList.style.top = '0';
    } );
}

if (myClose) {
    myClose.addEventListener( 'click', _ => { 
        myList.style.top = '-220px';
    } );
}


// ============================ Scroll top =====================
const scrollIcon = document.querySelector( '.scroll-icon' );

scrollIcon.addEventListener( 'click', _ => { 
    window.scrollTo( 0, 0 );
} );

window.addEventListener( 'scroll', _ => { 
    window.scrollY >= 690 ? scrollIcon.style.right = '.5rem' : scrollIcon.style.right = '-2rem';
} );


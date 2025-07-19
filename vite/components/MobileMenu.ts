export default class MobileMenu 
{
    overlay:HTMLDivElement;
    mobileMenuBtn: HTMLButtonElement;

    constructor ()
    {
        this.overlay = document.querySelector ('[data-overlay]') as HTMLDivElement;
        this.mobileMenuBtn = document.querySelector ('[data-mobile-menu-btn]') as HTMLButtonElement;

        this.mobileMenuBtn.addEventListener ('click', this.toggle.bind (this));
    }


    toggle ()
    {
        this.overlay.classList.toggle (this.overlay.classList[0] + '--open');
        this.mobileMenuBtn.classList.toggle (this.mobileMenuBtn.classList[0] + '--open');
    }


}
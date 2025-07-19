import Page from "./pages/Page";
import MobileMenu from "./components/MobileMenu";
import ContactForm from "./components/ContactForm";

new MobileMenu ();
new ContactForm (document.querySelector ('[data-contact-form]') as HTMLFormElement);

new Page ('contact');
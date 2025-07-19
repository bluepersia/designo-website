
function validateFullName (val:string)
{
    return val.includes (' ') && val.length >= 5;
}


function validateEmail (val:string)
{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

function validatePhone (val:string)
{
    return /^\+?[0-9\s\-().]{7,20}$/.test(val);
}

function validateMsg (val:string)
{
    return val.length >= 7;
}

interface InputBlock
{
    input: HTMLInputElement;
    textArea:HTMLTextAreaElement;
    errorText: HTMLSpanElement;
}

export default class ContactForm 
{
    el:HTMLFormElement;
    nameBlock: InputBlock;
    emailBlock: InputBlock;
    phoneBlock: InputBlock;
    msgBlock: InputBlock;
    valid:boolean = true;
    constructor (el:HTMLFormElement)
    {
        this.el = el;
        this.nameBlock = this.getInputBlock ('name');
        this.emailBlock = this.getInputBlock ('email');
        this.phoneBlock = this.getInputBlock ('phone');
        this.msgBlock = this.getInputBlock ('msg');

        el.addEventListener ('submit', this.submit.bind (this));
    }

    getInputBlock (name:string)
    {
        const inputDiv = this.el.querySelector (`[data-${name}]`);

        if (!inputDiv)
            throw Error (`Input block ${name} doesn't exist.`);

        const inputBlock:InputBlock = {
            input: inputDiv.querySelector ('input') as HTMLInputElement,
            textArea: inputDiv.querySelector ('textarea') as HTMLTextAreaElement,
            errorText: inputDiv.querySelector ('[data-error-text]') as HTMLSpanElement
        }

        return inputBlock;
    }

    submit (e:SubmitEvent)
    {
        e.preventDefault ();

        const formData = new FormData (e.target as HTMLFormElement);
        

        const name = formData.get ('name')?.toString() || '';
        const email = formData.get ('email')?.toString() || '';
        const phone = formData.get ('phone')?.toString() || '';
        const msg = formData.get ('msg')?.toString() || '';

        this.valid = true;

        this.resetBlock (this.nameBlock);
        if(!validateFullName (name))
            this.invalidate (this.nameBlock, 'Must be valid full name');

        this.resetBlock (this.emailBlock);
        if (!validateEmail(email))
            this.invalidate (this.emailBlock, 'Must be valid email')

        this.resetBlock (this.phoneBlock)
        if(!validatePhone (phone))
            this.invalidate (this.phoneBlock, 'Must be valid phone');

        this.resetBlock (this.msgBlock)
        if (!validateMsg (msg))
            this.invalidate (this.msgBlock, 'Too short');


        if (this.valid)
        {
            console.log ("Submit form");
        }
    }

    invalidate (inputBlock: InputBlock, msg:string)
    {
        this.valid = false;
        inputBlock.errorText.textContent = msg;
       
        const parent = inputBlock.errorText.parentElement;
        if(!parent)
            return;

        parent.classList.add (parent.classList[0] + '--active');
    }

    resetBlock (inputBlock: InputBlock)
    {
        const parent = inputBlock.errorText.parentElement;
        if(!parent)
            return;

        parent.classList.remove (parent.classList[0] + '--active');
    }
}
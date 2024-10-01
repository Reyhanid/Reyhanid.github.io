let $=document;
let H2elem=$.getElementById('H2Element')
let Name=$.getElementById('Name')
let Email=$.getElementById('Email')
let Message=$.getElementById('Message')
let NameLabel=$.getElementById('NameLabel')
let EmalLabel=$.getElementById('EmalLabel')
let MessageLabel=$.getElementById('MessageLabel')
let SendBtn=$.getElementById('Send-Btn')
let La=$.getElementById('Change-language')
let H3elem=$.getElementById('H3-btn')
let Form=$.getElementById('Form')

let FAlan = true

function Change(){
    if (FAlan) {
        document.body.style.fontFamily='shabnam'
        H2elem.innerHTML='ارتباط با من'
        Name.placeholder='نام'
        Email.placeholder='ایمیل'
        Message.placeholder='پیام'
        NameLabel.innerHTML='نام شما :'
        EmalLabel.innerHTML='ایمیل شما :'
        MessageLabel.innerHTML='پیام شما:'
        SendBtn.innerHTML='ارسال پیام'
        Form.style.direction='rtl'
        H3elem.innerHTML='EN'
        La.style.flexDirection='row-reverse'
        FAlan = false
    } else {
        H2elem.innerHTML='Reyhaneh✨'
        H2elem.innerHTML='Contact Me'
        Name.placeholder='Name'
        Email.placeholder='Email'
        Message.placeholder='Message'
        NameLabel.innerHTML='Your Name :'
        EmalLabel.innerHTML='Your Email :'
        MessageLabel.innerHTML='Your Message :'
        SendBtn.innerHTML='Send Message'
        Form.style.direction='ltr'
        H3elem.innerHTML='FA'
        La.style.flexDirection='row'
        FAlan = true
    }
    
}
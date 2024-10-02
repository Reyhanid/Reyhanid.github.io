let $=document;
let SuccessMessage=$.getElementById('SuccessMessage')
let La=$.getElementById('Change-language')
let H3elem=$.getElementById('H3-btn')
let FAlan = true

function Change(){
    if (FAlan) {
        document.body.style.fontFamily='shabnam'
        SuccessMessage.innerHTML='ارسال موفقیت آمیز :)'
        H3elem.innerHTML='EN'
        La.style.flexDirection='row-reverse'
        FAlan = false
    } else {
        SuccessMessage.innerHTML='Message sent successfully :)'
        H3elem.innerHTML='FA'
        La.style.flexDirection='row'
        FAlan = true
    }
    
}
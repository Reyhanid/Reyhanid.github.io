let $=document;
let SuccessMessage=$.getElementById('SuccessMessage')
let La=$.getElementById('Change-language')
let H3elem=$.getElementById('H3-btn')
let Return=$.getElementById('Return')
let FAlan = true

function Change(){
    if (FAlan) {
        document.body.style.fontFamily='shabnam'
        SuccessMessage.innerHTML='ارسال موفقیت آمیز :)'
        Return.innerHTML='بازگشت به صفحه اصلی'
        SuccessMessage.style.fontSize='32px'
        H3elem.innerHTML='EN'
        La.style.flexDirection='row-reverse'
        FAlan = false
    } else {
        SuccessMessage.innerHTML='Message sent successfully :)'
        Return.innerHTML='Return to main page'
        SuccessMessage.style.fontSize='21px'
        H3elem.innerHTML='FA'
        La.style.flexDirection='row'
        FAlan = true
    }
    
}
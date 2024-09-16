let $=document;
let H2elem=$.getElementById('H2Name')
let Breakelem=$.getElementById('Break')
let Descriptionelem=$.getElementById('Description')
let Eduelem=$.getElementById('Edu')
let CVelem=$.getElementById('CV')
let Portelem=$.getElementById('Port')
let La=$.getElementById('Change-language')
let H3elem=$.getElementById('H3-btn')
let Pelem=$.querySelector('.p-About')

let FAlan = true

function Change(){
    if (FAlan) {
        document.body.style.fontFamily='shabnam'
        H2elem.innerHTML='✨ریحانه'
        Descriptionelem.innerHTML='تازه کار Front-End توسعه دهنده '
        Descriptionelem.style.fontFamily='B Nazanin'
        Breakelem.innerHTML='علاقه مند به یادگیری طراحی و توسعه وب (front-end & & back-end)'
        Breakelem.style.fontFamily='B Nazanin'
        Pelem.style.fontFamily='B Nazanin'
        Eduelem.innerHTML='تحصیلات'
        CVelem.innerHTML='رزومه کاری'
        Portelem.innerHTML='نمونه کار'
        H3elem.innerHTML='EN'
        La.style.flexDirection='row-reverse'
        FAlan = false
    } else {
        H2elem.innerHTML='Reyhaneh✨'
        Descriptionelem.innerHTML='Joniur Front-End developer '
        Descriptionelem.style.fontFamily='Arial, Helvetica, sans-serif'
        Breakelem.style.fontFamily='Arial, Helvetica, sans-serif'
        Breakelem.innerHTML='Interested in learning web design and development (front-end && back-end)'
        Pelem.style.fontFamily='Arial, Helvetica, sans-serif'
        Eduelem.innerHTML='Education'
        CVelem.innerHTML='Curriculum vitae'
        Portelem.innerHTML='Portfolio'
        H3elem.innerHTML='FA'
        La.style.flexDirection='row'
        FAlan = true
    }
    
}
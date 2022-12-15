var elForm = document.querySelector('.from')
var elInp = document.querySelector('.inp')
var alBtn = document.querySelector('.btn')


elForm.addEventListener('submit', function(evn){
    evn.preventDefault()

    var input =  elInp.value 

if( input=='ovqat' || input=='choy' || input=='mastava'  || input=='non' || input=='piyola' || input=='fastfood' || input=="lag'mon"){
   alert('bajarildi')
}
else if( input=='somsa' || input=='kokchoy' || input=='osh'  || input=='dimlama' || input=='tarelka' || input=='fastfood' || input=="lag'mon"){
   alert('bajarildi')
}
else{
   alert('buyurtmada hotolik')
}





    elInp.value = ''
})
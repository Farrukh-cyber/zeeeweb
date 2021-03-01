function adddata(){
    var name= document.getElementById("nme")
    var email=document.getElementById("mail")
    var message=document.getElementById("msg")
    if(email.value==""&&name.value==""&&message.value==""){
        alert("please fill all the fields")
    }
    else{
        var key=firebase.database().ref().push().key
        var user={
            key:key,
            name:name.value,
            email:email.value,
            message:message.value
        }
        firebase.database().ref("client/"+key).push(user)
        name.value=null;
        email.value=null;
        message.value=null;

    }

}
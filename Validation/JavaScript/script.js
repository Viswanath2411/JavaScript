function Validate(){
    var fname = document.getElementById("firstname").value;
    var regx = /^[A-Z][a-z]{2,30}$/

    if(fname.trim() == "")
    {
        document.getElementById("name").innerHTML = "First name is required"
        document.getElementById("name").style.visibility = "visible"
        document.getElementById("name").style.color = "red"
        document.getElementById("firstname").style.border = "solid 2px red"
    }
    else if(regx.test(fname))
    {
        document.getElementById("name").innerHTML = "Valid Name"
        document.getElementById("name").style.visibility = "visible"
        document.getElementById("name").style.color = "green"
        document.getElementById("firstname").style.border = "solid 2px green"
    }
    else{
        document.getElementById("name").innerHTML = "Invalid Name"
        document.getElementById("name").style.visibility = "visible"
        document.getElementById("name").style.color = "red"
        document.getElementById("firstname").style.border = "solid 2px red"
    }

    var name = document.getElementById("fathername").value;
    var regx = /^[A-Z][a-z]{2,30}$/

    if(fname.trim() == "")
    {
        document.getElementById("name1").innerHTML = "Last name is required"
        document.getElementById("name1").style.visibility = "visible"
        document.getElementById("name1").style.color = "red"
        document.getElementById("fathername").style.border = "solid 2px red"
    }
    else if(regx.test(fname))
    {
        document.getElementById("name1").innerHTML = "Valid Name"
        document.getElementById("name1").style.visibility = "visible"
        document.getElementById("name1").style.color = "green"
        document.getElementById("fathername").style.border = "solid 2px green"
    }
    else{
        document.getElementById("name1").innerHTML = "Invalid Name"
        document.getElementById("name1").style.visibility = "visible"
        document.getElementById("name1").style.color = "red"
        document.getElementById("fathername").style.border = "solid 2px red"
    }

    var em = document.getElementById("mail").value;
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,3})$/

    if(em.trim() == "")
    {
        document.getElementById("mail1").innerHTML = "Email ID is required"
        document.getElementById("mail1").style.visibility = "visible"
        document.getElementById("mail1").style.color = "red"
        document.getElementById("mail").style.border = "solid 2px red"
    }
    else if(regx.test(em))
    {
        document.getElementById("mail1").innerHTML = "Valid"
        document.getElementById("mail1").style.visibility = "visible"
        document.getElementById("mail1").style.color = "green"
        document.getElementById("mail").style.border = "solid 2px green"
    }
    else{
        document.getElementById("mail1").innerHTML = "Please enter valid email Id"
        document.getElementById("mail1").style.visibility = "visible"
        document.getElementById("mail1").style.color = "red"
        document.getElementById("mail").style.border = "solid 2px red"
    }

    var dt = document.getElementById("date").value;
    var regx = /^([0-2][1-9]|[3][0-1])(-)([0][1-9]|[1][0-2])(-)([0-9]{4})$/

    if(dt.trim() == "")
    {
        document.getElementById("date1").innerHTML = "Required"
        document.getElementById("date1").style.visibility = "visible"
        document.getElementById("date1").style.color = "red"
        document.getElementById("date").style.border = "solid 2px red"
    }
    else if(regx.test(dt))
    {
        document.getElementById("date1").innerHTML = "Valid"
        document.getElementById("date1").style.visibility = "visible"
        document.getElementById("date1").style.color = "green"
        document.getElementById("date").style.border = "solid 2px green"
    }
    else{
        document.getElementById("date1").innerHTML = "Invalid"
        document.getElementById("date1").style.visibility = "visible"
        document.getElementById("date1").style.color = "red"
        document.getElementById("date").style.border = "solid 2px red"
    }

    var num = document.getElementById("mob").value;
    var regx = /^[6-9][0-9]{9}$/

    if(num.trim() == "")
    {
        document.getElementById("mob1").innerHTML = "Required"
        document.getElementById("mob1").style.visibility = "visible"
        document.getElementById("mob1").style.color = "red"
        document.getElementById("mob").style.border = "solid 2px red"
    }
    else if(regx.test(num))
    {
        document.getElementById("mob1").innerHTML = "Valid"
        document.getElementById("mob1").style.visibility = "visible"
        document.getElementById("mob1").style.color = "green"
        document.getElementById("mob").style.border = "solid 2px green"
    }
    else{
        document.getElementById("mob1").innerHTML = "Please enter Valid Mobile number"
        document.getElementById("mob1").style.visibility = "visible"
        document.getElementById("mob1").style.color = "red"
        document.getElementById("mob").style.border = "solid 2px red"
    }

    var add1 = document.getElementById("address1").value;
    var regx = /^[a-zA-Z0-9\.-]{2,50}$/

    if(add1.trim() == "")
    {
        document.getElementById("line1").innerHTML = "Required"
        document.getElementById("line1").style.visibility = "visible"
        document.getElementById("line1").style.color = "red"
        document.getElementById("address1").style.border = "solid 2px red"
    }
    else if(regx.test(add1))
    {
        document.getElementById("line1").innerHTML = "Valid"
        document.getElementById("line1").style.visibility = "visible"
        document.getElementById("line1").style.color = "green"
        document.getElementById("address1").style.border = "solid 2px green"
    }
    else{
        document.getElementById("line1").innerHTML = "Invalid"
        document.getElementById("line1").style.visibility = "visible"
        document.getElementById("line1").style.color = "red"
        document.getElementById("address1").style.border = "solid 2px red"
    }

    var add2 = document.getElementById("address2").value;
    var regx = /^[a-zA-Z0-9\.-]{2,50}$/

    if(add2.trim() == "")
    {
        document.getElementById("line2").innerHTML = "Required"
        document.getElementById("line2").style.visibility = "visible"
        document.getElementById("line2").style.color = "red"
        document.getElementById("address2").style.border = "solid 2px red"
    }
    else if(regx.test(add2))
    {
        document.getElementById("line2").innerHTML = "Valid"
        document.getElementById("line2").style.visibility = "visible"
        document.getElementById("line2").style.color = "green"
        document.getElementById("address2").style.border = "solid 2px green"
    }
    else{
        document.getElementById("line2").innerHTML = "Invalid"
        document.getElementById("line2").style.visibility = "visible"
        document.getElementById("line2").style.color = "red"
        document.getElementById("address2").style.border = "solid 2px red"
    }

    var cty = document.getElementById("city").value;
    var regx = /^[a-z]{2,30}$/

    if(cty.trim() == "")
    {
        document.getElementById("city1").innerHTML = "Required"
        document.getElementById("city1").style.visibility = "visible"
        document.getElementById("city1").style.color = "red"
        document.getElementById("city").style.border = "solid 2px red"
    }
    else if(regx.test(cty))
    {
        document.getElementById("city1").innerHTML = "Valid"
        document.getElementById("city1").style.visibility = "visible"
        document.getElementById("city1").style.color = "green"
        document.getElementById("city").style.border = "solid 2px green"
    }
    else{
        document.getElementById("city1").innerHTML = "Invalid"
        document.getElementById("city1").style.visibility = "visible"
        document.getElementById("city1").style.color = "red"
        document.getElementById("city").style.border = "solid 2px red"
    }

    var state = document.getElementById("option").value;

    if(state.trim() == "state")
    {
        document.getElementById("state").innerHTML = "Required"
        document.getElementById("state").style.visibility = "visible"
        document.getElementById("state").style.color = "red"
        
    }

    var pin = document.getElementById("pin").value;
    var regx = /^[0-9]{6}$/

    if(pin.trim() == "")
    {
        document.getElementById("pin1").innerHTML = "Required"
        document.getElementById("pin1").style.visibility = "visible"
        document.getElementById("pin1").style.color = "red"
        document.getElementById("pin").style.border = "solid 2px red"
    }
    else if(regx.test(pin))
    {
        document.getElementById("pin1").innerHTML = "Valid"
        document.getElementById("pin1").style.visibility = "visible"
        document.getElementById("pin1").style.color = "green"
        document.getElementById("pin").style.border = "solid 2px green"
    }
    else{
        document.getElementById("pin1").innerHTML = "Invalid"
        document.getElementById("pin1").style.visibility = "visible"
        document.getElementById("pin1").style.color = "red"
        document.getElementById("pin").style.border = "solid 2px red"
    }

    var add1 = document.getElementById("paddress1").value;
    var regx = /^[a-zA-Z0-9\.-]{2,50}$/

    if(add1.trim() == "")
    {
        document.getElementById("pline1").innerHTML = "Required"
        document.getElementById("pline1").style.visibility = "visible"
        document.getElementById("pline1").style.color = "red"
        document.getElementById("paddress1").style.border = "solid 2px red"
    }
    else if(regx.test(add1))
    {
        document.getElementById("pline1").innerHTML = "Valid"
        document.getElementById("pline1").style.visibility = "visible"
        document.getElementById("pline1").style.color = "green"
        document.getElementById("paddress1").style.border = "solid 2px green"
    }
    else{
        document.getElementById("pline1").innerHTML = "Invalid"
        document.getElementById("pline1").style.visibility = "visible"
        document.getElementById("pline1").style.color = "red"
        document.getElementById("paddress1").style.border = "solid 2px red"
    }

    var add2 = document.getElementById("paddress2").value;
    var regx = /^[a-zA-Z0-9\.-]{2,50}$/

    if(add2.trim() == "")
    {
        document.getElementById("pline2").innerHTML = "Required"
        document.getElementById("pline2").style.visibility = "visible"
        document.getElementById("pline2").style.color = "red"
        document.getElementById("paddress2").style.border = "solid 2px red"
    }
    else if(regx.test(add2))
    {
        document.getElementById("pline2").innerHTML = "Valid"
        document.getElementById("pline2").style.visibility = "visible"
        document.getElementById("pline2").style.color = "green"
        document.getElementById("paddress2").style.border = "solid 2px green"
    }
    else{
        document.getElementById("pline2").innerHTML = "Invalid"
        document.getElementById("pline2").style.visibility = "visible"
        document.getElementById("pline2").style.color = "red"
        document.getElementById("paddress2").style.border = "solid 2px red"
    }

    var cty = document.getElementById("pcity").value;
    var regx = /^[a-z]{2,30}$/

    if(cty.trim() == "")
    {
        document.getElementById("pcity1").innerHTML = "Required"
        document.getElementById("pcity1").style.visibility = "visible"
        document.getElementById("pcity1").style.color = "red"
        document.getElementById("pcity").style.border = "solid 2px red"
    }
    else if(regx.test(cty))
    {
        document.getElementById("pcity1").innerHTML = "Valid"
        document.getElementById("pcity1").style.visibility = "visible"
        document.getElementById("pcity1").style.color = "green"
        document.getElementById("pcity").style.border = "solid 2px green"
    }
    else{
        document.getElementById("pcity1").innerHTML = "Invalid"
        document.getElementById("pcity1").style.visibility = "visible"
        document.getElementById("pcity1").style.color = "red"
        document.getElementById("pcity").style.border = "solid 2px red"
    }
    var state1 = document.getElementById("option1").value;

    if(state1.trim() == "state")
    {
        document.getElementById("pstate").innerHTML = "Required"
        document.getElementById("pstate").style.visibility = "visible"
        document.getElementById("pstate").style.color = "red"
        
    }
    

    var pin = document.getElementById("ppin").value;
    var regx = /^[0-9]{6}$/

    if(pin.trim() == "")
    {
        document.getElementById("ppin1").innerHTML = "Required"
        document.getElementById("ppin1").style.visibility = "visible"
        document.getElementById("ppin1").style.color = "red"
        document.getElementById("ppin").style.border = "solid 2px red"
    }
    else if(regx.test(pin))
    {
        document.getElementById("ppin1").innerHTML = "Valid"
        document.getElementById("ppin1").style.visibility = "visible"
        document.getElementById("ppin1").style.color = "green"
        document.getElementById("ppin").style.border = "solid 2px green"
    }
    else{
        document.getElementById("ppin1").innerHTML = "Invalid"
        document.getElementById("ppin1").style.visibility = "visible"
        document.getElementById("ppin1").style.color = "red"
        document.getElementById("ppin").style.border = "solid 2px red"
    }

    var pic = document.getElementById("photo").value;

    if(pic.trim() == "")
    {
        document.getElementById("photo1").innerHTML = "Upload your profile photo"
        document.getElementById("photo1").style.visibility = "visible"
        document.getElementById("photo1").style.color = "red"
        
    }
    

}

function sameAddress()
{
    var add1 = document.getElementById("address1").value;
    paddress1.value = add1

    var add2 = document.getElementById("address2").value;
    paddress2.value = add2

    var city = document.getElementById("city").value;
    pcity.value = city

    var state = document.getElementById("option").value;
    option1.value = state

    var pin = document.getElementById("pin").value;
    ppin.value = pin
}
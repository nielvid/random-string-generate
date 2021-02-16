

const arrayofCodes = ["AHYUSR", "BDLYWP", "SDCNBO", "EKPWEN", "XNFGZV", "GYIKOP", "MBNSJG", "FJLBNH", "KMHGSA", "DSBCXN"]

const randomNumber = Math.floor(Math.random() * arrayofCodes.length)

const userKey = arrayofCodes[randomNumber]
alert(userKey)
console.log(userKey)


const code = prompt("Enter Login Code")
if(userKey ==code){
alert("Login Successful");
}else{
  alert("Unathorized");
}



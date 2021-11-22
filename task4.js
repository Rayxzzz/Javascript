let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborought",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031-x56442",
    website: "hildegard.org"
}

let Mydata = {
    name: "Ray",
    // username: "Ray",c
    email: "rayj@gmail.com",
    hobby: "gaming",
}

let newData = {
    ...data, ...Mydata,
}


const { street, city } = data.address;
console.log(newData)
console.log(street)
console.log(city)




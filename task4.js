data = {
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

Mydata = {
    name: "Ray",
    username: "Ray",
    email: "rayj@gmail.com",
    hobby: "gaming",
}

newData = {
    ...data, ...Mydata,
}


const { street, city } = data.address;
console.log(street)




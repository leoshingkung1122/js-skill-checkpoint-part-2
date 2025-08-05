// เริ่มเขียนโค้ดตรงนี้

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
}

async function filterDataByUserLength(length) {
    try{
        const userData = await getUsers()
        const userFilterLength = userData.filter((user) => user.name.length > length);
        const userNameFilter = userFilterLength.map((user)=> user.name);
        return console.log(userNameFilter);
    }catch (error) {
        console.log(error);
    }
    
}

filterDataByUserLength(17);
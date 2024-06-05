const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
        // day: '5',
        // month: '6',
        // year: '1985'
    }
}

const date= new Date();
const currentDay = date.getDate();
const currentMonth = date.getMonth()+1;


if (parseInt(user.born.day) === currentDay && parseInt(user.born.month) === currentMonth){
    console.log(user.firstName, user.lastName, 'ma dziś urodziny!!');
}else{
    console.log(user.firstName, user.lastName, 'nie ma dziś urodzin');
}
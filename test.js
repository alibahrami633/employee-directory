function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object        
            return 0;
        }

        const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}

let list = [
    {
        "id": 0,
        "employeeName": "Zoe Zalatan",
        "phone": "000444111",
        "email": "zoe@zalatan.com",
        "position": "Receptionist"
    },
    {
        "id": 1,
        "employeeName": "Ali Bahrami",
        "phone": "000111222",
        "email": "ali@bahrami.com",
        "position": "CEO"
    },
    {
        "id": 2,
        "employeeName": "John Smith",
        "phone": "000111333",
        "email": "john@smith.com",
        "position": "HR Manager"
    },
    {
        "id": 3,
        "employeeName": "John Doe",
        "phone": "000111444",
        "email": "john@doe.com",
        "position": "Marketing Manager"
    },
    {
        "id": 4,
        "employeeName": "Mary Smith",
        "phone": "000111555",
        "email": "mary@smith.com",
        "position": "Sales Representative"
    },
    {
        "id": 5,
        "employeeName": "Sara Doe",
        "phone": "000111666",
        "email": "sara@doe.com",
        "position": "IT Consultant"
    },
    {
        "id": 6,
        "employeeName": "Rod Philips",
        "phone": "000111222",
        "email": "rod@philips.com",
        "position": "Help Desk Support"
    }
];

console.log(list.sort(compareValues("email", "asc")));
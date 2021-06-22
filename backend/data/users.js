import bcrypt from 'bcryptjs'
const users =[
    {
        name : 'Sohel rana',
        email: 'rana161305ahmed@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Rasel Ahmed',
        email: 'rasel12345@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
     {
         name: 'Akimul Islam',
         email: 'akim67@gmail.com',
         password: bcrypt.hashSync('123456', 10),
     }
    
]
export default users
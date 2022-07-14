import { Request, Response } from 'express'
import * as users from '../model/users.json'
import { compare } from 'bcrypt'
import { sign } from 'crypto'

const userDB = {
    user: users,
    setUser: function(data: any) { 
        this.user = data 
    }
}

const handleLogin = async (req: Request, res: Response) => {
    const { user, pwd } = req.body
    if(!user || !pwd)
        return res.status(400).json({ message: 'Username and password required'})

    const foundUser = userDB.user.find((person: any) => person.username === user)
    if(!foundUser)
        return res.sendStatus(401)

    const match = await compare(pwd, foundUser.password)
    if(match) {
        const roles = Object.values(foundUser.roles).filter(Boolean)

        const accessToken = sign(
            {

            }
        )
    }
}
import { CookieOptions, Request, Response } from 'express'
import * as users from '../model/users.json'
import { compare } from 'bcrypt'
import { sign } from 'crypto'
import { promises } from 'fs'
import { join } from 'path'

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
                UserInfo: {
                    'username': foundUser.username,
                    roles: roles
                }
            } as any,
            process.env.ACCESS_TOKEN_SECRET as any,
            { expiresIn: '30s'} as any
        )

        const refreshToken = sign(
            { "username": foundUser.username } as any,
            process.env.REFRESH_TOKEN_SECRET as any,
            { expiresIn: '1d' } as any
        )

        const otherUsers = userDB.user.filter((person: any) => person.username !== foundUser.username)
        const currentUser = { ...otherUsers, refreshToken }

        userDB.setUser([...otherUsers, currentUser])

        await promises.writeFile(
            join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(userDB.user)
        )

        const options: CookieOptions = {
            httpOnly: true,
			sameSite: 'none',
			secure: true,
			maxAge: 24 * 60 * 60 * 1000
        }

        res.cookie('jwt', refreshToken, options)
        res.json({ accessToken })
    } else res.sendStatus(401)
}

export default handleLogin
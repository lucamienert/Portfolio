import { NextFunction, Response } from 'express'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()

const verifyJWT = (req: any, res: Response, next: NextFunction) => {
    const authHeader: string | string[] | undefined = req.headers.authorization || req.headers.Authorization
    const header = authHeader as string
    if(!header?.startsWith('Bearer'))
        return res.sendStatus(401)

    const token = header.split(' ')[1]

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as jwt.Secret, (err: any, decoded: any) => {
        if(err)
            return res.sendStatus(403)

        req.user = decoded.UserInfo.username
        req.roles = decoded.UserInfo.roles
        next()
    })
}

export default verifyJWT
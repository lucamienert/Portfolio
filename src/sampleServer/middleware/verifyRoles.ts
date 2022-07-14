import { NextFunction, Request, Response } from "express"

const verifyRoles = (...allowedRoles: any[]) => {
    return (req: any, res: Response, next: NextFunction) => {
        if(!req?.roles)
            return res.sendStatus(401)

        const rolesArray = [...allowedRoles]
        const result = req.roles
            .map((role: any) => rolesArray.includes(role))
            .find((val: any) => val === true)

        if(!result)
            return res.sendStatus(401)

        next()
    }
}

export default verifyRoles
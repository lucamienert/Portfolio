import path, { format } from "path"
import fs from 'fs'

const promises = fs.promises

const logEvents = async (message: string, logName: string) => {
    const logItem = `${message}`

    try {
        if(!fs.existsSync(path.join(__dirname, '..', 'logs')))
            await promises.mkdir(path.join(__dirname, '..', 'logs'))

        await promises.appendFile(path.join(__dirname, '..', 'logs', logName), logItem)
    } catch(err: any) {
        console.error(err.message)
    }
}

export default logEvents
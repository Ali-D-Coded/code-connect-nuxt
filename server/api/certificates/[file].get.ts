import fs from 'node:fs'
import { sendStream } from 'h3'

export default defineEventHandler(async (event) => {
	const file = getRouterParam(event, 'file')
	const path = `./uploads/certificates/${file}`
	return sendStream(event, fs.createReadStream(path))
})
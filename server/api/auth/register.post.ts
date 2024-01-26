import { PrismaClient, User } from "@prisma/client"
import * as argon from "argon2"

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => { 
	try {
		
		const body: User = await readBody(event)
		const hash = await argon.hash(body.password)
		const user = await prisma.user.create({
			data: {
				firstName: body.firstName,
				lastName: body.lastName,
				userName: body.userName,
				email: body.email,
				phone: body.phone,
				password: hash
			}
		})
	  return { user }
	} catch (error: any) {
		console.log({error});
		
		return event.captureError(error,error)
	}
	

})
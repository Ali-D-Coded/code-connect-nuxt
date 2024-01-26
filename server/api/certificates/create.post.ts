import {writeFile} from "fs"
import {type MultiPartData} from "h3"
import { createStorage } from "unstorage";
import fsDriver from "unstorage/drivers/fs";
import {randomUUID} from "crypto"
import { PrismaClient } from "@prisma/client";


const FILE_KEYS = ["name","filename","type","data"]


const storage = createStorage({
  driver: fsDriver({ base: "./uploads/certificates" }),
});

const isFile = (data: MultiPartData) => {
	return Object.keys(data).filter((key) => FILE_KEYS.indexOf(key) !== -1).length === FILE_KEYS.length
}

const parseMultitpart = (data?: MultiPartData[])=> {
const arr = (Array.isArray(data) ? data : []) as MultiPartData[]

const result = arr.reduce((prev:Record<string, any>, curr) => {
	prev[String(curr.name)] = isFile(curr) ? curr : curr.data.toString('utf8')
	return prev
}, {})

return result
}

const saveFile = async (file: MultiPartData) => {
	// console.log("31",{file:file});
	
	const [_mime, ext]= String(file.type).split('/');
	const fileName = randomUUID() + "." + ext;
	// console.log("35",{fileName});

	await storage.setItemRaw(fileName, file.data)
	return fileName
}

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
	try {
		const formData = await readMultipartFormData(event);
		const parsed = parseMultitpart(formData)
    //    console.log({parsed,formData });
		let fileName
		if(parsed.file){
		 fileName = await saveFile(parsed.file)	
		}
		// console.log(parseMultitpart(formData));


		const path = "certificates/" + fileName
		// console.log({file, path});
		const certificate = await prisma.certificates.create({
			data: {
				name: parsed.name,
				url: path,
				userId: parsed.user
			}
		})
		return {
			certificate
		}	
	} catch (error:any) {
		console.log(error.message);
		return error
	}
})
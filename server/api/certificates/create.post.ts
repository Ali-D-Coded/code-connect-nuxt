import {writeFile} from "fs"
import {type MultiPartData} from "h3"
import { createStorage } from "unstorage";
import fsDriver from "unstorage/drivers/fs";
import {randomUUID} from "crypto"


const FILE_KEYS = ["name","filename","type","data"]


const storage = createStorage({
  driver: fsDriver({ base: "./tmp" }),
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
	console.log("35",{fileName});

    await storage.setItemRaw(fileName, file.data)
}

export default defineEventHandler(async (event) => {
	try {
		const formData = await readMultipartFormData(event);
		const parsed = parseMultitpart(formData)
    //    console.log({parsed,formData });

		if(parsed.file){
		await saveFile(parsed.file)	
		}
		console.log(parseMultitpart(formData));

		const file = formData?.find(it => it.name = "file")
		const path = "./public/" + file?.filename
		// console.log({file, path});
		

		return {
			path
		}	
	} catch (error:any) {
		console.log(error.message);
		return error
	}
})
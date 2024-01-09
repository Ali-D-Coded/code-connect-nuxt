
type navitems = {
	url: string,
	name: string,
	icon: any,
	isMenu: boolean,
	isPrivate: boolean
}

export const nav : navitems[] = [
	{url: "/", 				name:"Home",    		icon: "AppstoreOutlined ", 		},
	{url: "/users", 		name:"Users", 			icon: "UsersView", 		},
	{url: "/certificates", 	name:"Certificates", 	icon: "CertificatesView", },
	{url: "/events", 		name:"Events", 			icon: "EventsView", 		},
	
]
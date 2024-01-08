
type navitems = {
	url: string,
	name: string,
	element: ReactElement | any,
	isMenu: boolean,
	isPrivate: boolean
}

export const nav : navitems[] = [
	{url: "/", 				name:"Home",    		element: "HomeView", 		},
	{url: "/users", 		name:"Users", 			element: "UsersView", 		},
	{url: "/certificates", 	name:"Certificates", 	element: "CertificatesView", },
	{url: "/events", 		name:"Events", 			element: "EventsView", 		},
	
]
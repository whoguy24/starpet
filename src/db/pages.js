export function getPage({ id, url, pageArray = pages }) {
    for (const page of pageArray) {
        if ((id && page.id === id) || (url && page.url === url.replace(/\/$/, ""))) {
            return page;
        } else if (page.children) {
            const found = getPage({ id, url, pageArray: page.children });
            if (found) return found;
        }
    }
    return null;
}

export const pages = [
    {
        id: "overview",
        label: "Overview",
        children: [
            {
                id: "dashboard",
                label: "Dashboard",
                url: "/dashboard",
                children: [],
            },
            {
                id: "projects",
                label: "Projects",
                url: "/projects",
                cardPath: "/assets/cards/projects.png",
                iconPath: "/assets/icons/projects.svg",
                children: [
                    {
                        id: "ac",
                        label: "AC",
                        url: "/projects/AC",
                        children: [],
                    },
                    {
                        id: "bobp",
                        label: "BOBP",
                        url: "/projects/bobp",
                        children: [],
                    },
                    {
                        id: "tet",
                        label: "TET",
                        url: "/projects/tet",
                        children: [],
                    },
                ],
            },
            {
                id: "animals",
                label: "Animals",
                url: "/animals",
                cardPath: "/assets/cards/animals.png",
                iconPath: "/assets/icons/animals.svg",
                children: [
                    {
                        id: "dogs",
                        label: "Dogs",
                        url: "/animals/dogs",
                        children: [],
                    },
                    {
                        id: "cats",
                        label: "Cats",
                        url: "/animals/cats",
                        children: [],
                    },
                    {
                        id: "horses",
                        label: "Horses",
                        url: "/animals/horses",
                        children: [],
                    },
                    {
                        id: "livestock",
                        label: "Livestock",
                        url: "/animals/livestock",
                        children: [],
                    },
                    {
                        id: "small_pets",
                        label: "Small Pets",
                        url: "/animals/small-pets",
                        children: [],
                    },
                    {
                        id: "other",
                        label: "Other",
                        url: "/animals/other",
                        children: [],
                    },
                ],
            },
            {
                id: "contacts",
                label: "Contacts",
                url: "/contacts",
                cardPath: "/assets/cards/contacts.png",
                iconPath: "/assets/icons/contacts.svg",
                children: [
                    {
                        id: "owners",
                        label: "Owners",
                        url: "/contacts/owners",
                        children: [],
                    },
                    {
                        id: "professional",
                        label: "Professional",
                        url: "/contacts/professional",
                        children: [],
                    },
                    {
                        id: "crew",
                        label: "Crew",
                        url: "/contacts/crew",
                        children: [],
                    },
                ],
            },
            {
                id: "organizations",
                label: "Organizations",
                url: "/organizations",
                cardPath: "/assets/cards/organizations.png",
                iconPath: "/assets/icons/organizations.svg",
                children: [
                    {
                        id: "shelters",
                        label: "Shelters",
                        url: "/organizations/shelters",
                        children: [],
                    },
                    {
                        id: "clients",
                        label: "Clients",
                        url: "/organizations/clients",
                        children: [],
                    },
                    {
                        id: "services",
                        label: "Services",
                        url: "/organizations/services",
                        children: [],
                    },
                ],
            },
        ],
    },

    {
        id: "account",
        label: "Account",
        children: [
            {
                id: "settings",
                label: "Settings",
                url: "/settings",
                cardPath: "/assets/cards/settings.png",
                iconPath: "/assets/icons/settings.svg",
                children: [],
            },
            {
                id: "logout",
                label: "Log Out",
                url: "/logout",
                cardPath: "/assets/cards/logout.png",
                iconPath: "/assets/icons/logout.svg",
                children: [],
            },
        ],
    },
];

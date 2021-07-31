export type menu = {
	id: number;
	name: string;
	description: string;
};

export type item = {
	id: number;
	name: string;
	description: string;
	price: number
};

export type cart = {
	id: number;
	userId: number;
	name: string;
	price: number
};


interface storeType {
	menuReducer: any,
	menu: menu[];
	item: item[];
}

export default storeType;

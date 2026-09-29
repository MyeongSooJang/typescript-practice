enum OrderStatus {
    Pending = "PENDING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED"
}

const config = {host: "localhost", prot: 3000, debug: true};

type ConfigKey = keyof typeof config;

function getConfig(key: ConfigKey){
    return config[key];
}

interface User {
    id: number;
    name: string;
    email: string;
    pawsword: string;
}

type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
type PickedUser = Pick<User, "id" | "name">;
type UserWithoutPassword = Omit<User, "password">; 
type UserRecord = Record<string, User>; // Map<String, User>와 동일

type UpdateUser = Pick<User, "id"> & Partial<Omit<User, "id">>;
enum OrderStatus {
    Pending = "PENDING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED"
}

const config = {host: "localhost", port: 3000, debug: true};

type ConfigKey = keyof typeof config;

function getConfig(key: ConfigKey){
    return config[key];
}

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
type PickedUser = Pick<User, "id" | "name">;
type UserWithoutPassword = Omit<User, "password">; 
type UserRecord = Record<string, User>; 
type UpdateUser = Pick<User, "id"> & Partial<Omit<User, "id">>;
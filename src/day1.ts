console.log("Hello, TypeScript!");

const name: string = "홍길동";

const age: number = 25;

const isStudent: boolean = true;

const hobbies: string[] = ["코딩", "독서"];

interface User{
    name: string;
    age: number;
    email?: string;
}

const user: User = {
    name: "홍길동",
    age: 25,
};

console.log(user);

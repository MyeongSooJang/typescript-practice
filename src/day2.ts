interface Repository<T> {
    findById(id: number): T;
    findAll(): T[];
    save(entity: T): void;
}

abstract class BaseEntity{
    private id: number;
    private createdAt: Date;
    public abstract isValid(): boolean;

    constructor(id: number, createdAt: Date){
        this.id = id;        
        this.createdAt = createdAt;
    }
}

class User extends BaseEntity{
    private name: string;

    constructor(id: number, createdAt: Date, name: string){
        super(id, createdAt);
        this.name = name;
    }
    
    public isValid(): boolean{
        return this.name.length > 0;
    }
}
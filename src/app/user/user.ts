export class User {
    constructor(_id="",email="",password="",createdAt=""){
        this._id=_id;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt
    }
    _id:string;
    email:string;
    password:string;
    createdAt:string;
}

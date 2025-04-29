export default class Admin{

   adminId:number;
   email:string;
   password:string;
   size:string;

   constructor(
   adminId:number,
   email:string,
   password:string,
   size:string

   ){
    this.adminId=adminId
    this.email=email
    this.password=password
    this.size=size
   }

}
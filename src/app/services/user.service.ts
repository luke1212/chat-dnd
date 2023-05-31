import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { User } from "../model/user.model";


@Injectable({ providedIn: "root" })
export class UserService {
    private users: User[] = [];
    private usersUpdated = new Subject<User[]>();

    constructor(private http: HttpClient) { }

    getUsers() {
        this.http
            .get<{ message: string; users: User[] }>(
                "http://localhost:3000/api/users"
            )
            .subscribe(userData => {
                this.users = userData.users;
                this.usersUpdated.next([...this.users]);
            });
    }

    getUserUpdateListener() {
        return this.usersUpdated.asObservable();
    }

    addUser(name: string, password: string) {
        const user: User = { name: name, password: password };
        this.http
            .post<{ message: string }>("http://localhost:3000/api/posts", user)
            .subscribe(responseData => {
                console.log(responseData.message);
                this.users.push(user);
                this.usersUpdated.next([...this.users]);
            });
    }
}

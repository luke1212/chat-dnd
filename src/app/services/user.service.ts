import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { User } from "../model/user.model";
import { map } from 'rxjs/operators';

@Injectable({ providedIn: "root" })
export class UserService {
    private users: User[] = [];
    private usersUpdated = new Subject<User[]>();

    constructor(private http: HttpClient) { }

    getUsers() {
        this.http
            .get<{ message: string; users: any }>(
                "http://localhost:3000/api/users"
            )
            .pipe(map((postData) => {
                return postData.users.map(user => {
                    return {
                        username: user.username,
                        password: user.password,
                        id: user._id
                    };
                });
            }))
            .subscribe(transformedUserData => {
                this.users = transformedUserData;
                this.usersUpdated.next([...this.users]);
            });
    }

    getUserUpdateListener() {
        return this.usersUpdated.asObservable();
    }

    addUser(id: string, username: string, password: string) {
        const user: User = { id: id, username: username, password: password };
        this.http
            .post<{ message: string }>("http://localhost:3000/api/posts", user)
            .subscribe(responseData => {
                console.log(responseData.message);
                this.users.push(user);
                this.usersUpdated.next([...this.users]);
            });
    }
}

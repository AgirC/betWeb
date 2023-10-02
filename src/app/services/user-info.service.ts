import { Injectable } from '@angular/core';
import { UserInfo } from '../models/user-info.model';
import { BehaviorSubject, Observable, delay, of } from 'rxjs';
import { USER_INFO } from '../mocks/user-info.mock';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {

    private userInfoSubject: BehaviorSubject<UserInfo> = new BehaviorSubject({} as UserInfo);
    public readonly userInfo: Observable<UserInfo> = this.userInfoSubject.asObservable();

    constructor() {
        this.initBetList();
    }

    public initBetList(forceRequest?: boolean): void {
        if (!this.userInfoSubject.getValue().id || forceRequest) {
            //here we should use an http request instead of mock
            setTimeout(() => this.userInfoSubject.next(USER_INFO), 900)
        }
    }

    public changeCurrentCapital(capital: number): void {
        let userInfo: UserInfo = this.userInfoSubject.getValue();
        userInfo.currentCapital = userInfo.currentCapital + capital;
        this.userInfoSubject.next(userInfo);
    }
}
import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import styles from './style.module.scss'
import Button from '../Button'
import { apiRequest } from '../../api/apiRequest';
// import { create } from 'zustand'
import { useUserStore } from '../../store/index'
import { useNavigate } from 'react-router-dom';

function SignInGoogel() {
    //  const [user, setUser] = useState();
    const { login } = useUserStore();
    let nav = useNavigate()

    const checkEmail = (data) => {
        apiRequest({
            method: 'POST',
            path: 'auth/checkEmail',
            body: {
                email: data.email,
                name: data.name,
                picture: data.picture
            },
        }).then(data => {
            console.log(data);
            login({
                member: data.member,
                myActiveChallenge: data.myActiveChallenge,
                myInvites: data.invites
            })
            localStorage.setItem('token', data.token);
            // just send to the navigation page made by shaked
            if (data.myActivChallenge.length > 0) {
                return nav(`/challenge/${data.myActivChallenge?.[0]._id}`)
                // TODO - לבדוק אם יש אתגרים שהוא הוזמן אליהם אבל לא התחבר
                // אם יש - לשלוח לדף של ההתחברות לאתגר join
            }
            if (data.myActivChallenge.length === 0 && data.invites.length > 0) {
                return nav(`/invited/${data.invites?.[0]}`)
            }
            else {
                nav('/CantFindChallenge')
            }
        }).catch(error => {
            console.log(error);
            if (error.response.data.status === 407) {
                nav('/CantFindChallenge')
            }
            console.error(error);

        });
    };

    const fun = (user) => {
        console.log("hi");

        axios
            .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: 'application/json'
                }
            })
            .then(async (res) => {
                checkEmail(res.data);
            })
            .catch((err) => console.log(err, profile, user)
            )
    }


    const googleLogo = <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_297_4003)">
            <path d="M23.8097 12.1984C23.8097 11.3856 23.7236 10.5727 23.6376 9.75977H12.8849V14.3664H18.9924C18.7344 15.8114 17.9602 17.1663 16.7559 17.9793V20.96H20.4549C22.6055 18.8826 23.8098 15.8114 23.8098 12.1986L23.8097 12.1984Z" fill="#4285F4" />
            <path d="M12.8852 23.8508C15.982 23.8508 18.5627 22.7669 20.4552 20.9604L16.7563 17.9797C15.7239 18.7023 14.4336 19.1539 12.8852 19.1539C9.96031 19.1539 7.37961 17.0765 6.51937 14.186H2.7345V17.257C4.71298 21.3217 8.58404 23.8508 12.8852 23.8508Z" fill="#34A853" />
            <path d="M6.51897 14.1859C6.00294 12.7407 6.00294 11.1149 6.51897 9.57931V6.5083H2.73409C1.09954 9.85037 1.09954 13.8246 2.73409 17.2569L6.51897 14.1859Z" fill="#FBBC04" />
            <path d="M12.8849 4.70179C14.5193 4.70179 16.0677 5.33412 17.2721 6.50828L20.5409 3.076C18.4763 1.0888 15.7236 -0.0853637 12.9708 0.00484807C8.66961 0.00484807 4.71264 2.53402 2.82007 6.59864L6.60508 9.66965C7.37926 6.7792 9.95997 4.70179 12.8849 4.70179Z" fill="#EA4335" />
        </g>
        <defs>
            <clipPath id="clip0_297_4003">
                <rect width="24" height="24" fill="white" transform="translate(0.5)" />
            </clipPath>
        </defs>
    </svg>

    const loginG = useGoogleLogin({
        onSuccess: (codeResponse) => {
            fun(codeResponse)
        },

        onError: (error) => console.log('Login Failed:', error)
    });



    return (
        <Button onClick={loginG} >
            <div className={styles.google}>{googleLogo} Continue with Google</div>
        </Button>
    );
}
export default SignInGoogel;


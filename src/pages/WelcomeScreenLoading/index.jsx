
import Logo from '../../components/Logo';
import Title from '../../components/Title';
import { useUserStore } from '../../store';
import styles from './style.module.scss';

export default function WelcomeScreenLoading() {
    const user=useUserStore((state)=>state.user)
    console.log(user);
    const appleLogo = (
        <svg width="20" height="20" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1187 0C15.1746 0 15.2304 0 15.2894 0C15.4264 1.69253 14.7804 2.95719 13.9953 3.87301C13.2249 4.78251 12.17 5.6646 10.4637 5.53076C10.3499 3.86247 10.997 2.69161 11.7811 1.77789C12.5083 0.92636 13.8414 0.168621 15.1187 0Z" fill="white" />
            <path d="M20.2837 17.6169C20.2837 17.6337 20.2837 17.6485 20.2837 17.6643C19.8042 19.1165 19.1203 20.3612 18.2856 21.5162C17.5236 22.5648 16.5899 23.976 14.9227 23.976C13.482 23.976 12.5251 23.0496 11.0486 23.0243C9.48674 22.999 8.62783 23.7989 7.19982 24.0002C7.03647 24.0002 6.87312 24.0002 6.71293 24.0002C5.66432 23.8485 4.81805 23.018 4.20153 22.2698C2.38359 20.0587 0.978769 17.2027 0.717407 13.5478C0.717407 13.1895 0.717407 12.8323 0.717407 12.4739C0.828065 9.85821 2.09904 7.73148 3.78841 6.70079C4.67999 6.15277 5.90566 5.6859 7.27043 5.89457C7.85533 5.9852 8.45288 6.18544 8.97666 6.38357C9.47304 6.57432 10.0938 6.91262 10.6818 6.8947C11.0802 6.88311 11.4765 6.67549 11.878 6.529C13.0541 6.10429 14.2071 5.6174 15.7268 5.84609C17.5531 6.12221 18.8494 6.93369 19.6504 8.1857C18.1054 9.16897 16.8839 10.6507 17.0926 13.1811C17.2781 15.4796 18.6144 16.8244 20.2837 17.6169Z" fill="white" />
        </svg>
    );

    const imagesPerColumn = 6;
    const images = [
        "https://st.depositphotos.com/1224365/2408/i/450/depositphotos_24084839-stock-photo-portrait-of-a-normal-boy.jpg",
        "https://media.istockphoto.com/id/1270770086/photo/commercial-buildings-view-from-low-angle.jpg?s=612x612&w=0&k=20&c=auL9cSRdLJjujIhq7anW0wZi_j-1EzFpv6OhvSBMQQY=",
        "https://www.shutterstock.com/image-photo/collection-generic-labelled-food-tins-260nw-1886476540.jpg",
        "https://media.istockphoto.com/id/1379610301/photo/generic-modern-car-in-front-of-concrete-wall.jpg?s=612x612&w=0&k=20&c=2bqPScG-qvIeAm28_7IdjrIksWK1-dwx-p3ByUw1pbk=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs4Hre8pa6uxsm0swk06_7irWSECq1Ac0Cyg&s",
        "https://nova-live.imgix.net//What%20is%20Coaching-0c6b0d91-054a-46e8-af5f-0f723e1a67b6.png?",
        "https://thesportdigest.com/wp-content/uploads/2020/01/YouthCoachHuddle.jpg",
        "https://2e55097b266855e7f021.cdn6.editmysite.com/uploads/b/2e55097b266855e7f021a5f524ebce2cc48168b93240d5bb487cae4cd411119c/P9030304_1711227303.JPG?width=2400&optimize=medium",
        "https://steamuserimages-a.akamaihd.net/ugc/2039604994527322584/7EBF030DC1E16879E5CEF966DF97A8B192EB61A0/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
        "https://www.dailynews.com/wp-content/uploads/2024/01/AP24005659124231-1.jpg?w=525",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVl8GjV_N0pTcHS23HvJJYKZRl08Rm3AI_A&s",
        "https://m.media-amazon.com/images/I/71xkr86JnCL._AC_UF894,1000_QL80_.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Vpsh8FrEGxScv3i6plF3xRHrpoZDphHh3g&s",
        "https://images.ctfassets.net/2htm8llflwdx/55QdvpJKXQ2Q9OztpBccdT/ee63533d454661bfc1392b80c03a25aa/Shorelight_Student_Daily_Routine.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_UfTfVvErkCTh9gZmdfa9pm4t-CMdyfpew&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnWeeUSFgX5gV6mACSG6i9u_va_yf048iFA&s",
        "https://training.unh.edu/sites/default/files/general/coaching_children_teens_header_image.png",
        "https://images.squarespace-cdn.com/content/v1/57b5ef68c534a5cc06edc769/1629652778253-0S9WM6W37IPU2OCKTJME/GettyImages-1268340740-min.jpg",
        "https://www.theclickcommunity.com/blog/wp-content/uploads/2018/05/Finding-things-in-everyday-life-to-photography-by-Tiffany-Sanford-10.jpg",
        "https://images.ctfassets.net/pdf29us7flmy/5BpF0U4VKwu8S9o68txxTh/3f9b9f87708602c734643f340d3a4b91/wfh-remote-work-from-home-laptop-smiling.jpg?w=720&q=100&fm=jpg",
        "https://www.theclickcommunity.com/blog/wp-content/uploads/2016/01/black-and-white-photo-of-kids-wrestling-around-by-Seija-Kenn-840x561.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6b9zDMzL3DkkxUZHVoFSrL8nJFyvii2kDw&s",
        "https://images.squarespace-cdn.com/content/v1/602b090f6e2e5511b4c407a1/1613666116836-DZ8VAL8E45ESYKZOGRTI/daily+harvest+cafe+-+background-1+website+-+danvers+ma-.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-ePUEu0ybq3GI-OGWsIr6M1C6wDOwAt18w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjKNLR6iWmGIPAZSy5797v9hFL7nq0dqYrw&s",
        "https://images.ctfassets.net/iw4cawak30d4/5vA5berLtB2Mj009eRZUin/60807b26cb30e58f1410c2429a04fe42/031623-pl-const-f13-rito-248-1_1.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIJCTbd2P694xTnFBjyLNkQCV8KekImMIEMw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQQjC9YaZZOEHcrVsjdrSYiIMC3U2p2c6vg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVc1raEkF0XN7F-6JXRKegWrEgFeecdux8kA&s",
        "https://cdn.firstcry.com/education/2023/01/04135601/Daily-Routine-Words-In-English-For-Kids.jpg"
    ]



      
  

    return (
        <main className={styles.LoginSocialPage}>
            <div className={styles.darkBackground2}/>
            <div className={styles.background}>
                {Array.from({ length: 4 }, (_, columnIndex) => (
                    <div className={styles.column} key={columnIndex}>
                        {images.slice(columnIndex * imagesPerColumn, (columnIndex + 1) * imagesPerColumn).map((src, imageIndex) => (
                            <img src={src} alt={`Image ${columnIndex * imagesPerColumn + imageIndex}`} key={imageIndex} />
                        ))}
                    </div>
                ))}
            </div>
            <Logo />
            <Title content={"Learn in a New \n and Easier Way"} />
        </main>
    );
}
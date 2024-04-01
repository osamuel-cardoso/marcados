import alunos from '@/app/images/alunos.png'
import Image from 'next/image'

export function Testimonials() {
    return (
        <div className="flex flex-col justify-between w-full">
            <div className="flex gap-2 items-center">
                <div className="max-w-[8.5rem]">
                    <Image
                        src={alunos}
                        alt="Imagens dos alunos"
                        className="w-full"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <svg
                        width="119"
                        height="24"
                        viewBox="0 0 119 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.1872 3.14584C11.5089 2.15567 12.9098 2.15566 13.2315 3.14584L14.6622 7.54916C14.8061 7.99198 15.2188 8.2918 15.6844 8.2918H20.3143C21.3554 8.2918 21.7883 9.62407 20.946 10.236L17.2003 12.9574C16.8236 13.2311 16.666 13.7162 16.8099 14.159L18.2406 18.5624C18.5624 19.5525 17.4291 20.3759 16.5868 19.764L12.8411 17.0426C12.4644 16.7689 11.9543 16.7689 11.5776 17.0426L7.83194 19.764C6.98965 20.3759 5.85635 19.5525 6.17807 18.5624L7.6088 14.159C7.75268 13.7162 7.59506 13.2311 7.21837 12.9574L3.47269 10.236C2.63039 9.62407 3.06327 8.2918 4.10441 8.2918H8.73433C9.19994 8.2918 9.6126 7.99198 9.75648 7.54916L11.1872 3.14584Z"
                            fill="#1133FF"
                        />
                        <path
                            d="M34.7392 3.27823C35.0537 2.27315 36.4761 2.27314 36.7906 3.27823L38.1234 7.53798C38.2638 7.98648 38.6792 8.2918 39.1491 8.2918H43.546C44.5773 8.2918 45.0165 9.60336 44.1933 10.2245L40.5673 12.9603C40.2047 13.2338 40.0532 13.7057 40.1888 14.1392L41.5573 18.5127C41.8693 19.5101 40.7185 20.321 39.8842 19.6916L36.4122 17.072C36.0291 16.7829 35.5007 16.7829 35.1176 17.072L31.6456 19.6916C30.8113 20.321 29.6605 19.5101 29.9725 18.5127L31.341 14.1392C31.4766 13.7057 31.3251 13.2338 30.9626 12.9603L27.3365 10.2245C26.5133 9.60336 26.9525 8.2918 27.9838 8.2918H32.3807C32.8506 8.2918 33.2661 7.98648 33.4064 7.53798L34.7392 3.27823Z"
                            fill="#1133FF"
                        />
                        <path
                            d="M58.2983 3.14584C58.62 2.15567 60.0209 2.15566 60.3426 3.14584L61.7733 7.54916C61.9172 7.99198 62.3298 8.2918 62.7955 8.2918H67.4254C68.4665 8.2918 68.8994 9.62407 68.0571 10.236L64.3114 12.9574C63.9347 13.2311 63.7771 13.7162 63.921 14.159L65.3517 18.5624C65.6734 19.5525 64.5401 20.3759 63.6978 19.764L59.9522 17.0426C59.5755 16.7689 59.0654 16.7689 58.6887 17.0426L54.943 19.764C54.1007 20.3759 52.9674 19.5525 53.2892 18.5624L54.7199 14.159C54.8638 13.7162 54.7061 13.2311 54.3295 12.9574L50.5838 10.236C49.7415 9.62407 50.1744 8.2918 51.2155 8.2918H55.8454C56.311 8.2918 56.7237 7.99198 56.8676 7.54916L58.2983 3.14584Z"
                            fill="#1133FF"
                        />
                        <path
                            d="M81.8503 3.27823C82.1648 2.27315 83.5872 2.27314 83.9017 3.27823L85.2345 7.53798C85.3748 7.98648 85.7903 8.2918 86.2602 8.2918H90.6571C91.6884 8.2918 92.1276 9.60336 91.3044 10.2245L87.6783 12.9603C87.3158 13.2338 87.1643 13.7057 87.2999 14.1392L88.6683 18.5127C88.9804 19.5101 87.8296 20.321 86.9953 19.6916L83.5233 17.072C83.1402 16.7829 82.6118 16.7829 82.2287 17.072L78.7567 19.6916C77.9224 20.321 76.7716 19.5101 77.0836 18.5127L78.452 14.1392C78.5877 13.7057 78.4362 13.2338 78.0736 12.9603L74.4476 10.2245C73.6244 9.60336 74.0636 8.2918 75.0949 8.2918H79.4918C79.9617 8.2918 80.3771 7.98648 80.5175 7.53798L81.8503 3.27823Z"
                            fill="#1133FF"
                        />
                        <path
                            d="M105.409 3.14584C105.731 2.15567 107.132 2.15566 107.454 3.14584L108.884 7.54916C109.028 7.99198 109.441 8.2918 109.907 8.2918H114.537C115.578 8.2918 116.011 9.62407 115.168 10.236L111.423 12.9574C111.046 13.2311 110.888 13.7162 111.032 14.159L112.463 18.5624C112.785 19.5525 111.651 20.3759 110.809 19.764L107.063 17.0426C106.687 16.7689 106.177 16.7689 105.8 17.0426L102.054 19.764C101.212 20.3759 100.079 19.5525 100.4 18.5624L101.831 14.159C101.975 13.7162 101.817 13.2311 101.441 12.9574L97.6949 10.236C96.8526 9.62407 97.2855 8.2918 98.3266 8.2918H102.957C103.422 8.2918 103.835 7.99198 103.979 7.54916L105.409 3.14584Z"
                            fill="#1133FF"
                        />
                    </svg>
                    <h4 className="text-brand__gray/1000 text-[.8125rem] font-regular">
                        4.9/5 de +200 compras
                    </h4>
                </div>
            </div>
        </div>
    )
}
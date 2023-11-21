import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
import { useEffect } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(DrawSVGPlugin);


const ServerSVG = () => {
    
    useEffect( () => {

        gsap.registerPlugin(ScrollTrigger);
        const cableLines = new gsap.timeline({
            scrollTrigger: {
                trigger: '.opacityIn',
                start: 'top 100%',
                end: 'bottom 100%',
                scrub: false,
            }
        })
            cableLines.from('.cableLines', {
                opacity: 0,
            })
            cableLines.to('.cableLines', {
                duration: 0,
                opacity: 1,
                drawSVG: 0,
                ease: "power4.inOut"
            })
            cableLines.to('.cableLines', {
                delay: 1,
                duration: 1,
                opacity: 1,
                drawSVG: "100%",
                ease: "power4.inOut"
            }, '>')

        const opacityInTl = new gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '.opacityIn',
                start: 'top 100%',
                end: 'bottom 100%',
                scrub: false,
            }
        })
            opacityInTl.from('.opacityIn', {
                opacity: 0,
            })
            opacityInTl.to('.opacityIn', {
                duration: 0,
            })
            opacityInTl.to('.opacityIn', {
                opacity: 1,
                delay: 1,
                duration: 3,
            })
    }, [])

    return (
        <>
    <div>
        <svg  width="394" height="453" viewBox="0 0 394 453" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className='opacityIn' x="-7.45058e-09" y="0.125" width="111.36" height="105.673" transform="matrix(0.866025 0.5 -0.866025 0.5 297.45 214.101)" fill="black" stroke="#FFA800" stroke-width="0.25"/>
            <path  className='cableLines' d="M393.488 269.957L393.488 274.317L302.591 326.767" stroke="#FFA800" stroke-width="0.25"/>
            <rect className='opacityIn'  x="0.108253" y="0.1875" width="111.614" height="3.75396" transform="matrix(0.866025 0.5 -2.20305e-08 1 205.728 266.8)" fill="black" stroke="#FFA800" stroke-width="0.25"/>
            <path  className='cableLines' d="M224.851 98.9141L297.332 57.067L373.258 100.903L300.776 142.75" stroke="#D2D2D2" stroke-width="0.25"/>
            <rect className='opacityIn'  x="0.108253" y="0.1875" width="88.1361" height="168.317" transform="matrix(0.866025 0.5 -2.20305e-08 1 224.865 98.2423)" stroke="#D2D2D2" stroke-width="0.25"/>
            <path  className='cableLines' d="M373.157 100.552L373.157 269.119L301.396 310.55" stroke="#D2D2D2" stroke-width="0.25"/>
            <rect className='opacityIn'  width="82.862" height="39.158" transform="matrix(0.866025 -0.5 2.20305e-08 1 301.396 142.656)" fill="url(#paint0_linear_295_4061)"/>
            <rect className='opacityIn'  width="105.549" height="39.158" transform="matrix(0.866025 -0.5 2.20305e-08 1 302.592 282.87)" fill="url(#paint1_linear_295_4061)"/>
            <rect className='opacityIn'  width="21.8377" height="39.158" transform="matrix(0.866025 -0.5 2.20305e-08 1 206.456 227.71)" fill="url(#paint2_linear_295_4061)"/>
            <rect className='opacityIn'  width="111.008" height="38.4804" transform="matrix(0.866025 0.5 -2.20305e-08 1 206.456 228.942)" fill="url(#paint3_linear_295_4061)"/>
            <rect className='opacityIn'  width="23.6575" height="38.4804" transform="matrix(0.866025 0.5 -2.20305e-08 1 373.512 220.188)" fill="url(#paint4_linear_295_4061)"/>
            <rect className='opacityIn'  width="88.3861" height="38.9459" transform="matrix(0.866025 0.5 -2.20305e-08 1 224.851 98.7212)" fill="url(#paint5_linear_295_4061)"/>
            <path  className='cableLines' d="M373.157 140.383L301.396 181.814" stroke="#FA00FF" stroke-width="0.5"/>
            <path  className='cableLines' d="M301.395 181.86L224.851 137.667" stroke="#FA00FF" stroke-width="0.5"/>
            <path  className='opacityIn' d="M41.5868 432.106L34.0288 427.742L36.6712 426.217C37.1977 425.913 37.7229 425.715 38.247 425.622C38.7686 425.528 39.2655 425.521 39.7379 425.601C40.2078 425.679 40.6273 425.825 40.9964 426.038C41.3211 426.225 41.5315 426.413 41.6274 426.602C41.7258 426.79 41.7431 426.973 41.6791 427.152C41.6176 427.33 41.5081 427.498 41.3506 427.657L41.4245 427.7C41.6705 427.575 41.9842 427.487 42.3655 427.438C42.7469 427.388 43.154 427.397 43.5871 427.465C44.0201 427.533 44.4359 427.683 44.8344 427.913C45.2133 428.131 45.468 428.378 45.5984 428.652C45.7287 428.926 45.6968 429.222 45.5024 429.538C45.308 429.855 44.9132 430.185 44.3178 430.529L41.5868 432.106ZM41.6902 431.109L43.5059 430.06C44.1037 429.715 44.4125 429.403 44.4322 429.125C44.4519 428.844 44.2956 428.607 43.9635 428.416C43.7076 428.268 43.4062 428.169 43.0593 428.119C42.71 428.068 42.3495 428.075 41.978 428.139C41.6041 428.201 41.2522 428.327 40.9226 428.518L39.0626 429.592L41.6902 431.109ZM38.2654 429.131L39.963 428.151C40.2386 427.992 40.433 427.818 40.5461 427.627C40.6618 427.435 40.6864 427.245 40.6199 427.056C40.556 426.866 40.3911 426.694 40.1254 426.541C39.7933 426.349 39.3959 426.253 38.9334 426.253C38.4684 426.251 37.985 426.396 37.4831 426.685L35.7559 427.683L38.2654 429.131ZM49.4825 424.871L46.1316 422.936L47.0026 422.434L52.6711 425.706L51.8002 426.209L50.8406 425.655L50.7816 425.689C50.9366 425.932 50.9747 426.193 50.896 426.471C50.8148 426.748 50.5602 427.01 50.1321 427.258C49.7778 427.462 49.3854 427.599 48.9548 427.669C48.5218 427.737 48.0691 427.726 47.5967 427.635C47.1219 427.542 46.6434 427.357 46.1611 427.079L42.5593 424.999L43.4302 424.496L46.973 426.542C47.3864 426.78 47.8317 426.904 48.309 426.912C48.7887 426.919 49.2095 426.819 49.5711 426.61C49.7876 426.485 49.9525 426.326 50.0656 426.133C50.1813 425.938 50.201 425.731 50.1247 425.51C50.0509 425.289 49.8368 425.076 49.4825 424.871ZM54.2663 424.785L48.5978 421.513L49.4687 421.01L55.1372 424.283L54.2663 424.785ZM48.0959 420.712C47.9261 420.81 47.7219 420.861 47.4832 420.865C47.2471 420.868 47.0478 420.822 46.8854 420.729C46.723 420.635 46.6443 420.52 46.6492 420.383C46.6566 420.246 46.7452 420.128 46.9149 420.03C47.0847 419.932 47.2877 419.881 47.5238 419.878C47.7625 419.874 47.963 419.919 48.1254 420.013C48.2878 420.106 48.3653 420.222 48.3579 420.36C48.353 420.496 48.2656 420.614 48.0959 420.712ZM50.0453 418.495L57.6034 422.859L56.7324 423.362L49.1744 418.998L50.0453 418.495ZM61.4571 420.77C60.9848 421.043 60.4484 421.215 59.8481 421.286C59.2453 421.355 58.6229 421.323 57.9807 421.188C57.3361 421.051 56.7137 420.81 56.1134 420.463C55.518 420.12 55.1034 419.762 54.8697 419.392C54.636 419.021 54.5818 418.661 54.7073 418.313C54.8328 417.965 55.1342 417.654 55.6115 417.378C55.9805 417.165 56.3336 417.032 56.6706 416.98C57.0077 416.924 57.3103 416.909 57.5785 416.933C57.8466 416.954 58.0619 416.975 58.2243 416.995L58.2981 416.952L55.5081 415.341L56.3791 414.838L63.9371 419.202L63.0957 419.688L62.2247 419.185L62.1214 419.245C62.1608 419.341 62.2001 419.469 62.2395 419.628C62.2764 419.786 62.2469 419.963 62.1509 420.161C62.0525 420.357 61.8213 420.56 61.4571 420.77ZM60.7929 420.25C61.1422 420.049 61.3464 419.826 61.4055 419.581C61.4621 419.335 61.3907 419.083 61.1914 418.823C60.9897 418.561 60.6748 418.307 60.2467 418.06C59.8235 417.816 59.3917 417.637 58.9513 417.525C58.5085 417.411 58.0779 417.373 57.6597 417.41C57.239 417.446 56.8515 417.566 56.4972 417.77C56.1281 417.983 55.9153 418.215 55.8587 418.467C55.8021 418.715 55.8735 418.968 56.0728 419.225C56.2721 419.48 56.571 419.722 56.9695 419.952C57.373 420.185 57.8011 420.361 58.2538 420.48C58.7065 420.597 59.1518 420.641 59.5898 420.612C60.0277 420.581 60.4287 420.46 60.7929 420.25Z" fill="white"/>
            <path className='opacityIn' d="M189.977 318.719L187.839 317.484L187.839 309.484L190.072 310.773C190.744 311.161 191.319 311.654 191.797 312.25C192.275 312.844 192.642 313.512 192.896 314.256C193.151 314.997 193.279 315.781 193.279 316.609C193.279 317.443 193.15 318.086 192.893 318.539C192.636 318.99 192.262 319.234 191.77 319.273C191.278 319.31 190.681 319.125 189.977 318.719ZM188.678 317.109L189.923 317.828C190.496 318.159 190.97 318.305 191.347 318.268C191.724 318.23 192.004 318.029 192.189 317.664C192.374 317.299 192.467 316.792 192.467 316.141C192.467 315.495 192.375 314.886 192.193 314.314C192.01 313.74 191.737 313.223 191.374 312.764C191.011 312.301 190.559 311.914 190.018 311.602L188.678 310.828L188.678 317.109ZM196.756 322.758C196.256 322.469 195.824 322.092 195.461 321.627C195.1 321.161 194.821 320.641 194.625 320.066C194.431 319.491 194.334 318.896 194.334 318.281C194.334 317.667 194.431 317.181 194.625 316.824C194.821 316.466 195.094 316.257 195.444 316.195C195.796 316.133 196.206 316.237 196.675 316.508C196.946 316.664 197.213 316.87 197.477 317.127C197.741 317.383 197.981 317.691 198.197 318.051C198.414 318.408 198.586 318.814 198.715 319.271C198.844 319.729 198.908 320.237 198.908 320.797L198.908 321.187L194.902 318.875L194.902 318.078L198.096 319.922C198.096 319.583 198.037 319.247 197.92 318.914C197.805 318.582 197.64 318.277 197.426 318C197.214 317.724 196.964 317.503 196.675 317.336C196.357 317.152 196.082 317.085 195.85 317.133C195.62 317.18 195.443 317.312 195.319 317.529C195.195 317.747 195.133 318.021 195.133 318.352L195.133 318.883C195.133 319.336 195.2 319.759 195.335 320.152C195.473 320.544 195.664 320.893 195.907 321.197C196.151 321.499 196.434 321.743 196.756 321.93C196.966 322.051 197.156 322.126 197.325 322.156C197.496 322.185 197.644 322.166 197.768 322.1C197.892 322.031 197.988 321.911 198.055 321.742L198.827 322.438C198.745 322.693 198.609 322.88 198.417 322.998C198.226 323.114 197.989 323.154 197.707 323.119C197.425 323.081 197.108 322.961 196.756 322.758ZM200.122 326.826L200.122 318.576L200.894 319.021L200.894 319.975L200.988 320.029C201.047 319.959 201.128 319.873 201.232 319.771C201.338 319.669 201.489 319.61 201.685 319.596C201.884 319.58 202.152 319.67 202.49 319.865C202.928 320.118 203.314 320.467 203.647 320.912C203.981 321.357 204.242 321.866 204.429 322.438C204.616 323.009 204.71 323.61 204.71 324.24C204.71 324.876 204.616 325.372 204.429 325.73C204.242 326.086 203.982 326.296 203.651 326.359C203.319 326.421 202.937 326.326 202.504 326.076C202.17 325.883 201.903 325.665 201.702 325.422C201.501 325.176 201.347 324.939 201.239 324.713C201.13 324.484 201.047 324.298 200.988 324.154L200.921 324.115L200.921 327.287L200.122 326.826ZM200.907 322.029C200.907 322.482 200.965 322.915 201.08 323.328C201.195 323.738 201.363 324.105 201.584 324.428C201.805 324.748 202.075 325.001 202.396 325.186C202.729 325.378 203.008 325.438 203.231 325.363C203.457 325.288 203.626 325.109 203.739 324.828C203.854 324.546 203.911 324.191 203.911 323.764C203.911 323.342 203.855 322.929 203.742 322.525C203.632 322.12 203.464 321.754 203.238 321.426C203.015 321.096 202.734 320.834 202.396 320.639C202.071 320.451 201.798 320.389 201.577 320.451C201.356 320.511 201.189 320.678 201.076 320.951C200.964 321.222 200.907 321.581 200.907 322.029ZM206.726 320.389L206.726 328.389L205.927 327.928L205.927 319.928L206.726 320.389ZM210.299 330.577C209.83 330.306 209.418 329.939 209.064 329.477C208.712 329.016 208.437 328.497 208.239 327.918C208.043 327.342 207.944 326.743 207.944 326.124C207.944 325.499 208.043 325.01 208.239 324.657C208.437 324.305 208.712 324.102 209.064 324.047C209.418 323.994 209.83 324.103 210.299 324.374C210.768 324.644 211.179 325.01 211.53 325.471C211.884 325.933 212.16 326.454 212.356 327.034C212.554 327.614 212.653 328.217 212.653 328.842C212.653 329.462 212.554 329.946 212.356 330.295C212.16 330.646 211.884 330.847 211.53 330.901C211.179 330.956 210.768 330.847 210.299 330.577ZM210.299 329.749C210.655 329.954 210.948 330.018 211.179 329.94C211.409 329.862 211.579 329.683 211.689 329.403C211.8 329.123 211.855 328.782 211.855 328.381C211.855 327.98 211.8 327.575 211.689 327.165C211.579 326.754 211.409 326.376 211.179 326.03C210.948 325.683 210.655 325.407 210.299 325.202C209.943 324.996 209.649 324.933 209.419 325.014C209.189 325.095 209.019 325.277 208.909 325.559C208.798 325.842 208.743 326.183 208.743 326.584C208.743 326.986 208.798 327.39 208.909 327.797C209.019 328.205 209.189 328.581 209.419 328.924C209.649 329.268 209.943 329.543 210.299 329.749ZM214.2 334.954C214.065 334.876 213.944 334.793 213.838 334.706C213.732 334.621 213.659 334.556 213.618 334.509L213.821 333.813C214.015 333.983 214.187 334.103 214.336 334.173C214.484 334.243 214.616 334.243 214.731 334.171C214.849 334.103 214.956 333.945 215.053 333.696L215.202 333.313L213.28 326.173L214.146 326.673L215.581 332.282L215.635 332.313L217.069 328.36L217.935 328.86L215.729 334.462C215.63 334.715 215.507 334.9 215.361 335.019C215.214 335.14 215.044 335.194 214.85 335.181C214.658 335.169 214.442 335.093 214.2 334.954Z" fill="white"/>
            <rect className='cableLines' x="0.216506" width="83.4441" height="34.9285" rx="3.875" transform="matrix(0.866025 -0.5 0.866025 0.5 0.0290063 435.101)" stroke="white" stroke-width="0.25"/>
            <path className='cableLines' d="M87.3076 401.504L197.645 337.801" stroke="url(#paint6_linear_295_4061)" stroke-width="0.25"/>
            <rect className='cableLines' x="0.108253" y="0.1875" width="83.4441" height="34.9285" rx="3.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 167.455 285.451)" stroke="white" stroke-width="0.25"/>
            <path  className='cableLines' d="M156.857 184.142L60.8723 239.559C58.9591 240.664 58.9591 242.455 60.8723 243.559L166.622 304.614" stroke="url(#paint7_linear_295_4061)" stroke-width="0.25"/>
            <path  className='cableLines' d="M212 9.41946L160.141 39.3604C158.228 40.4649 156.677 43.1512 156.677 45.3604L156.677 184.155" stroke="white" stroke-width="0.25"/>
            <path  className='cableLines' d="M268.285 23.2551L231.47 2.00003C229.557 0.895459 226.455 0.895458 224.542 2.00002L211 9.81822" stroke="white" stroke-width="0.25"/>
            <rect className='cableLines' x="-7.45058e-09" y="0.125" width="83.4441" height="34.9285" rx="3.875" transform="matrix(0.866025 0.5 -0.866025 0.5 281.735 15.2693)" stroke="white" stroke-width="0.25"/>
            <path className='opacityIn' d="M290.547 40.8714L298.105 36.5078L300.659 37.9822C301.25 38.3231 301.633 38.6612 301.811 38.9964C301.99 39.3302 301.996 39.6505 301.829 39.9574C301.662 40.2642 301.355 40.5461 300.91 40.8032C300.465 41.0603 299.979 41.2358 299.452 41.3295C298.926 41.4233 298.376 41.4183 297.803 41.3146C297.232 41.2095 296.654 40.9879 296.068 40.6498L294.002 39.4567L294.828 38.9794L296.865 40.1555C297.269 40.3885 297.653 40.5419 298.017 40.6157C298.383 40.691 298.73 40.6981 299.058 40.6371C299.39 40.576 299.707 40.4581 300.01 40.2834C300.312 40.1086 300.52 39.9233 300.633 39.7273C300.747 39.5312 300.74 39.326 300.615 39.1115C300.492 38.8956 300.226 38.6697 299.818 38.4339L298.209 37.5049L291.463 41.3998L290.547 40.8714ZM297.5 40.9652L295.965 43.9993L294.902 43.3856L296.467 40.3686L297.5 40.9652ZM302.967 45.3656L306.318 43.4309L307.188 43.9337L301.52 47.2065L300.649 46.7036L301.609 46.1497L301.549 46.1156C301.129 46.2051 300.677 46.2271 300.195 46.1816C299.715 46.1347 299.261 45.9877 298.833 45.7406C298.479 45.536 298.242 45.3095 298.121 45.0609C298.003 44.8109 298.023 44.5495 298.18 44.2768C298.34 44.0026 298.661 43.7264 299.143 43.448L302.745 41.3684L303.616 41.8712L300.073 43.9167C299.66 44.1553 299.446 44.4124 299.431 44.688C299.419 44.965 299.594 45.2079 299.955 45.4167C300.172 45.5417 300.447 45.6369 300.782 45.7022C301.119 45.769 301.478 45.7803 301.859 45.7363C302.243 45.6937 302.612 45.5701 302.967 45.3656ZM307.396 46.6616L303.986 48.6303L303.115 48.1275L308.784 44.8547L309.625 45.3405L308.739 45.8519L308.813 45.8945C309.234 45.805 309.667 45.788 310.112 45.8434C310.56 45.8974 310.998 46.0479 311.426 46.2951C311.81 46.5167 312.067 46.756 312.197 47.0131C312.33 47.2688 312.318 47.5344 312.16 47.81C312.005 48.0841 311.687 48.3604 311.205 48.6388L307.603 50.7184L306.732 50.2155L310.275 48.1701C310.72 47.913 310.951 47.6459 310.968 47.3689C310.988 47.0905 310.796 46.8349 310.393 46.6019C310.115 46.4414 309.806 46.3327 309.466 46.2759C309.129 46.2205 308.782 46.2233 308.426 46.2844C308.069 46.3455 307.726 46.4712 307.396 46.6616Z" fill="white"/>

{/* server insets */}
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 233.236 240.115)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 253.232 255.618)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 273.229 263.205)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 233.236 232.199)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 253.231 247.702)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 273.228 255.288)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 233.236 224.283)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 253.232 239.786)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 273.229 247.372)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 233.236 216.367)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 253.232 231.869)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 273.229 239.456)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 233.236 208.451)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 253.231 223.953)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 273.228 231.54)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 233.236 200.534)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 253.232 216.037)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 273.229 223.624)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 233.236 200.534)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 253.232 216.037)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>
                <rect className='opacityIn' x="0.108253" y="0.1875" width="19.8603" height="3.70808" rx="0.875" transform="matrix(0.866025 0.5 -2.20305e-08 1 273.229 223.624)" stroke="white" stroke-opacity="0.5" stroke-width="0.25"/>



            <circle className='opacityIn' cx="0.598005" cy="0.598005" r="0.598005" transform="matrix(0.866025 0.5 -2.20305e-08 1 231.384 149.16)" fill="#464646"/>
            <circle className='opacityIn' cx="0.598005" cy="0.598005" r="0.598005" transform="matrix(0.866025 0.5 -2.20305e-08 1 231.384 173.08)" fill="#464646"/>
            <circle className='opacityIn' cx="0.598005" cy="0.598005" r="0.598005" transform="matrix(0.866025 0.5 -2.20305e-08 1 235.527 189.824)" fill="#464646"/>
            <circle className='opacityIn' cx="0.598005" cy="0.598005" r="0.598005" transform="matrix(0.866025 0.5 -2.20305e-08 1 243.813 170.688)" fill="#464646"/>
            <circle className='opacityIn' cx="0.598005" cy="0.598005" r="0.598005" transform="matrix(0.866025 0.5 -2.20305e-08 1 247.957 163.512)" fill="#464646"/>
            <circle className='opacityIn' cx="0.598005" cy="0.598005" r="0.598005" transform="matrix(0.866025 0.5 -2.20305e-08 1 247.957 197)" fill="#464646"/>
            <circle className='opacityIn' cx="0.598005" cy="0.598005" r="0.598005" transform="matrix(0.866025 0.5 -2.20305e-08 1 258.314 183.844)" fill="#464646"/>
            <circle className='opacityIn' cx="0.598005" cy="0.598005" r="0.598005" transform="matrix(0.866025 0.5 -2.20305e-08 1 268.673 197)" fill="#464646"/>
            <circle className='opacityIn' cx="0.598005" cy="0.598005" r="0.598005" transform="matrix(0.866025 0.5 -2.20305e-08 1 289.389 208.96)" fill="#464646"/>
            <circle className='opacityIn' cx="0.598005" cy="0.598005" r="0.598005" transform="matrix(0.866025 0.5 -2.20305e-08 1 279.03 181.452)" fill="#464646"/>
            <circle className='opacityIn' cx="0.598005" cy="0.598005" r="0.598005" transform="matrix(0.866025 0.5 -2.20305e-08 1 295.604 195.804)" fill="#464646"/>
            <path className='opacityIn' d="M314.665 231.701L314.055 232.054C314.018 231.872 313.955 231.73 313.865 231.629C313.777 231.527 313.668 231.46 313.54 231.43C313.414 231.397 313.274 231.398 313.12 231.434C312.965 231.47 312.805 231.537 312.637 231.633C312.332 231.809 312.056 232.058 311.808 232.379C311.562 232.699 311.366 233.074 311.22 233.505C311.076 233.935 311.004 234.402 311.004 234.906C311.004 235.41 311.076 235.793 311.22 236.056C311.366 236.319 311.562 236.468 311.808 236.504C312.056 236.539 312.332 236.468 312.637 236.292C312.805 236.196 312.965 236.076 313.12 235.934C313.274 235.792 313.414 235.633 313.54 235.456C313.668 235.276 313.777 235.083 313.865 234.879C313.955 234.672 314.018 234.457 314.055 234.235L314.665 233.883C314.619 234.207 314.535 234.521 314.414 234.826C314.292 235.131 314.142 235.418 313.961 235.687C313.781 235.954 313.578 236.195 313.353 236.41C313.13 236.624 312.892 236.805 312.637 236.951C312.208 237.199 311.826 237.299 311.491 237.25C311.156 237.2 310.893 237.008 310.701 236.672C310.509 236.335 310.413 235.86 310.413 235.247C310.413 234.633 310.509 234.047 310.701 233.49C310.893 232.932 311.156 232.435 311.491 232C311.826 231.564 312.208 231.222 312.637 230.974C312.892 230.827 313.13 230.732 313.353 230.689C313.578 230.644 313.781 230.652 313.961 230.713C314.142 230.771 314.292 230.883 314.414 231.048C314.535 231.211 314.619 231.429 314.665 231.701ZM316.153 232.217L316.153 234.842L315.572 235.178L315.572 229.359L316.153 229.024L316.153 231.161L316.202 231.132C316.29 230.856 316.423 230.6 316.6 230.365C316.779 230.127 317.017 229.923 317.314 229.751C317.571 229.603 317.797 229.532 317.99 229.54C318.184 229.545 318.334 229.64 318.441 229.822C318.549 230.002 318.603 230.28 318.603 230.655L318.603 233.428L318.022 233.763L318.022 231.036C318.022 230.689 317.945 230.466 317.789 230.366C317.635 230.264 317.42 230.292 317.147 230.45C316.956 230.56 316.786 230.705 316.635 230.885C316.486 231.064 316.367 231.268 316.281 231.496C316.195 231.723 316.153 231.964 316.153 232.217ZM320.777 232.275C320.538 232.413 320.321 232.486 320.125 232.495C319.93 232.501 319.775 232.438 319.66 232.306C319.546 232.171 319.488 231.962 319.488 231.678C319.488 231.428 319.531 231.201 319.616 230.996C319.701 230.79 319.815 230.601 319.958 230.429C320.101 230.258 320.258 230.101 320.43 229.958C320.604 229.812 320.779 229.675 320.954 229.547C321.184 229.381 321.37 229.248 321.513 229.148C321.657 229.046 321.762 228.954 321.828 228.873C321.895 228.79 321.929 228.695 321.929 228.587L321.929 228.564C321.929 228.284 321.862 228.105 321.729 228.026C321.598 227.946 321.399 227.984 321.132 228.138C320.854 228.298 320.637 228.494 320.48 228.725C320.322 228.956 320.211 229.169 320.148 229.365L319.596 229.456C319.695 229.134 319.826 228.852 319.99 228.61C320.156 228.364 320.336 228.156 320.531 227.985C320.728 227.81 320.922 227.668 321.112 227.559C321.233 227.489 321.373 227.425 321.53 227.368C321.689 227.309 321.843 227.287 321.99 227.304C322.14 227.32 322.263 227.403 322.362 227.553C322.46 227.703 322.509 227.951 322.509 228.297L322.509 231.172L321.929 231.507L321.929 230.917L321.899 230.934C321.86 231.051 321.794 231.19 321.702 231.351C321.611 231.512 321.488 231.675 321.336 231.838C321.183 232.002 320.997 232.148 320.777 232.275ZM320.866 231.621C321.096 231.489 321.289 231.325 321.447 231.13C321.606 230.934 321.725 230.73 321.806 230.519C321.888 230.307 321.929 230.11 321.929 229.928L321.929 229.314C321.904 229.363 321.85 229.425 321.766 229.502C321.684 229.576 321.589 229.654 321.481 229.738C321.374 229.818 321.27 229.895 321.169 229.969C321.068 230.04 320.987 230.098 320.925 230.144C320.774 230.254 320.633 230.372 320.502 230.499C320.372 230.623 320.267 230.758 320.187 230.905C320.108 231.049 320.069 231.206 320.069 231.377C320.069 231.61 320.143 231.743 320.293 231.776C320.444 231.806 320.635 231.755 320.866 231.621ZM323.569 230.56L323.569 226.197L324.13 225.873L324.13 226.532L324.169 226.509C324.238 226.254 324.363 226.006 324.543 225.768C324.724 225.529 324.927 225.344 325.154 225.214C325.196 225.189 325.25 225.159 325.314 225.124C325.377 225.089 325.426 225.064 325.459 225.049L325.459 225.731C325.439 225.737 325.394 225.754 325.323 225.783C325.254 225.81 325.181 225.845 325.104 225.89C324.921 225.996 324.757 226.135 324.612 226.308C324.47 226.477 324.356 226.664 324.273 226.867C324.191 227.068 324.15 227.267 324.15 227.464L324.15 230.225L323.569 230.56ZM326.728 222.919L326.728 228.737L326.147 229.072L326.147 223.254L326.728 222.919ZM329.375 227.299C329.011 227.509 328.697 227.598 328.433 227.565C328.171 227.529 327.968 227.384 327.825 227.131C327.684 226.876 327.614 226.524 327.614 226.077C327.614 225.63 327.684 225.196 327.825 224.773C327.968 224.348 328.167 223.967 328.421 223.629C328.677 223.288 328.975 223.019 329.316 222.822C329.513 222.708 329.708 222.634 329.9 222.599C330.091 222.564 330.266 222.586 330.424 222.665C330.581 222.743 330.706 222.894 330.8 223.119C330.893 223.343 330.94 223.659 330.94 224.066L330.94 224.35L328.027 226.032L328.027 225.452L330.35 224.112C330.35 223.865 330.307 223.67 330.222 223.526C330.138 223.381 330.018 223.298 329.863 223.276C329.708 223.254 329.526 223.303 329.316 223.424C329.085 223.558 328.885 223.739 328.716 223.969C328.549 224.197 328.42 224.442 328.33 224.704C328.24 224.966 328.195 225.218 328.195 225.458L328.195 225.844C328.195 226.174 328.244 226.425 328.342 226.597C328.442 226.767 328.581 226.86 328.758 226.877C328.935 226.892 329.141 226.832 329.375 226.697C329.528 226.609 329.666 226.504 329.789 226.384C329.913 226.261 330.021 226.123 330.111 225.971C330.201 225.817 330.271 225.649 330.32 225.469L330.881 225.327C330.822 225.581 330.723 225.832 330.583 226.079C330.444 226.324 330.272 226.552 330.067 226.763C329.862 226.973 329.631 227.151 329.375 227.299ZM331.823 225.795L331.823 221.431L332.384 221.107L332.384 221.789L332.434 221.761C332.512 221.482 332.639 221.228 332.815 220.998C332.99 220.766 333.201 220.579 333.447 220.437C333.697 220.293 333.904 220.238 334.07 220.273C334.237 220.306 334.367 220.411 334.461 220.59L334.5 220.567C334.597 220.286 334.742 220.023 334.936 219.779C335.129 219.533 335.361 219.332 335.632 219.175C335.97 218.98 336.246 218.943 336.461 219.063C336.676 219.182 336.783 219.497 336.783 220.011L336.783 222.931L336.203 223.266L336.203 220.346C336.203 220.024 336.127 219.838 335.974 219.788C335.821 219.737 335.642 219.772 335.435 219.891C335.169 220.045 334.964 220.256 334.818 220.526C334.672 220.794 334.599 221.069 334.599 221.352L334.599 224.192L334.008 224.533L334.008 221.545C334.008 221.297 333.939 221.137 333.799 221.066C333.66 220.993 333.48 221.02 333.26 221.147C333.109 221.234 332.968 221.362 332.837 221.531C332.708 221.698 332.603 221.888 332.522 222.099C332.443 222.307 332.404 222.518 332.404 222.732L332.404 225.46L331.823 225.795ZM338.957 221.778C338.718 221.917 338.5 221.99 338.305 221.999C338.11 222.005 337.955 221.942 337.84 221.81C337.725 221.675 337.668 221.466 337.668 221.182C337.668 220.932 337.711 220.705 337.796 220.5C337.881 220.294 337.995 220.105 338.138 219.933C338.281 219.762 338.438 219.605 338.61 219.462C338.784 219.316 338.959 219.179 339.134 219.051C339.364 218.884 339.55 218.751 339.693 218.652C339.837 218.55 339.942 218.458 340.008 218.376C340.075 218.294 340.109 218.199 340.109 218.091L340.109 218.068C340.109 217.788 340.042 217.608 339.909 217.53C339.778 217.45 339.579 217.488 339.311 217.642C339.034 217.802 338.817 217.998 338.659 218.229C338.502 218.46 338.391 218.673 338.327 218.869L337.776 218.96C337.875 218.638 338.006 218.356 338.17 218.114C338.335 217.868 338.516 217.66 338.711 217.489C338.908 217.314 339.101 217.172 339.292 217.062C339.413 216.992 339.553 216.929 339.71 216.872C339.869 216.812 340.022 216.791 340.17 216.808C340.319 216.824 340.443 216.907 340.542 217.057C340.64 217.206 340.689 217.455 340.689 217.801L340.689 220.676L340.109 221.011L340.109 220.42L340.079 220.437C340.04 220.555 339.974 220.694 339.882 220.855C339.79 221.016 339.668 221.179 339.516 221.342C339.363 221.506 339.177 221.652 338.957 221.778ZM339.046 221.125C339.275 220.992 339.469 220.829 339.626 220.634C339.785 220.437 339.905 220.234 339.986 220.023C340.068 219.811 340.109 219.614 340.109 219.432L340.109 218.818C340.084 218.866 340.03 218.929 339.946 219.006C339.864 219.08 339.769 219.158 339.661 219.241C339.554 219.322 339.45 219.399 339.348 219.473C339.248 219.544 339.167 219.602 339.105 219.648C338.954 219.758 338.813 219.876 338.682 220.003C338.552 220.127 338.447 220.262 338.367 220.409C338.288 220.553 338.249 220.71 338.249 220.881C338.249 221.114 338.323 221.247 338.472 221.28C338.623 221.31 338.814 221.259 339.046 221.125ZM343.274 220.911C342.994 221.073 342.753 221.17 342.551 221.203C342.349 221.239 342.181 221.228 342.047 221.171C341.914 221.115 341.808 221.034 341.729 220.928L342.192 220.286C342.244 220.335 342.311 220.388 342.391 220.444C342.471 220.501 342.581 220.528 342.721 220.523C342.862 220.519 343.046 220.452 343.274 220.32C343.579 220.144 343.831 219.913 344.03 219.628C344.228 219.343 344.327 219.019 344.327 218.655L344.327 217.769L344.278 217.797C344.235 217.901 344.175 218.035 344.096 218.198C344.019 218.358 343.907 218.525 343.761 218.701C343.617 218.873 343.422 219.03 343.176 219.172C342.871 219.348 342.597 219.423 342.354 219.397C342.113 219.369 341.922 219.237 341.781 219C341.642 218.763 341.572 218.417 341.572 217.962C341.572 217.515 341.64 217.087 341.776 216.676C341.912 216.265 342.102 215.898 342.344 215.576C342.587 215.252 342.868 214.998 343.186 214.814C343.432 214.672 343.627 214.607 343.771 214.618C343.917 214.627 344.029 214.668 344.106 214.743C344.185 214.815 344.245 214.877 344.288 214.928L344.347 214.894L344.347 214.201L344.908 213.877L344.908 218.365C344.908 218.74 344.834 219.088 344.687 219.408C344.541 219.729 344.344 220.016 344.096 220.269C343.85 220.523 343.576 220.737 343.274 220.911ZM343.255 218.525C343.488 218.39 343.684 218.215 343.845 217.999C344.006 217.783 344.128 217.535 344.212 217.256C344.295 216.977 344.337 216.676 344.337 216.354C344.337 216.04 344.296 215.786 344.214 215.593C344.132 215.4 344.011 215.281 343.85 215.238C343.689 215.194 343.491 215.24 343.255 215.377C343.009 215.519 342.804 215.709 342.64 215.948C342.477 216.185 342.355 216.449 342.273 216.739C342.193 217.028 342.152 217.32 342.152 217.615C342.152 217.918 342.193 218.163 342.275 218.348C342.359 218.531 342.482 218.642 342.644 218.681C342.809 218.717 343.012 218.665 343.255 218.525ZM346.551 214.667L346.551 217.292L345.971 217.627L345.971 213.263L346.532 212.939L346.532 213.621L346.581 213.593C346.67 213.32 346.804 213.064 346.984 212.826C347.165 212.585 347.398 212.382 347.683 212.218C347.939 212.07 348.163 212.001 348.355 212.012C348.547 212.02 348.696 212.116 348.803 212.299C348.909 212.48 348.963 212.756 348.963 213.127L348.963 215.9L348.382 216.235L348.382 213.507C348.382 213.165 348.305 212.942 348.151 212.84C347.996 212.736 347.785 212.761 347.516 212.917C347.331 213.024 347.165 213.166 347.019 213.343C346.875 213.519 346.761 213.72 346.677 213.946C346.593 214.173 346.551 214.413 346.551 214.667ZM351.608 214.463C351.244 214.673 350.93 214.762 350.666 214.729C350.403 214.693 350.201 214.548 350.058 214.295C349.917 214.04 349.846 213.688 349.846 213.241C349.846 212.795 349.917 212.36 350.058 211.937C350.201 211.512 350.399 211.131 350.653 210.793C350.909 210.452 351.208 210.183 351.549 209.986C351.746 209.872 351.94 209.798 352.132 209.763C352.324 209.728 352.499 209.75 352.656 209.83C352.814 209.907 352.939 210.058 353.032 210.283C353.126 210.507 353.173 210.823 353.173 211.23L353.173 211.514L350.26 213.196L350.26 212.616L352.582 211.276C352.582 211.029 352.54 210.834 352.454 210.69C352.371 210.545 352.251 210.462 352.095 210.44C351.941 210.418 351.759 210.467 351.549 210.588C351.318 210.722 351.118 210.903 350.949 211.134C350.781 211.361 350.653 211.606 350.562 211.868C350.472 212.13 350.427 212.382 350.427 212.622L350.427 213.009C350.427 213.338 350.476 213.589 350.575 213.761C350.675 213.931 350.813 214.024 350.99 214.041C351.168 214.056 351.373 213.996 351.608 213.861C351.761 213.773 351.898 213.669 352.021 213.548C352.146 213.425 352.253 213.287 352.344 213.135C352.434 212.981 352.504 212.813 352.553 212.634L353.114 212.491C353.055 212.745 352.955 212.996 352.816 213.243C352.677 213.488 352.504 213.716 352.299 213.928C352.094 214.137 351.864 214.315 351.608 214.463ZM355.69 212.016L354.135 212.913L354.135 207.095L355.758 206.158C356.247 205.875 356.666 205.75 357.013 205.783C357.361 205.813 357.628 205.991 357.813 206.318C357.998 206.643 358.091 207.107 358.091 207.709C358.091 208.315 357.997 208.891 357.81 209.436C357.623 209.98 357.351 210.472 356.994 210.913C356.636 211.353 356.201 211.72 355.69 212.016ZM354.745 211.936L355.65 211.413C356.067 211.173 356.412 210.881 356.686 210.537C356.96 210.193 357.164 209.811 357.299 209.391C357.433 208.97 357.5 208.523 357.5 208.05C357.5 207.58 357.434 207.214 357.301 206.952C357.168 206.687 356.97 206.541 356.706 206.511C356.442 206.48 356.113 206.578 355.719 206.805L354.745 207.368L354.745 211.936ZM359.114 210.038L359.114 204.22L360.876 203.203C361.227 203 361.516 202.903 361.744 202.912C361.972 202.919 362.142 203.007 362.254 203.178C362.365 203.346 362.421 203.572 362.421 203.857C362.421 204.107 362.382 204.335 362.305 204.543C362.23 204.749 362.13 204.936 362.005 205.102C361.882 205.268 361.749 205.415 361.604 205.544L361.604 205.601C361.758 205.523 361.913 205.496 362.069 205.52C362.225 205.544 362.355 205.631 362.46 205.783C362.565 205.934 362.618 206.163 362.618 206.47C362.618 206.762 362.56 207.057 362.446 207.357C362.331 207.656 362.15 207.945 361.902 208.224C361.654 208.504 361.332 208.758 360.935 208.987L359.114 210.038ZM359.724 209.061L360.935 208.362C361.334 208.132 361.616 207.88 361.784 207.605C361.953 207.328 362.037 207.061 362.037 206.805C362.037 206.608 361.994 206.452 361.907 206.335C361.82 206.217 361.696 206.154 361.535 206.146C361.375 206.137 361.184 206.196 360.964 206.322L359.724 207.038L359.724 209.061ZM359.724 206.425L360.856 205.771C361.04 205.665 361.206 205.528 361.353 205.359C361.502 205.19 361.621 205.004 361.707 204.803C361.796 204.6 361.84 204.396 361.84 204.192C361.84 203.936 361.763 203.764 361.609 203.675C361.455 203.584 361.211 203.635 360.876 203.828L359.724 204.493L359.724 206.425Z" fill="#9E00FF"/>
            <defs>
            <linearGradient id="paint0_linear_295_4061" x1="44.193" y1="120.818" x2="65.9437" y2="-60.924" gradientUnits="userSpaceOnUse">
            <stop offset="0.172916" stop-color="#8000FF"/>
            <stop offset="0.771875" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_295_4061" x1="56.2927" y1="120.818" x2="73.4613" y2="-61.914" gradientUnits="userSpaceOnUse">
            <stop offset="0.172916" stop-color="#FFA800"/>
            <stop offset="0.771875" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint2_linear_295_4061" x1="11.6468" y1="120.818" x2="81.0485" y2="-32.0106" gradientUnits="userSpaceOnUse">
            <stop offset="0.172916" stop-color="#FFA800"/>
            <stop offset="0.771875" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint3_linear_295_4061" x1="59.2044" y1="118.727" x2="74.986" y2="-61.0423" gradientUnits="userSpaceOnUse">
            <stop offset="0.172916" stop-color="#FFA800"/>
            <stop offset="0.771875" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint4_linear_295_4061" x1="12.6173" y1="118.727" x2="76.4147" y2="-36.1477" gradientUnits="userSpaceOnUse">
            <stop offset="0.172916" stop-color="#FFA800"/>
            <stop offset="0.771875" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint5_linear_295_4061" x1="47.1393" y1="120.163" x2="67.3474" y2="-60.9279" gradientUnits="userSpaceOnUse">
            <stop offset="0.172916" stop-color="#8000FF"/>
            <stop offset="0.771875" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint6_linear_295_4061" x1="89.4438" y1="366.55" x2="187.818" y2="404.47" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint7_linear_295_4061" x1="107.133" y1="212.851" x2="161.74" y2="307.433" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            </defs>
        </svg>
    </div>
        </>
    );
}
 
export default ServerSVG;
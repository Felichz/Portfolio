import React from 'react';

import { ProjectCard } from '../components/ProjectCard';
import { CourseCard } from '../components/CourseCard';

// Card thumbnails
import WatsonAssistantThumb from '../assets/thumbnails/watson-assistant.jpg';
import RickNativeThumb from '../assets/thumbnails/rick-native.jpg';
import EdovideoNativeThumb from '../assets/thumbnails/edovideo-native.jpg';
import PetgramThumb from '../assets/thumbnails/petgram-mobile.jpg';
import RickSearchThumb from '../assets/thumbnails/ricksearch-desktop.jpg';
import EdoVideoThumb from '../assets/thumbnails/edovideo-desktop.jpg';
import AngularStoreThumb from '../assets/thumbnails/angularstore-desktop.jpg';
import ExpenseReportsThumb from '../assets/thumbnails/expense-reports-desktop.jpg';
import PhpPostsThumb from '../assets/thumbnails/phpposts-desktop.jpg';
import PuntoVentaThumb from '../assets/thumbnails/puntoventa.jpg';
import TriskelThumb from '../assets/thumbnails/triskel.jpg';
import CrudBextlanThumb from '../assets/thumbnails/crud-bextlan.jpg';
import Html5BextlanThumb from '../assets/thumbnails/html5-bextlan-desktop.jpg';
import FirstWebThumb from '../assets/thumbnails/first-web-desktop.jpg';
import SuperNinjaZeroThumb from '../assets/thumbnails/superninjazero.jpg';
import PhysicsEngineThumb from '../assets/thumbnails/physicsengine.jpg';
import Animate3Thumb from '../assets/thumbnails/animate3.jpg';
import Animate2Thumb from '../assets/thumbnails/animate2.png';
import SuperMarioThumb from '../assets/thumbnails/supermario.jpg';

// Tech icons
import ReactNativeIcon from '../assets/course-icons/react-native.webp';
import ReactAvanzadoIcon from '../assets/course-icons/react-avanzado.webp';
import NodeJSIcon from '../assets/course-icons/nodejs.png';
import SortingIcon from '../assets/course-icons/sorting.webp';
import ReduxIcon from '../assets/course-icons/redux.webp';
import MongoDBIcon from '../assets/course-icons/mongodb.webp';
import TypescriptIcon from '../assets/course-icons/typescript.webp';
import JavascriptIcon from '../assets/course-icons/javascript.webp';
import ReactIcon from '../assets/course-icons/react.webp';
import FrontendIcon from '../assets/course-icons/frontend.webp';
import AngularIcon from '../assets/course-icons/angular.webp';
import LearningIcon from '../assets/course-icons/aprendizaje.webp';
import BestPracticesIcon from '../assets/course-icons/buenas-practicas.webp';
import LampIcon from '../assets/course-icons/lamp.png';
import AdvancedPHPIcon from '../assets/course-icons/php-avanzado.webp';
import LaravelIcon from '../assets/course-icons/laravel.webp';
import PhpIntroductionIcon from '../assets/course-icons/php.webp';
import GithubIcon from '../assets/course-icons/github.webp';
import DatabasesIcon from '../assets/course-icons/bds.webp';
import SoftwareEngineeringIcon from '../assets/course-icons/ingenieria-software.webp';
import MysqlIcon from '../assets/course-icons/mysql.jpg';
import PhpIcon from '../assets/course-icons/php.webp';
import Html5Icon from '../assets/course-icons/html5.jpg';

// Project modal images
import WatsonAssistantImg from '../assets/img/watson-assistant.gif';

import RickSearchSlide1 from '../assets/img/rick-and-morty/Screenshot_1.webp';
import RickSearchSlide2 from '../assets/img/rick-and-morty/MobileScreenshot_1.jpg';
import RickSearchSlide3 from '../assets/img/rick-and-morty/Screenshot_2.webp';
import RickSearchSlide4 from '../assets/img/rick-and-morty/Screenshot_3.webp';
import RickSearchSlide5 from '../assets/img/rick-and-morty/Screenshot_4.webp';

import PetgramSlide1 from '../assets/img/petgram/Petgram1.webp';
import PetgramSlide2 from '../assets/img/petgram/Petgram2.webp';
import PetgramSlide3 from '../assets/img/petgram/Petgram3.webp';
import PetgramSlide4 from '../assets/img/petgram/Petgram4.webp';
import PetgramSlide5 from '../assets/img/petgram/Petgram5.webp';

import EdoVideoSlide1 from '../assets/img/edo-video/edovideo1.webp';
import EdoVideoSlide2 from '../assets/img/edo-video/edovideo2.webp';
import EdoVideoSlide3 from '../assets/img/edo-video/edovideo3.webp';

import AngularStoreSlide1 from '../assets/img/angularstore/angularstore1.webp';
import AngularStoreSlide2 from '../assets/img/angularstore/angularstore2.webp';
import AngularStoreSlide3 from '../assets/img/angularstore/angularstore3.webp';
import AngularStoreSlide4 from '../assets/img/angularstore/angularstore4.webp';
import AngularStoreSlide5 from '../assets/img/angularstore/angularstore5.webp';

import ExpenseReportsSlide1 from '../assets/img/expense-reports/laravel1.webp';
import ExpenseReportsSlide2 from '../assets/img/expense-reports/laravel2.webp';
import ExpenseReportsSlide3 from '../assets/img/expense-reports/laravel3.webp';
import ExpenseReportsSlide4 from '../assets/img/expense-reports/laravel4.webp';

import PHPPostsSlide1 from '../assets/img/php-posts/php-posts1.png';
import PHPPostsSlide2 from '../assets/img/php-posts/php-posts2.webp';

import SellpointSlide1 from '../assets/img/sellpoint/sellpoint1.webp';
import SellpointSlide2 from '../assets/img/sellpoint/sellpoint2.webp';
import SellpointSlide3 from '../assets/img/sellpoint/sellpoint3.webp';
import SellpointSlide4 from '../assets/img/sellpoint/sellpoint4.webp';

import TriskelSlide1 from '../assets/img/triskel/triskel1.webp';
import TriskelSlide2 from '../assets/img/triskel/triskel2.webp';
import TriskelSlide3 from '../assets/img/triskel/triskel3.webp';
import TriskelSlide4 from '../assets/img/triskel/triskel4.webp';

import CrudBextlanImg from '../assets/img/crud-bextlan.jpg';

import BextlanHtmlSlide1 from '../assets/img/bextlanhtml/bextlanhtml1.jpg';
import BextlanHtmlSlide2 from '../assets/img/bextlanhtml/bextlanhtml2.jpg';
import BextlanHtmlSlide3 from '../assets/img/bextlanhtml/bextlanhtml3.jpg';

import FirstWebImg from '../assets/img/first-web.jpg';

// Certificates
import CertificateReactNative from '../assets/certificates/diploma-react-native-old-1.jpg';
import CertificateReactPro from '../assets/certificates/diploma-react-avanzado-1.jpg';
import CertificateSsr from '../assets/certificates/diploma-ssr-1.jpg';
import CertificateOrdenamiento from '../assets/certificates/diploma-ordenamiento-1.jpg';
import CertificateReactRedux from '../assets/certificates/diploma-react-router-redux-1.jpg';
import CertificateFundamentosNode from '../assets/certificates/diploma-fundamentos-node-1.jpg';
import CertificateMongoDB from '../assets/certificates/diploma-mongodb-1.jpg';
import CertificateBackendNode from '../assets/certificates/diploma-backend-nodejs-1.jpg';
import CertificateTypescript from '../assets/certificates/diploma-typescript-angular-1.jpg';
import CertificateJSPro from '../assets/certificates/diploma-javascript-profesional-1.jpg';
import CertificateReactJS from '../assets/certificates/diploma-react-js-1.jpg';
import CertificateFrontendDev from '../assets/certificates/diploma-frontend-developer-1.jpg';
import CertificateAngular from '../assets/certificates/angular.jpg';
import CertificateFundamentosJS from '../assets/certificates/diploma-fundamentos-javascript-1.jpg';
import CertificateAprender from '../assets/certificates/aprender.jpg';
import CertificateMejorCode from '../assets/certificates/diploma-mejor-codigo-1.jpg';
import CertificatePHPPath from '../assets/certificates/diploma-desarrollo-php-1.jpg';
import CertificatePHPAvanzado from '../assets/certificates/diploma-php-avanzado-1.jpg';
import CertificateLaravel from '../assets/certificates/diploma-curso-php-laravel-1.jpg';
import CertificatePHP from '../assets/certificates/diploma-php-1.jpg';
import CertificateGit from '../assets/certificates/diploma-git-github-1.jpg';
import CertificateDatabases from '../assets/certificates/diploma-bd-1.jpg';
import CertificateIngenieria from '../assets/certificates/diploma-ingenieria-1.jpg';

export const timelineItems = [
    [
        '2020',
        [
            {
                month: 'September',
                content: (
                    <ProjectCard
                        title="This portfolio"
                        sourceCodeLink="https://github.com/Felichz/Portfolio"
                        modal={{
                            description:
                                'A renewal of my portfolio made with React.',
                            technologies: [
                                'React',
                                'Javascript',
                            ],
                        }}
                    />
                ),
            },
            {
                content: (
                    <ProjectCard
                        title="Watson Assistant Chat"
                        image={WatsonAssistantThumb}
                        demoLink="https://anderssonfelix.com/WatsonAssistant/"
                        sourceCodeLink="https://github.com/Felichz/WatsonAssistantChat/"
                        modal={{
                            image: WatsonAssistantImg,
                            description:
                                'A frontend for the Watson Assistant chatbot.',
                            technologies: ['React', 'Javascript'],
                        }}
                    />
                ),
            },
            {
                content: (
                    <ProjectCard
                        title="Rick And Morty Mobile"
                        image={RickNativeThumb}
                        demoLink="https://www.anderssonfelix.com/RickNativeDemo/"
                        sourceCodeLink="https://github.com/Felichz/RickAndMortyReactNative"
                        modal={{
                            video:
                                'https://anderssonfelix.com/videos/ricknative.mp4',
                            description:
                                'Mobile version of the Rick and Morty database app.',
                            technologies: [
                                'React Native',
                                'React',
                                'GraphQL',
                                'Apollo',
                                'React Navigation',
                                'Native Base',
                                'Javascript',
                            ],
                        }}
                    />
                ),
            },
            {
                content: (
                    <ProjectCard
                        title="EdoVideo Mobile"
                        image={EdovideoNativeThumb}
                        demoLink=""
                        sourceCodeLink="https://github.com/Felichz/EdovideoReactNative"
                        modal={{
                            video: '',
                            description:
                                'Mobile version of Edovideo made with React Native.',
                            technologies: [
                                'React Native',
                                'React',
                                'Javascript',
                            ],
                        }}
                    />
                ),
            },
            {
                content: (
                    <CourseCard
                        title="React Native course"
                        icon={ReactNativeIcon}
                        coursePage="https://platzi.com/cursos/react-native-old/"
                        modal={{
                            image: CertificateReactNative,
                            technologies: [
                                'React Native',
                                'React',
                                'Javascript',
                            ],
                        }}
                    />
                ),
            },
            {
                content: (
                    <ProjectCard
                        title="Petgram"
                        image={PetgramThumb}
                        demoLink="https://petgram.felichz.vercel.app/"
                        sourceCodeLink="https://github.com/Felichz/Petgram"
                        modal={{
                            carouselImages: [
                                PetgramSlide1,
                                PetgramSlide2,
                                PetgramSlide3,
                                PetgramSlide4,
                                PetgramSlide5,
                            ],
                            description: 'Instagram-like app for pets.',
                            technologies: [
                                'React',
                                'Styled Components',
                                'Apollo',
                                'GraphQL',
                                'Webpack',
                                'Reach Router',
                                'Progressive Web App',
                                'Javascript',
                            ],
                        }}
                    />
                ),
            },
            {
                content: (
                    <CourseCard
                        title="Advanced React course"
                        icon={ReactAvanzadoIcon}
                        coursePage="https://platzi.com/cursos/react-avanzado/"
                        modal={{
                            image: CertificateReactPro,
                            technologies: [
                                'React',
                                'Styled Components',
                                'Apollo',
                                'GraphQL',
                                'Webpack',
                                'Reach Router',
                                'Progressive Web App',
                                'Javascript',
                            ],
                        }}
                    />
                ),
            },
            {
                month: 'August',
                content: (
                    <ProjectCard
                        title="Rick and Morty Search"
                        image={RickSearchThumb}
                        demoLink="https://www.anderssonfelix.com/rickandmorty/"
                        sourceCodeLink="https://github.com/Felichz/RickAndMorty"
                        modal={{
                            carouselImages: [
                                RickSearchSlide1,
                                RickSearchSlide2,
                                RickSearchSlide3,
                                RickSearchSlide4,
                                RickSearchSlide5,
                            ],
                            description:
                                'Tool for search, filter, and navigate a database.',
                            technologies: [
                                'React',
                                'Typescript',
                                'GraphQL',
                                'Apollo',
                                'Materialize css',
                                'Javascript',
                            ],
                        }}
                    />
                ),
            },
            {
                content: (
                    <CourseCard
                        title="Server Side Rendering with React and NodeJS"
                        icon={NodeJSIcon}
                        coursePage="https://platzi.com/cursos/ssr/"
                        modal={{
                            image: CertificateSsr,
                            technologies: [
                                'NodeJS',
                                'Express',
                                'Server Side Rendering',
                                'Webpack',
                                'Javascript',
                            ],
                        }}
                    />
                ),
            },
            {
                month: 'July',
                content: (
                    <CourseCard
                        title="Introduction to sorting algorithms"
                        icon={SortingIcon}
                        coursePage="https://platzi.com/cursos/ordenamiento/"
                        modal={{
                            image: CertificateOrdenamiento,
                            technologies: ['Algorithms'],
                        }}
                    />
                ),
            },
            {
                month: 'June',
                content: (
                    <ProjectCard
                        title="EdoVideo Backend"
                        sourceCodeLink="https://github.com/Felichz/EdoVideo-Backend"
                        modal={{
                            // image: {},
                            // video: '',
                            // carouselImages: [{}],
                            description:
                                'My first backend experience with NodeJS and MongoDB',
                            technologies: [
                                'NodeJS',
                                'Express',
                                'MongoDB',
                                'Server Side Rendering',
                                'Javascript',
                            ],
                        }}
                    />
                ),
            },
            {
                content: (
                    <ProjectCard
                        title="EdoVideo Frontend"
                        image={EdoVideoThumb}
                        demoLink="https://www.anderssonfelix.com/edovideo/"
                        sourceCodeLink="https://github.com/Felichz/EdoVideo"
                        modal={{
                            carouselImages: [
                                EdoVideoSlide1,
                                EdoVideoSlide2,
                                EdoVideoSlide3,
                            ],
                            description: 'A cinema web app.',
                            technologies: [
                                'React',
                                'Redux',
                                'Webpack',
                                'Javascript',
                            ],
                        }}
                    />
                ),
            },
            {
                content: (
                    <CourseCard
                        title="Backend with NodeJS and Express"
                        icon={NodeJSIcon}
                        coursePage="https://platzi.com/cursos/backend-nodejs/"
                        modal={{
                            image: CertificateBackendNode,
                            technologies: [
                                'NodeJS',
                                'Express',
                                'MongoDB',
                                'Javascript',
                            ],
                        }}
                    />
                ),
            },
            {
                content: (
                    <CourseCard
                        title="MongoDB course"
                        icon={MongoDBIcon}
                        coursePage="https://platzi.com/cursos/mongodb/"
                        modal={{
                            image: CertificateMongoDB,
                            technologies: ['MongoDB'],
                        }}
                    />
                ),
            },

            {
                content: (
                    <CourseCard
                        title="NodeJS course"
                        icon={NodeJSIcon}
                        coursePage="https://platzi.com/cursos/fundamentos-node/"
                        modal={{
                            image: CertificateFundamentosNode,
                            technologies: ['NodeJS', 'Javascript'],
                        }}
                    />
                ),
            },
            {
                content: (
                    <CourseCard
                        title="React router and Redux course"
                        icon={ReduxIcon}
                        coursePage="https://platzi.com/cursos/react-router-redux/"
                        modal={{
                            image: CertificateReactRedux,
                            technologies: [
                                'React',
                                'Redux',
                                'Webpack',
                                'Javascript',
                            ],
                        }}
                    />
                ),
            },
            {
                content: (
                    <CourseCard
                        title="Typescript with Angular course"
                        icon={TypescriptIcon}
                        coursePage="https://platzi.com/cursos/typescript-angular/"
                        modal={{
                            image: CertificateTypescript,
                            technologies: [
                                'Typescript',
                                'Angular',
                                'Javascript',
                            ],
                        }}
                    />
                ),
            },
            {
                month: 'May',
                content: (
                    <CourseCard
                        title="Practical React course"
                        icon={ReactIcon}
                        coursePage="https://platzi.com/cursos/react-ejs/"
                        modal={{
                            image: CertificateReactJS,
                            technologies: ['React', 'Webpack', 'Javascript'],
                        }}
                    />
                ),
            },
            {
                content: (
                    <CourseCard
                        title="Professional Javascript"
                        icon={JavascriptIcon}
                        coursePage="https://platzi.com/cursos/javascript-profesional/"
                        modal={{
                            image: CertificateJSPro,
                            technologies: ['Javascript'],
                        }}
                    />
                ),
            },
            {
                month: 'April',
                content: (
                    <CourseCard
                        title="Frontend Developer course"
                        icon={FrontendIcon}
                        coursePage="https://platzi.com/cursos/frontend-developer/"
                        modal={{
                            image: CertificateFrontendDev,
                            technologies: ['HTML5', 'CSS3'],
                        }}
                    />
                ),
            },
            {
                month: 'March',
                content: (
                    <ProjectCard
                        title="AngularStore"
                        image={AngularStoreThumb}
                        demoLink="https://www.anderssonfelix.com/angularstore/"
                        sourceCodeLink="https://github.com/Felichz/AngularStore"
                        modal={{
                            carouselImages: [
                                AngularStoreSlide1,
                                AngularStoreSlide2,
                                AngularStoreSlide3,
                                AngularStoreSlide4,
                                AngularStoreSlide5,
                            ],
                            description:
                                'A web store developed with Angular, it also has a built in admin panel where you can manage products.',
                            technologies: [
                                'Angular',
                                'Typescript',
                                'Firebase',
                                'Javascript',
                            ],
                        }}
                    />
                ),
            },
            {
                content: (
                    <CourseCard
                        title="Angular course"
                        icon={AngularIcon}
                        coursePage="https://platzi.com/cursos/angular/"
                        modal={{
                            image: CertificateAngular,
                            technologies: [
                                'Angular',
                                'Typescript',
                                'Firebase',
                                'Javascript',
                            ],
                        }}
                    />
                ),
            },
            {
                month: 'February',
                content: (
                    <CourseCard
                        title="Modern Javascript course"
                        icon={JavascriptIcon}
                        coursePage="https://platzi.com/cursos/fundamentos-javascript/"
                        modal={{
                            image: CertificateFundamentosJS,
                            technologies: ['Javascript'],
                        }}
                    />
                ),
            },
        ],
    ],
    [
        '2019',
        [
            {
                month: 'December',
                content: (
                    <CourseCard
                        title="Effective online learning strategies"
                        icon={LearningIcon}
                        coursePage="https://platzi.com/cursos/aprender/"
                        modal={{
                            image: CertificateAprender,
                            technologies: ['Soft skills'],
                        }}
                    />
                ),
            },
            {
                month: 'November',
                content: (
                    <CourseCard
                        title="Best coding practices course"
                        icon={BestPracticesIcon}
                        coursePage="https://platzi.com/cursos/mejor-codigo/"
                        modal={{
                            image: CertificateMejorCode,
                            technologies: ['PHP', 'Design Patterns', 'SOLID'],
                        }}
                    />
                ),
            },
            {
                content: (
                    <CourseCard
                        title="Backend with PHP learning path"
                        icon={LampIcon}
                        coursePage="https://platzi.com/desarrollo-php/"
                        modal={{
                            image: CertificatePHPPath,
                            technologies: [
                                'PHP',
                                'Laravel',
                                'Git',
                                'GitHub',
                                'Design Patterns',
                            ],
                        }}
                    />
                ),
            },
            {
                content: (
                    <CourseCard
                        title="Advanced PHP course"
                        icon={AdvancedPHPIcon}
                        coursePage="https://platzi.com/clases/php-avanzado/"
                        modal={{
                            image: CertificatePHPAvanzado,
                            technologies: ['PHP', 'Design Patterns'],
                        }}
                    />
                ),
            },
            {
                month: 'October',
                content: (
                    <ProjectCard
                        title="Expense Reports"
                        image={ExpenseReportsThumb}
                        demoLink="http://expensereports.herokuapp.com/"
                        sourceCodeLink="https://github.com/Felichz/ProyectoLaravel"
                        modal={{
                            carouselImages: [
                                ExpenseReportsSlide1,
                                ExpenseReportsSlide2,
                                ExpenseReportsSlide3,
                                ExpenseReportsSlide4,
                            ],
                            description:
                                'App built in Laravel where you can manage expense reports of travels or any other project of your company.',
                            technologies: ['Laravel', 'PHP', 'Bootstrap'],
                        }}
                    />
                ),
            },
            {
                content: (
                    <CourseCard
                        title="Laravel course"
                        icon={LaravelIcon}
                        coursePage="https://platzi.com/cursos/curso-php-laravel/"
                        modal={{
                            image: CertificateLaravel,
                            technologies: ['Laravel'],
                        }}
                    />
                ),
            },
            {
                content: (
                    <ProjectCard
                        title="PHP Posts"
                        image={PhpPostsThumb}
                        demoLink="https://www.anderssonfelix.com/phpposts/"
                        sourceCodeLink="https://github.com/Felichz/PHP-Posts"
                        modal={{
                            carouselImages: [PHPPostsSlide1, PHPPostsSlide2],
                            description:
                                'PHP app with user authentication and blog-like posts.',
                            technologies: ['PHP'],
                        }}
                    />
                ),
            },
            {
                content: (
                    <CourseCard
                        title="PHP course"
                        icon={PhpIntroductionIcon}
                        coursePage="https://platzi.com/cursos/php/"
                        modal={{
                            image: CertificatePHP,
                            technologies: ['PHP'],
                        }}
                    />
                ),
            },
            {
                content: (
                    <CourseCard
                        title="Git and GitHub course"
                        icon={GithubIcon}
                        coursePage="https://platzi.com/cursos/git-github/"
                        modal={{
                            image: CertificateGit,
                            technologies: ['Git', 'GitHub'],
                        }}
                    />
                ),
            },
            {
                content: (
                    <CourseCard
                        title="Databases course"
                        icon={DatabasesIcon}
                        coursePage="https://platzi.com/cursos/bd/"
                        modal={{
                            image: CertificateDatabases,
                            technologies: [
                                'SQL',
                                'MySQL',
                                'Database design',
                                'MongoDB',
                            ],
                        }}
                    />
                ),
            },
            {
                content: (
                    <CourseCard
                        title="Software Engineering Fundamentals"
                        icon={SoftwareEngineeringIcon}
                        coursePage="https://platzi.com/cursos/ingenieria/"
                        modal={{
                            image: CertificateIngenieria,
                            technologies: [
                                'Electronics',
                                'Operating Systems',
                                'Computer Networks',
                            ],
                        }}
                    />
                ),
            },
        ],
    ],
    [
        '2018',
        [
            {
                month: 'December',
                content: (
                    <ProjectCard
                        title="Point of sale"
                        image={PuntoVentaThumb}
                        demoLink="https://anderssonfelix.com/sellpoint/index.php?s=s5&do=pv"
                        sourceCodeLink="https://github.com/Felichz/FaroDigitalPHP"
                        modal={{
                            carouselImages: [
                                SellpointSlide1,
                                SellpointSlide2,
                                SellpointSlide3,
                                SellpointSlide4,
                            ],
                            description:
                                'Point of sale that generates electronic bills and reports.',
                            technologies: ['PHP'],
                        }}
                    />
                ),
            },
        ],
    ],
    [
        '2017',
        [
            {
                month: 'December',
                content: (
                    <CourseCard
                        title="PHP and MySQL course"
                        icon={MysqlIcon}
                        coursePage="https://rocha.gub.uy/portal/index.php?id=1127&seccion=farodigital"
                        modal={{
                            technologies: ['PHP', 'MySQL'],
                        }}
                    />
                ),
            },
            {
                month: 'February',

                content: (
                    <ProjectCard
                        title="Triskel web page"
                        image={TriskelThumb}
                        demoLink="https://anderssonfelix.com/triskel/Spanish/"
                        modal={{
                            carouselImages: [
                                TriskelSlide1,
                                TriskelSlide2,
                                TriskelSlide3,
                                TriskelSlide4,
                            ],
                            description: 'A website that I made on request.',
                            technologies: ['HTML5', 'CSS3'],
                        }}
                    />
                ),
            },
        ],
    ],
    [
        '2013',
        [
            {
                month: 'February',
                content: (
                    <ProjectCard
                        title="Contact Manager CRUD"
                        image={CrudBextlanThumb}
                        sourceCodeLink="https://github.com/jonmircha/youtube-php"
                        modal={{
                            image: CrudBextlanImg,
                            description:
                                'This is my first CRUD (An app where you can Create, Read, Update, and Delete information of a database, contacts in this case).',
                            technologies: ['PHP'],
                        }}
                    />
                ),
            },
            {
                content: (
                    <CourseCard
                        title="Basic PHP course"
                        icon={PhpIcon}
                        coursePage="https://www.youtube.com/playlist?list=PL469D93BF3AE1F84F"
                        modal={{
                            technologies: ['PHP'],
                        }}
                    />
                ),
            },
            {
                content: (
                    <ProjectCard
                        title="Super Ninja Zero"
                        image={SuperNinjaZeroThumb}
                        demoLink="https://scratch.mit.edu/projects/3111669/"
                        sourceCodeLink="https://scratch.mit.edu/projects/3111669/editor/"
                        modal={{
                            iframe: {
                                url:
                                    'https://scratch.mit.edu/projects/3111669/embed',
                                width: 485,
                                height: 402,
                            },
                            technologies: ['Scratch'],
                        }}
                    />
                ),
            },
            {
                content: (
                    <ProjectCard
                        title="Physics Engine"
                        image={PhysicsEngineThumb}
                        demoLink="https://scratch.mit.edu/projects/3111735/"
                        sourceCodeLink="https://scratch.mit.edu/projects/3111735/editor/"
                        modal={{
                            iframe: {
                                url:
                                    'https://scratch.mit.edu/projects/3111735/embed',
                                width: 485,
                                height: 402,
                            },
                            technologies: ['Scratch'],
                        }}
                    />
                ),
            },
        ],
    ],
    [
        '2012',
        [
            {
                month: 'December',
                content: (
                    <ProjectCard
                        title="My first complete web page"
                        image={Html5BextlanThumb}
                        sourceCodeLink="https://github.com/jonmircha/youtube-html5"
                        modal={{
                            carouselImages: [
                                BextlanHtmlSlide1,
                                BextlanHtmlSlide2,
                                BextlanHtmlSlide3,
                            ],
                            description:
                                'My first complete web page made with my first HTML5 and responsive web design course.',
                            technologies: [
                                'HTML5',
                                'CSS3',
                                'JQuery',
                                'Javascript',
                            ],
                        }}
                    />
                ),
            },
            {
                content: (
                    <CourseCard
                        title="Course of HTML5, CSS3 and Responsive Design"
                        icon={Html5Icon}
                        coursePage="https://www.youtube.com/playlist?list=PL211E9DF848CA18FF"
                        modal={{
                            technologies: ['HTML5', 'CSS3', 'JQuery'],
                        }}
                    />
                ),
            },
            {
                month: 'November',
                content: (
                    <ProjectCard
                        title="My first web page"
                        image={FirstWebThumb}
                        demoLink="https://anderssonfelix.com/FirstWeb/"
                        sourceCodeLink="https://github.com/Felichz/MyFirstWebPage"
                        modal={{
                            image: FirstWebImg,
                            description:
                                'Starting with the basics of HTML5 and CSS3.',
                            technologies: ['HTML5', 'CSS3'],
                        }}
                    />
                ),
            },
            {
                month: 'May',
                content: (
                    <ProjectCard
                        title="ANIMATE III winning animation"
                        image={Animate3Thumb}
                        demoLink="https://anderssonfelix.com/videos/Animate3.mp4"
                        modal={{
                            iframe: {
                                url:
                                    'https://anderssonfelix.com/iframes/GanadoresAnimate3/www.montevideo.com.uy/Ciencia-y-Tecnologia/entrega-premios.html',
                                width: 1000,
                                height: 650,
                            },
                            description:
                                'I got a place in the ten winners of this national contest of animations for the second time in a row.',
                            technologies: ['Scratch'],
                        }}
                    />
                ),
            },
        ],
    ],
    [
        '2011',
        [
            {
                month: 'May',
                content: (
                    <ProjectCard
                        title="ANIMATE II winning animation"
                        image={Animate2Thumb}
                        demoLink="https://anderssonfelix.com/videos/Animate2.mp4"
                        modal={{
                            iframe: {
                                url:
                                    'https://anderssonfelix.com/iframes/GanadoresAnimate2/www.montevideo.com.uy/Tiempo-libre/entrega-premios.html',
                                width: 1000,
                                height: 650,
                            },
                            description:
                                'I managed to be among the ten winners in this national contest of animations with Scratch.',
                            technologies: ['Scratch'],
                        }}
                    />
                ),
            },
            {
                month: 'May',
                content: (
                    <ProjectCard
                        title="Super Mario"
                        image={SuperMarioThumb}
                        demoLink="https://scratch.mit.edu/projects/1811764/"
                        sourceCodeLink="https://scratch.mit.edu/projects/1811764/editor/"
                        modal={{
                            iframe: {
                                url:
                                    'https://scratch.mit.edu/projects/1811764/embed',
                                width: 485,
                                height: 402,
                            },
                            technologies: ['Scratch'],
                        }}
                    />
                ),
            },
        ],
    ],
];

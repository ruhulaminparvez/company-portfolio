import { localImages } from "@/utils/localImages";
import { GiPaintRoller } from "react-icons/gi";
import { TfiWorld } from "react-icons/tfi";
import { HiCodeBracket } from "react-icons/hi2";
import { RiShoppingCartLine } from "react-icons/ri";

const sliderData = [
    {
        id: 1,
        image: localImages?.sliderOne,
        imageAlt: 'Slider Image 1'
    },
    {
        id: 2,
        image: localImages?.sliderTwo,
        imageAlt: 'Slider Image 2'
    },
    {
        id: 3,
        image: localImages?.sliderThree,
        imageAlt: 'Slider Image 3'
    }
];

const typeEffectData = ['Transform Ideas', 'Convert Ideas', 'Evolve Ideas']

const servicesData = [
    {
        id: 1,
        icon: <GiPaintRoller />,
        title: 'Creative Design',
        description: 'Elevate your brand with our creative design services. We specialize in crafting visually stunning solutions that resonate with your audience and leave a lasting impression on your business.'
    },
    {
        id: 2,
        icon: <TfiWorld />,
        title: 'Web Design & Development',
        description: 'Experience the future of online presence with our comprehensive web design and development services. Our expert team blends creativity and technical expertise to create dynamic, user-centric websites and applications that drive engagement and deliver exceptional results for your business. We start by understanding your unique requirements and goals, ensuring that the end product aligns perfectly with your brand identity. From responsive web design to robust backend development, our services cover the full spectrum of web development needs. We leverage the latest technologies and industry best practices to build scalable, secure, and high-performance websites and applications. Our commitment to delivering excellence extends beyond the launch, as we offer ongoing maintenance and support to ensure your digital presence remains cutting-edge. Trust us to transform your vision into a functional, visually appealing, and user-friendly online experience that captivates your audience and sets you apart in the digital landscape.'
    },
    {
        id: 3,
        icon: <HiCodeBracket />,
        title: 'Mobile App Development',
        description: 'Revolutionize your business with our mobile app development services. Our experienced team is dedicated to creating innovative, user-friendly mobile applications that empower your brand and connect with your audience. We follow a comprehensive development process, starting with a thorough understanding of your business objectives and user needs. From concept to deployment, our skilled developers employ cutting-edge technologies to build robust and scalable mobile apps for both iOS and Android platforms. We prioritize user experience, ensuring intuitive navigation and seamless functionality. Whether you need a native app, cross-platform solution, or a progressive web app, we tailor our services to meet your specific requirements. Our commitment to quality extends to rigorous testing and post-launch support, ensuring your app performs flawlessly. Partner with us to bring your ideas to life, enhance customer engagement, and stay ahead in the competitive mobile landscape.'
    },
    {
        id: 4,
        icon: <RiShoppingCartLine />,
        title: 'E-commerce Solutions',
        description: 'Transform your online business with our comprehensive e-commerce solutions. We provide end-to-end services, from website development to payment integration.'
    }
];

const showcaseData = [
    {
        id: 1,
        image: localImages?.showcaseOne,
        imageAlt: 'Showcase Image 1',
        title: 'Project One',
        description: 'Lorem ipsum dolor sit amet',
        category: 'Web Design',
        link: '#',
        linkText: 'Live Demo'
    },
    {
        id: 2,
        image: localImages?.showcaseTwo,
        imageAlt: 'Showcase Image 2',
        title: 'Project Two',
        description: 'Lorem ipsum dolor sit amet',
        category: 'Web Development',
        link: '#',
        linkText: 'Live Demo'
    },
    {
        id: 3,
        image: localImages?.showcaseThree,
        imageAlt: 'Showcase Image 3',
        title: 'Project Three',
        description: 'Lorem ipsum dolor sit amet',
        category: 'Mobile App Development',
        link: '#',
        linkText: 'Live Demo'
    }
];

const teamData = [
    {
        id: 1,
        image: localImages?.teamOne,
        imageAlt: 'Team Member 1',
        name: 'John Doe',
        position: 'CEO',
        intro: 'Visionary leader dedicated to innovation and fostering team collaboration.'
    },
    {
        id: 2,
        image: localImages?.teamTwo,
        imageAlt: 'Team Member 2',
        name: 'Jane Doe',
        position: 'Designer',
        intro: 'Creative designer bringing ideas to life with user-centric modern designs.'
    },
    {
        id: 3,
        image: localImages?.teamThree,
        imageAlt: 'Team Member 3',
        name: 'John Smith',
        position: 'Developer',
        intro: 'Innovative coder dedicated to clean, efficient code and solutions.'
    },
    {
        id: 4,
        image: localImages?.teamFour,
        imageAlt: 'Team Member 4',
        name: 'Jane Smith',
        position: 'Marketing',
        intro: 'Strategic marketer driving brand awareness with impactful connections.'
    }
];

const testimonialsData = [
    {
        id: 1,
        avatar: localImages?.teamOne,
        avatarAlt: 'Client Avatar One',
        name: 'John Doe',
        position: 'CEO',
        company: 'Company One',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 2,
        avatar: localImages?.teamFour,
        avatarAlt: 'Client Avatar Two',
        name: 'Jane Smith',
        position: 'Marketing',
        company: 'Company Two',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
]

const visionData = [
    {
        id: 1,
        title: 'Design your application, product or service',
        image: localImages?.visionOne,
        imageAlt: 'Vision Image 1',
        description: 'Explore the endless possibilities of designing your application, product, or service with our intuitive tools. Unleash your creativity and bring your ideas to life effortlessly. Our platform empowers you to innovate and iterate, ensuring that your vision is realized with precision and excellence.'
    },
    {
        id: 2,
        title: 'Easily manage your business with our tools and services',
        image: localImages?.visionTwo,
        imageAlt: 'Vision Image 2',
        description: 'Simplify the complexities of managing your business operations with our comprehensive suite of tools and services. From streamlining workflows to optimizing resource allocation, we provide the solutions you need to drive efficiency and growth. With our user-friendly interface and robust features, you can navigate the challenges of entrepreneurship with confidence and ease.'
    }
];

export {
    sliderData,
    typeEffectData,
    servicesData,
    showcaseData,
    teamData,
    testimonialsData,
    visionData
};
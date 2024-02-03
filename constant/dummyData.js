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

export { sliderData, typeEffectData, servicesData, showcaseData };
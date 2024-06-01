export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: "Muzych's Blog",
    subtitle: 'Less is More.',
    description: '',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Now',
            href: '/now'
        }
    ],
    socialLinks: [
        {
            text: 'Twitter',
            href: 'https://x.com/Woodson_yc'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/Muzych'
        },
        {
            text: 'Digital Garden',
            href: 'https://muzych.wiki/'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: "I'm **Muzych**. Unlike others, I will not be sharing my personal information here; I hope you understand. I believe that societal labels constrain my desire for expression and lead others to form preconceived stereotypes. In my view, labeling individuals is a detrimental byproduct of our superficial and hurried society. Therefore, I hope you can get to know me gradually through my words and thoughts.",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            // {
            //     text: 'Get in Touch',
            //     href: '/contact'
            // },
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;

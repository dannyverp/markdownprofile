import Prism from 'prismjs';
import Link from "next/link";
import Simple from '../templates/simple'
import Handlebars from 'handlebars'

require('prismjs/components/prism-markdown')

class Index extends React.Component {

    constructor() {
        super();
        let state =
            {
                header: "Hi there 👋",
                description: "I\'m Danny, a software engineer 💻 currently working at [Takeaway.com](https://takeaway.com) 🍲🥡\n\nI have a passion for clean code, Java, teaching, PHP, Lifeguarding and Javascript\n\nMy current side project is [Markdown Profile](https://markdownprofile.com)",
                linkedin: "https://linkedin.com/in/dannyverpoort",
                twitter: "https://twitter.com/dannyverp",
                website: "https://dannyverpoort.dev/",
                email: "hallo@dannyverpoort.nl",
            };
        let template = Handlebars.compile(Simple());
        let filledTemplate = template(state);
        let highlightedMarkdown = Prism.highlight(filledTemplate, Prism.languages.markdown, 'markdown');
        state.template = highlightedMarkdown;
        this.state = state
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
        let state = this.state
        state[target.name] = target.value;
        let template = Handlebars.compile(Simple());
        let filledTemplate = template(this.state);
        let highlightedMarkdown = Prism.highlight(filledTemplate, Prism.languages.markdown, 'markdown');
        this.setState({
            template: highlightedMarkdown
        })
    }

    render() {
        return (
            <div>
                <div className="version">
                    <div className="demo version-section"><a href="https://github.com/dannyverp/markdownprofile/"
                                                             target="_blank" className="github-corner"
                                                             aria-label="View source on GitHub">
                        <svg width="80" height="80" viewBox="0 0 250 250"
                             style={{
                                 fill: '#ed8936',
                                 color: '#fff',
                                 position: 'absolute',
                                 top: 0,
                                 border: 0,
                                 right: 0,
                             }}
                             aria-hidden="true">
                            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                            <path
                                d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                                fill="currentColor" style={{transformOrigin: '130px 106px'}}
                                className="octo-arm"></path>
                            <path
                                d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                                fill="currentColor" className="octo-body"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                <header className="p-20 header">
                    <section className="flex mb-20">
                        <div className="flex flex-col mr-2 justify-center">
                            <span className="rounded blend-screen p-1 bg-white text-black text-bold text-2xl">MP</span>
                        </div>
                        <h1 className="text-white text-3xl text-semibold">
                            Markdown Profile
                        </h1>
                    </section>
                    <section className="block xl:flex flex-row justify-center items-center">
                        <div className="w-full mb-20 xl:mb-0 xl:w-1/2 xl:mr-20 text-center">
                            <img className="m-auto w-full bg-white p-3" src="img/profilebanner.png" alt="Profile page"/>
                        </div>
                        <div className="flex flex-col flex-1 items-start">
                            <h1 className="text-bold text-white text-3xl">Create your own Markdown Profile</h1>
                            <p className="mt-20 text-xl text-white flex-grow-1">Github allows you to host your own
                                Markdown page as
                                an
                                introduction to your profile. Use the generator below to create your own Github profile
                                template. These templates include features
                                like badges for social media profiles, latest blog posts and other interesting features.
                                These
                                templates will really spice up your profile <span>🔥</span></p>

                            <Link href="#step1" scroll={false}>
                                <button
                                    className="mt-20 bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-6 border-b-4 border-orange-700 hover:border-orange-500 rounded text-center focus:outline-none">Get
                                    started
                                </button>
                            </Link>
                        </div>
                    </section>
                </header>
                <main className="py-16 px-20">
                    <section>
                        <header className="pb-2 border-0 border-b-2 border-orange-300">
                            <h2 id="step1" className="text-3xl text-bold">Step 1 - <span className="text-xl">Pick the template you want to use.</span>
                            </h2>
                        </header>
                        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-16">
                            <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
                                <div
                                    className="inline-flex overflow-hidden">
                                    <img
                                        src="img/profilebanner.png"
                                        alt=""
                                        className="h-full w-full"/>
                                </div>

                                <h2 className="mt-4 font-bold text-xl">Simple Template</h2>
                                <h6 className="mt-2 text-sm font-medium">Danny Verpoort</h6>

                                <p className="text text-gray-500 text-center mt-3">
                                    A simple template just like in the header.
                                </p>

                                <ul className="flex flex-row mt-4 space-x-2">
                                    <li>
                                        <a href="#step2"
                                           className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800 bg-orange-400">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </main>
                    </section>
                    <section className="py-16" id="step2">
                        <header className="pb-2 border-0 border-b-2 border-orange-300">
                            <h2 className="text-3xl text-bold">Step 2 - <span
                                className="text-xl">Fill in your information.</span></h2>
                        </header>
                        <main className="pt-16">
                            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                                <div className="-mx-3 mb-6">
                                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                            htmlFor="grid-header">
                                            Header
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                            id="grid-header" type="text" placeholder="Hi there 👋"
                                            value={this.state.header}
                                            onChange={this.handleChange}
                                            name="header"
                                        />
                                    </div>
                                    <div className="md:w-2/3 px-3">
                                        <label
                                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                            htmlFor="grid-description">
                                            Description
                                        </label>
                                        <textarea
                                            className="h-32 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                            id="grid-description" type="text"
                                            value={this.state.description}
                                            onChange={this.handleChange}
                                            name="description"
                                        />
                                    </div>
                                </div>
                                <div className="-mx-3 md:flex mb-2">
                                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                            htmlFor="grid-linkedin">
                                            LinkedIn
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                            id="grid-city" type="text"
                                            value={this.state.linkedin}
                                            onChange={this.handleChange}
                                            name="linkedin"
                                        />
                                    </div>
                                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                            htmlFor="grid-twitter">
                                            Twitter
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                            id="grid-twitter" type="text"
                                            value={this.state.twitter}
                                            onChange={this.handleChange}
                                            name="twitter"
                                        />
                                    </div>
                                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                            htmlFor="grid-website">
                                            Website
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                            id="grid-website" type="email"
                                            value={this.state.website}
                                            onChange={this.handleChange}
                                            name="website"
                                        />
                                    </div>
                                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                            htmlFor="grid-email">
                                            Email
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                            id="grid-email" type="text"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            name="email"
                                        />
                                    </div>
                                </div>
                            </div>
                        </main>
                    </section>
                    <section>
                        <header className="pb-2 border-0 border-b-2  border-orange-300 mb-16">
                            <h2 className="text-3xl text-bold">Step 3 - <span className="text-xl">Use the markdown in your profile</span>
                            </h2>
                        </header>
                        <main>
                            <pre className="language-css"><code
                                dangerouslySetInnerHTML={{__html: this.state.template}}/></pre>
                        </main>
                    </section>
                </main>
                <footer className="bg-gray-300 w-full px-20 py-8">
                    <div className="md:flex items-center justify-between py-8">
                        <p className="pt-4 md:pt-0 text-orange-500">All rights reserved</p>
                        <p className="py-4 md:py-0 text-orange-500">Built with
                            <svg fill="#e53e3e" viewBox="0 0 24 24" className="inline w-5 h-5 mx-1 pt-px text-red-600"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                            </svg> by&nbsp;<a href="https://dannyverpoort.dev">Danny Verpoort</a>.
                        </p>
                        <div className="pb-4 md:pb-0 flex items-center">
                            <a href="https://dannyverpoort.dev">
                                <svg className="h-6 w-6 fill-current text-orange-600 mr-6" viewBox="0 0 512 512" id="Layer_1" enableBackground="new 0 0 512.418 512.418" xmlns="http://www.w3.org/2000/svg"><path d="m437.335 75.082c-100.1-100.102-262.136-100.118-362.252 0-100.103 100.102-100.118 262.136 0 362.253 100.1 100.102 262.136 100.117 362.252 0 100.103-100.102 100.117-262.136 0-362.253zm-10.706 325.739c-11.968-10.702-24.77-20.173-38.264-28.335 8.919-30.809 14.203-64.712 15.452-99.954h75.309c-3.405 47.503-21.657 92.064-52.497 128.289zm-393.338-128.289h75.309c1.249 35.242 6.533 69.145 15.452 99.954-13.494 8.162-26.296 17.633-38.264 28.335-30.84-36.225-49.091-80.786-52.497-128.289zm52.498-160.936c11.968 10.702 24.77 20.173 38.264 28.335-8.919 30.809-14.203 64.712-15.452 99.954h-75.31c3.406-47.502 21.657-92.063 52.498-128.289zm154.097 31.709c-26.622-1.904-52.291-8.461-76.088-19.278 13.84-35.639 39.354-78.384 76.088-88.977zm0 32.708v63.873h-98.625c1.13-29.812 5.354-58.439 12.379-84.632 27.043 11.822 56.127 18.882 86.246 20.759zm0 96.519v63.873c-30.119 1.877-59.203 8.937-86.246 20.759-7.025-26.193-11.249-54.82-12.379-84.632zm0 96.581v108.254c-36.732-10.593-62.246-53.333-76.088-88.976 23.797-10.817 49.466-17.374 76.088-19.278zm32.646 0c26.622 1.904 52.291 8.461 76.088 19.278-13.841 35.64-39.354 78.383-76.088 88.976zm0-32.708v-63.873h98.625c-1.13 29.812-5.354 58.439-12.379 84.632-27.043-11.822-56.127-18.882-86.246-20.759zm0-96.519v-63.873c30.119-1.877 59.203-8.937 86.246-20.759 7.025 26.193 11.249 54.82 12.379 84.632zm0-96.581v-108.254c36.734 10.593 62.248 53.338 76.088 88.977-23.797 10.816-49.466 17.373-76.088 19.277zm73.32-91.957c20.895 9.15 40.389 21.557 57.864 36.951-8.318 7.334-17.095 13.984-26.26 19.931-8.139-20.152-18.536-39.736-31.604-56.882zm-210.891 56.882c-9.165-5.947-17.941-12.597-26.26-19.931 17.475-15.394 36.969-27.801 57.864-36.951-13.068 17.148-23.465 36.732-31.604 56.882zm.001 295.958c8.138 20.151 18.537 39.736 31.604 56.882-20.895-9.15-40.389-21.557-57.864-36.951 8.318-7.334 17.095-13.984 26.26-19.931zm242.494 0c9.165 5.947 17.942 12.597 26.26 19.93-17.475 15.394-36.969 27.801-57.864 36.951 13.067-17.144 23.465-36.729 31.604-56.881zm26.362-164.302c-1.249-35.242-6.533-69.146-15.452-99.954 13.494-8.162 26.295-17.633 38.264-28.335 30.84 36.225 49.091 80.786 52.497 128.289z"/></svg>
                            </a>
                            <a href="mailto:hallo@dannyverpoort.nl">
                                <svg fill="none" className="h-6 w-6 text-orange-600 mr-6" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </a>
                            <a href="https://linkedin.com/in/dannyverpoort">
                                <svg className="h-6 w-6 fill-current text-orange-600 mr-6" viewBox="0 0 512 512">
                                    <path
                                        d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"/>
                                </svg>
                            </a>
                            <a href="https://twitter.com/dannyverp">
                                <svg className="h-6 w-6 fill-current text-orange-600 mr-6" viewBox="0 0 512 512">
                                    <path
                                        d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"/>
                                </svg>
                            </a>
                            <a href="https://medium.com/@dannyverpoort">
                                <svg className="h-6 w-6 fill-current text-orange-600 mr-1" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512"><path d="m22.085 4.733 1.915-1.832v-.401h-6.634l-4.728 11.768-5.379-11.768h-6.956v.401l2.237 2.693c.218.199.332.49.303.783v10.583c.069.381-.055.773-.323 1.05l-2.52 3.054v.396h7.145v-.401l-2.52-3.049c-.273-.278-.402-.663-.347-1.05v-9.154l6.272 13.659h.729l5.393-13.659v10.881c0 .287 0 .346-.188.534l-1.94 1.877v.402h9.412v-.401l-1.87-1.831c-.164-.124-.249-.332-.214-.534v-13.467c-.035-.203.049-.411.213-.534z"/></svg>
                            </a>
                            <a href="https://dev.to/dannyverp">
                                <svg className="h-6 w-16 fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 120 60" viewBox="0 0 120 60"><path d="m26.2 48.6v-37.2c0-.5.1-1 .3-1.5s.5-.9.8-1.3c.4-.4.8-.7 1.3-.9s1-.3 1.5-.3h59.7c.5 0 1 .1 1.5.3s.9.5 1.3.9.7.8.9 1.3.3 1 .3 1.5v37.1c0 .5-.1 1-.3 1.5s-.5.9-.9 1.3-.8.7-1.3.9-1 .3-1.5.3h-59.6c-.5 0-1-.1-1.5-.3s-.9-.5-1.3-.9-.7-.8-.9-1.3c-.2-.4-.3-.9-.3-1.4z" /><path d="m68.3 24.9c.7 2.6 1.8 6.9 2.5 9.6 1.1 4.1 1.4 5 2.3 5.9.6.7 1.4 1.1 1.9 1.1 1 0 2.4-1 2.8-2.2.3-.9 5-18.4 5-18.8 0-.1-.9-.2-2.1-.1l-2.1.1-1.9 7.1c-1 4.4-1.7 6.8-1.9 6.4-.3-.8-3.5-13.5-3.5-13.6s-1-.1-2.1-.1h-2.2zm-13.6-3.8c-.7.9-.7 1.3-.7 9.8v8.9l.8.8c.8.8 1 .8 5.3.8h4.5v-3.6l-3.4-.1-3.4-.1v-5l2.1-.1 2.1-.1v-3.6h-4.3v-5h7v-3.6h-4.7c-4.6 0-4.6 0-5.3.9zm-7.6 3.4c.8.6.8.8.8 6.1 0 5.2 0 5.5-.7 6.2-.6.5-1.2.7-2.3.7h-1.6l-.1-6.9-.1-6.9h1.6c1.1.2 1.9.4 2.4.8zm-7.7 6.3v10.6h3.7c4.1 0 5.9-.5 7.1-2.2 1.3-1.6 1.5-3 1.3-9.3-.1-5.6-.2-6-.9-7.2-1.3-2.1-2.7-2.6-7.3-2.6h-4v10.7z" fill="#fff"/></svg>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Index
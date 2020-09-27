import Template from './contracts/Template'
import TemplateSelector from "../components/templateSelector";
import Handlebars from 'handlebars'

class SimpleTemplate extends Template {

    constructor() {
        super();
        this.state = {
            header: "Hi there 👋",
            description: "I\'m Danny, a software engineer 💻 currently working at [Takeaway.com](https://takeaway.com) 🍲🥡\n\nI have a passion for clean code, Java, teaching, PHP, Lifeguarding and Javascript\n\nMy current side project is [Markdown Profile](https://markdownprofile.com)",
            linkedin: "https://linkedin.com/in/dannyverpoort",
            twitter: "https://twitter.com/dannyverp",
            website: "https://dannyverpoort.dev/",
            email: "hallo@dannyverpoort.nl",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.onMarkdownChange(
            (Handlebars.compile(this.getTemplate()))(this.state)
        );
    }

    handleChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
        let state = this.state
        state[target.name] = target.value;
        this.props.onMarkdownChange(
            (Handlebars.compile(this.getTemplate()))(state)
        );
    }

    getTemplate () {
        return "### {{header}}\n\n" +
            "{{description}}\n\n" +
            "[LinkedIn 💼]({{linkedin}})\n\n" +
            "[Twitter 🐦]({{twitter}})\n\n" +
            "[Website 🌍]({{website}})\n\n" +
            "[Email 📬](mailto:{{email}})\n";
    }

    static getSelector() {
        return <TemplateSelector
            image="img/profilebanner.png"
            title="Simple Template"
            author="Danny Verpoort"
            description="A simple template just like in the header."
        />
    }

    render = () => (
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
                        onChange={this.handleChange}
                        value={this.state.description}
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
    );
}

export default SimpleTemplate
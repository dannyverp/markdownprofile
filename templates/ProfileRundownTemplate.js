import Template from './contracts/Template'
import TemplateSelector from "../components/templateSelector";
import Handlebars from 'handlebars'

class ProfileRundownTemplate extends Template {

    constructor() {
        super();
        this.themes = [
            'default',
            'dark',
            'radical',
            'merko',
            'gruvbox',
            'tokyonight',
            'onedark',
            'cobalt',
            'synthwave',
            'highcontrast',
            'dracula'
        ];
        this.state = {
            username: 'dannyverp',
            theme: this.themes[0]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.onMarkdownChange(
            (this.getTemplate())
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

    getTemplate() {
        return "[![" + this.state.username + "'s github stats](https://github-readme-stats.vercel.app/api?username=" + this.state.username + "&show_icons=true&theme=" + this.state.theme + ")](https://github.com/" + this.state.username + "/)";
    }

    static getSelector() {
        return <TemplateSelector
            image="img/statusprofile.svg"
            title="Profile status block"
            author="Anurag Hazra"
            description={<span>A status card displaying information about your profile. Based on <a target="_blank"
                                                                                                    className="text-orange-400"
                                                                                                    href="https://github.com/anuraghazra/github-readme-stats">Anurag Hazra's work</a>.</span>}
            active="false"
        />
    }

    render = () => (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-3 md:flex mb-2">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-linkedin">
                        Username
                    </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-user" type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                        name="username"
                    />
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-twitter">
                        Theme
                    </label>
                    <div className="relative">
                        <select
                            onChange={this.handleChange}
                            name="theme"
                            id="theme"
                            name="theme"
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                            {this.themes.map(function (theme, index) {
                                return <option value={theme} key={index}>{theme}</option>
                            })}
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileRundownTemplate
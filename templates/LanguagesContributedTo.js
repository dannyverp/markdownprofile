import Template from './contracts/Template'
import TemplateSelector from "../components/templateSelector";
import Handlebars from 'handlebars'

class LanguagesContributedTo extends Template {

    constructor() {
        super();
        this.layouts = [
            "compact",
            "demo"
        ];
        this.state = {
            username: 'dannyverp',
            layout: this.layouts[0]
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
        return `[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${this.state.username}&layout=${this.state.layout})](https://github.com/anuraghazra/github-readme-stats)`
    }

    static getSelector() {
        return <TemplateSelector
            image="img/languagesContributedTo.svg"
            title="Most used languages"
            author={<a target="_blank" href="https://github.com/anuraghazra/github-readme-stats">Anurag Hazra</a>}
            description={<span>A card to display info about the languages you've contributed in your github profile.</span>}
            active="false"
        />
    }

    render = () => (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="profile-status-form">
                <div>
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
                <div>
                    <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-twitter">
                        Layout
                    </label>
                    <div className="relative">
                        <select
                            onChange={this.handleChange}
                            name="layout"
                            id="layout"
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                            {this.layouts.map(function (layout, index) {
                                return <option value={layout} key={index}>{layout}</option>
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

export default LanguagesContributedTo
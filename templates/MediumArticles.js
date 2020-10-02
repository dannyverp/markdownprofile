import Template from './contracts/Template'
import TemplateSelector from "../components/templateSelector";
import Handlebars from 'handlebars'

class ProfileRundownTemplate extends Template {

    constructor() {
        super();
        this.types = ['horizontal', 'vertical']
        this.state = {
            username: 'Souravdey777',
            type: this.types[0],
            amount: 2
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.onMarkdownChange(
            (this.getTemplate())
        );
    }

    incrementAmount = () => {
        let state = this.state;
        state.amount--;
        this.setState(state);
        this.props.onMarkdownChange(
            (Handlebars.compile(this.getTemplate()))(state)
        );
    }

    decrementAmount = () => {
        let state = this.state;
        state.amount++
        this.setState(state);
        this.props.onMarkdownChange(
            (Handlebars.compile(this.getTemplate()))(state)
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
        return "[![Sourav Dey's Blog Cards](https://github-cards-external-blogs.souravdey777.vercel.app/getMediumBlogs?username=" + this.state.username + "&type=" + this.state.type + "&limit=" + this.state.amount + ")](https://medium.com/@" + this.state.username + ")"
    }

    static getSelector() {
        return <TemplateSelector
            image="img/mediumarticles.svg"
            title="Medium blog"
            author={<a target="_blank"
                       href="https://github.com/Souravdey777/Github-Cards-External-Blogs">Sourav Dey</a>}
            description={<span>A card displaying your latest Medium articles.</span>}
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
                        htmlFor="grid-linkedin">
                        Amount of blog items
                    </label>
                    <div class="flex flex-row h-12 w-2 w-full rounded-lg relative bg-transparent mt-1">
                        <button onClick={this.incrementAmount}
                                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                            <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                            className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                            id="grid-user" type="number"
                            value={this.state.amount}
                            onChange={this.handleChange}
                            name="amount"
                        />
                        <button onClick={this.decrementAmount}
                                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                            <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                    </div>
                </div>
                <div>
                    <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-twitter">
                        Card layout
                    </label>
                    <div className="relative">
                        <select
                            onChange={this.handleChange}
                            name="type"
                            id="theme"
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                            {this.types.map(function (type, index) {
                                return <option value={type} key={index}>{type}</option>
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
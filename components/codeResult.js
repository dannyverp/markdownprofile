class CodeResult extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section>
                <header className="pb-2 border-0 border-b-2  border-orange-300 mb-16">
                    <h2 className="text-3xl text-bold">Step 3 - <span className="text-xl">Use the markdown in your profile</span>
                    </h2>
                </header>
                <main>
                    <pre className="language-css">
                        <code dangerouslySetInnerHTML={{__html: this.props.template}}/>
                    </pre>
                </main>
            </section>
        )
    }
}

export default CodeResult
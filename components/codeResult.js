class CodeResult extends React.Component {
  constructor() {
    super();
    this.state = {
      copySuccess: false,
    };
    this.codeArea = React.createRef();
  }

  copyToClipboard = e => {
    const mdCode = this.codeArea.current.innerText;
    navigator.clipboard.writeText(mdCode);
    this.displaySuccessModal();
  };

  displaySuccessModal = () => {
    this.setState({ copySuccess: true });
    setTimeout(() => {
      this.setState({ copySuccess: false });
    }, 1000);
  };

  render() {
    return (
      <section>
        <header className="pb-2 border-0 border-b-2  border-orange-300 mb-16">
          <h2 className="text-3xl text-bold">
            Step 3 -
            <span className="text-xl">Use the markdown in your profile</span>
          </h2>
        </header>
        <main>
          <button onClick={this.copyToClipboard} className="">
            Copy
          </button>
          {this.state.copySuccess && <div className="">Copied</div>}
          <pre className="language-css" ref={this.codeArea}>
            <code dangerouslySetInnerHTML={{ __html: this.props.template }} />
          </pre>
        </main>
      </section>
    );
  }
}

export default CodeResult;

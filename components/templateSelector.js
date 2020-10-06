class TemplateSelector extends React.Component {
  constructor() {
    super();
  }
  render() {
    const className =
      'flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800' +
      (this.props.activeTemplate === this.props.template
        ? ' bg-orange-400'
        : '');
    return (
      <div
        onClick={() => {
          if (typeof this.props.onTemplateChange === 'function') {
            this.props.onTemplateChange(this.props.template);
          }
        }}
        className="flex flex-col items-center justify-start bg-white p-4 shadow rounded-lg hover:shadow-xl cursor-pointer"
      >
        <div
          className="inline-flex overflow-hidden items-center"
          style={{ height: '200px' }}
        >
          <img src={this.props.image} alt="" className="w-full" />
        </div>

        <h2 className="mt-4 font-bold text-xl">{this.props.title}</h2>
        <h6 className="mt-2 text-sm font-medium">{this.props.author}</h6>
        <p className="text text-gray-500 text-center mt-3 mb-4">
          {this.props.description}
        </p>

        <ul className="flex flex-row mt-auto space-x-2">
          <li>
            <a className={className}>
              <i className="fab fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default TemplateSelector;

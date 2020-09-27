import Prism from 'prismjs'
import {Header, Footer, VersioningLabel, CodeResult} from '../components'
import * as Templates from '../templates/index'
import React from "react";


require('prismjs/components/prism-markdown')

class Index extends React.Component {

    constructor() {
        super();
        this.state = {markdown: 'Loading...'}
        let templates = [];
        for (let templatesKey in Templates) {
            templates.push(Templates[templatesKey])
        }
        this.state.templates = templates;
        this.state.currentTemplate = Templates['SimpleTemplate']
        this.handleMarkdownUpdate = this.handleMarkdownUpdate.bind(this);
        this.handleTemplateChange = this.handleTemplateChange.bind(this);
    }

    handleMarkdownUpdate(newMarkdown) {
        this.setState({markdown: newMarkdown});
    }

    handleTemplateChange(newTemplate) {
        this.setState({currentTemplate: newTemplate})
    }

    render() {
        return (
            <div>
                <VersioningLabel/>
                <Header/>
                <main className="py-16 px-20">
                    <section>
                        <header className="pb-2 border-0 border-b-2 border-orange-300">
                            <h2 id="step1" className="text-3xl text-bold">Step 1 - <span className="text-xl">Pick the template you want to use.</span>
                            </h2>
                        </header>
                        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-16">
                            {this.state.templates.map(function (Template, index) {
                                let element = Template.getSelector();
                                return React.cloneElement(element, {
                                    key: index,
                                    activeTemplate: this.state.currentTemplate,
                                    onTemplateChange: this.handleTemplateChange,
                                    template: Template
                                })
                            }, this)}
                        </main>
                    </section>
                    <section className="py-16" id="step2">
                        <header className="pb-2 border-0 border-b-2 border-orange-300">
                            <h2 className="text-3xl text-bold">Step 2 - <span
                                className="text-xl">Fill in your information.</span></h2>
                        </header>
                        <main className="pt-16" id="templateForm">
                            {<this.state.currentTemplate onMarkdownChange={this.handleMarkdownUpdate}/>}
                        </main>
                    </section>
                    <CodeResult template={this.state.markdown}/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default Index
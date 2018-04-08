import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import SomeTable from "../presentational/SomeTable";
import UpdateButton from "../presentational/UpdateButton";

class MainContainer extends Component {
    constructor() {
        super();

        this.state = {
            seo_title: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
        console.log('OK, state will be:' + event.target.value);
    }

    render() {
        //const { seo_title } = this.state;

        return (
            <div>
                <form id="article-form">
                    <Input
                        text="SEO title"
                        label="seo_title"
                        type="text"
                        id="seo_title"
                        value={this.state.seo_title}
                        handleChange={this.handleChange}
                    />
                </form>
                <p> State variable: {this.state.seo_title}</p>
                <div>
                    <UpdateButton text="RefreshData"/>
                </div>
                <div>
                    Table: <hr/>
                    <SomeTable/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<MainContainer/>, document.getElementById("create-article-form"));

export default MainContainer;
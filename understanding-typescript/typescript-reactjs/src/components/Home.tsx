import * as React from "react";

interface HomeProps {
    name: string;
    age: number;
}

export class Home extends React.Component<HomeProps, object> {
    render() {
        return (
            <div>
                Hello there, {this.props.name}, you are {this.props.age}.
            </div>
        );
    }
}
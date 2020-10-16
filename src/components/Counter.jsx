import React, { Component } from 'react';


class Counter extends Component {
    state = {
        counter: 0,
    };

    _handleSubmit = async (event) => {
        event.preventDefault();
        const { counter } = this.state;
        const newCount = counter+1
        this.setState({
            counter: newCount,
        });
    }

    // _handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const { counter } = this.state;
    //     this.setState({
    //         counter: this.state - 1,
    //     });
    // }

   

    render() {
        const { counter } = this.state;

        return (
            <>
                <h1>Counter</h1>
                <form>
                    <label>
                        <button type="button" onSubmit={this._handleSubmit}>Add</button>
                        <p>{counter}</p>
                    </label>
                </form>

            </>
        )
    }


}

export default Counter;
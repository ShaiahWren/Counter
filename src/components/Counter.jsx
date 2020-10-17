import React, { Component } from 'react';


class Counter extends Component {
    state = {
        counter: 0,
    };

    _addButton = () => {
        const { counter } = this.state;
        const newCount = counter+1
        this.setState({
            counter: newCount,
        });
    }

    _subtractButton = () => {
        const { counter } = this.state;
        const newCount = counter-1
        this.setState({
            counter: newCount,
        });
    }

 

   

    render() {
        const { counter } = this.state;

        return (
            <>
                <h1>Counter</h1>
                <form>
                    <label>
                        <button type="button" onClick={this._addButton}>Add</button>
                        <p>{counter}</p>
                        <button type="button" onClick={this._subtractButton}>Subtract</button>

                    </label>
                </form>

            </>
        )
    }


}

export default Counter;
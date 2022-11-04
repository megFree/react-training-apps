import React from 'react';
import './CountWithUseEffect.scss';

export function CountWithUseEffect() {
    const [state, setState] = React.useState({
        first: 0,
        second: 0,
    });

    const effect = () => {
        // Update the document title using the browser API
        console.log('Rendered!');
        document.title = `You clicked ${state.first} times`;
    };

    // Similar to componentDidMount and componentDidUpdate:
    React.useEffect(effect);

    function handleButtonClick(event) {
        const { name } = event.currentTarget;
        setState(prevState => ({
            ...prevState,
            [name]: prevState[name] + 1,
        }));
    }

    return (
        <div className="flex-container">
            <div className="col">
                <p>You clicked {state.first} times</p>
                <button
                    name="first"
                    onClick={handleButtonClick}
                >
                    Click
                </button>
            </div>
            <div className="col">
                <p>You clicked {state.second} times</p>
                <button
                    name="second"
                    onClick={handleButtonClick}
                >
                    Click
                </button>
            </div>
        </div>
    );
}

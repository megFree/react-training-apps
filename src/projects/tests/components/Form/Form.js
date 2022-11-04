import React from 'react';
import './Form.scss';

export function Form() {
    const [state, setState] = React.useState({
        firstName: '',
        lastName: '',
        about: '',
    });

    function setStateField({ field, value }) {
        setState(prev => ({
            ...prev,
            [field]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(state);
    }

    const stateDOM = [];
    for (const key in state) {
        stateDOM.push(
            <div key={key} className="state-row">
                <div className="state-col">{key}:</div>
                <div className="state-col">{state[key]}</div>
            </div>,
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input
                    type="text"
                    value={state.firstName}
                    onChange={(event) => setStateField({ field: 'firstName', value: event.currentTarget.value })}
                />
            </label>
            <label>
                Last name: <input
                    type="text"
                    value={state.lastName}
                    onChange={(event) => setStateField({ field: 'lastName', value: event.currentTarget.value })}
                />
            </label>
            <label>
                About: <textarea
                    value={state.about}
                    onChange={(event) => setStateField({ field: 'about', value: event.currentTarget.value })}
                />
            </label>
            <input type="submit" value="Submit" />
            <pre>
                {stateDOM}
            </pre>
        </form>
    );
}

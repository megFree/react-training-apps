import React from 'react';
import './InterestsBlock.scss';

export function InterestsBlock({ className }) {
    return (
        <div className={ `interests-block ${className}` }>
            <div className="interests-block__title">
                Interests
            </div>
            <div className="interests-block__text">
                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture
                ninja. Coffee fanatic.
            </div>
        </div>
    );
}

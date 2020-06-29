import React from 'react';

const Card = ({ name, email, id }) => {

    return (
        <header className={'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'}>
            <img src={`https://robohash.org/${ id }}?100x100`} alt="robot"/>
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </header>
    );
}

export default Card;

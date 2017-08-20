import React from 'react';

export default function Cell(props) {

    return (
        <button className="square" onClick={() => props.seghmel()}>
            {props.arjeq}
        </button>
    );

}
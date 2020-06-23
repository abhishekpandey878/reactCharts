import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Track = styled.div`
    width: 50%;
    height: 20px;
    background-color: #222;
    border-radius: 10px;
    box-shadow: insert 0 0 5px #000;
`;

const Thumb = styled.div`
    width: ${props => props.percentage}%;
    height: 100%;
    background-color: #6bccf9;
    border-radius: 8px;
    transition: width 0.3s ease-in-out
`;

export default class ProgressBar extends React.Component {

    clamp = (min, val, max) => (
        Math.min(Math.max(min, val), max)
    )

    render(){
        return(
            <Track>
                <Thumb percentage={this.clamp(0, this.props.percentage, 100)} />
            </Track>
        )
    }
}
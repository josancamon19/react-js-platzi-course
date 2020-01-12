import React from 'react';
import md5 from 'md5';

function Gravatar(props) {
    return (<img src={`https://www.gravatar.com/avatar/${md5(props.email)}?d=identicon`} className={props.className}
                 alt=""/>
    );
}

export default Gravatar;
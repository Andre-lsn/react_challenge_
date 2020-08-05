import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'


const List = props => (
  <ul className="collection">
    {
      props.items.map((item, index) => <li className="collection-item" key={index}>{item}</li>)
    }
  </ul>
);

export default List;    
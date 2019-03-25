import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurants extends Component {

  render() {

  let restaurants = this.props.restaurants.map((restaurant, index) => {
   return(
    <li key={index}>
      <h1>{ restaurant.name }</h1>
      <p>{ restaurant.location }</p>
    </li>
   )
  });

    return (
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

export default connect(mapStateToProps)(Restaurants);

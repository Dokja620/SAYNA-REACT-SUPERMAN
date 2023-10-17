import React, { Component } from 'react';

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      priceRange: 100, // Initial price range value
      categories: {
        category1: false,
        category2: false,
        category3: false,
        category4: false,
        category5: false,
        category6: false,
        category7: false,
        category8: false,
        category9: false,
        category10: false,
      },
      colors: {
        color1: false,
        color2: false,
        color3: false,
      },
      universes: {
        universe1: false,
        universe2: false,
        universe3: false,
        universe4: false,
      },
    };
  }

  handlePriceChange = (e) => {
    this.setState({ priceRange: e.target.value });
  }

  handleCategoryChange = (category) => {
    this.setState((prevState) => ({
      categories: {
        ...prevState.categories,
        [category]: !prevState.categories[category],
      },
    }));
  }

  handleColorChange = (color) => {
    this.setState((prevState) => ({
      colors: {
        ...prevState.colors,
        [color]: !prevState.colors[color],
      },
    }));
  }

  handleUniverseChange = (universe) => {
    this.setState((prevState) => ({
      universes: {
        ...prevState.universes,
        [universe]: !prevState.universes[universe],
      },
    }));
  }

  render() {
    const { priceRange, categories, colors, universes } = this.state;

    return (
      <div>
        <h1>Filter</h1>
        <div>
          <p>Price Range: {priceRange} euro</p>
          <input
            type="range"
            min={0}
            max={200}
            value={priceRange}
            onChange={this.handlePriceChange}
          />
        </div>
        <div>
          <p>Catégories</p>
          {Object.keys(categories).map((category) => (
            <div key={category}>
              <label>
                <input
                  type="checkbox"
                  checked={categories[category]}
                  onChange={() => this.handleCategoryChange(category)}
                />
                {category}
              </label>
            </div>
          ))}
        </div>
        <div>
          <p>Colors</p>
          {Object.keys(colors).map((color) => (
            <div key={color}>
              <label>
                <input
                  type="checkbox"
                  checked={colors[color]}
                  onChange={() => this.handleColorChange(color)}
                />
                {color}
              </label>
            </div>
          ))}
        </div>
        <div>
          <p>Universes</p>
          {Object.keys(universes).map((universe) => (
            <div key={universe}>
              <label>
                <input
                  type="checkbox"
                  checked={universes[universe]}
                  onChange={() => this.handleUniverseChange(universe)}
                />
                {universe}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Filter;

import React, { Component } from 'react';

class BMICalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      height: 0,
      result: null,
      category: null,
    };
  }

  calculateBMI = () => {
    const { weight, height } = this.state;
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    this.setState({ result: bmi });
    this.determineCategory(bmi);
  };

  determineCategory = (bmi) => {
    if (bmi < 16) {
      this.setState({ category: 'Severe Thinness' });
    } else if (bmi >= 16 && bmi < 17) {
      this.setState({ category: 'Moderate Thinness' });
    } else if (bmi >= 17 && bmi < 18.5) {
      this.setState({ category: 'Mild Thinness' });
    } else if (bmi >= 18.5 && bmi < 25) {
      this.setState({ category: 'Normal' });
    } else if (bmi >= 25 && bmi < 30) {
      this.setState({ category: 'Overweight' });
    } else if (bmi >= 30 && bmi < 35) {
      this.setState({ category: 'Obese Class I' });
    } else if (bmi >= 35 && bmi < 40) {
      this.setState({ category: 'Obese Class II' });
    } else {
      this.setState({ category: 'Obese Class III' });
    }
  };

  handleWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  };

  handleHeightChange = (event) => {
    this.setState({ height: event.target.value });
  };

  render() {
    const { weight, height, result, category } = this.state;

    return (
      <div>
        <h1>BMI Calculator</h1>
        <div>
          <label>Weight (kg):</label>
          <input type="number" value={weight} onChange={this.handleWeightChange} />
        </div>
        <div>
          <label>Height (cm):</label>
          <input type="number" value={height} onChange={this.handleHeightChange} />
        </div>
        <button onClick={this.calculateBMI}>Calculate BMI</button>
        {result !== null && (
          <div>
            <p>Your BMI is: {result.toFixed(2)}</p>
            <p>Category: {category}</p>
          </div>
        )}
      </div>
    );
  }
}

export default BMICalculator;

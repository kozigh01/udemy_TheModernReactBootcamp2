class App extends React.Component {
  render() {
    return (
      <div>
        <Hello from="Mark" to="Stacey" />
        <NumPicker />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
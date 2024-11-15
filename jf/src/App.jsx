import CardSlider from './components/CardSlider';

const App = () => {
  const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];

  return (
    <div className="App">
      <h1>Card Slider</h1>
      <CardSlider cards={cards} />
    </div>
  );
};

export default App;

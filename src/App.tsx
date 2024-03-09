import React from 'react';
import './App.css';
import schoolData from './CollegeBasketballTeams.json';

interface Team {
  school: string;
  name: String;
  city: String;
  state: String;
}
const schools = schoolData.teams;

function Welcome() {
  return (
    <h1>Lists of information about all the colleges in NCAA Basketball</h1>
  );
}

class Teams extends React.Component<Team> {
  render() {
    const BasketballTeam = this.props;

    return (
      <div className="card">
        <h2>SchoolName: {BasketballTeam.school}</h2>
        <h2>MascotName: {BasketballTeam.name}</h2>
        <h2>
          Location: {BasketballTeam.city}, {BasketballTeam.state}
        </h2>
      </div>
    );
  }
}

function BandList() {
  return (
    <div>
      {schools.map((BasketballTeam) => (
        <Teams {...BasketballTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <BandList />
    </div>
  );
}

export default App;

import logo from './assets/software-logo.png';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3,
        }}
    />
);

function Header() {
  
    return (
      <>
        <title>Rapid Fire</title>
        <div class="logo-container">
            <img src={logo} alt="Product Logo" width="400" height="500"/>
        </div>
        <div class="separator"><ColoredLine color="#D71920"/></div>
      </>
    )
  }
  
  export default Header
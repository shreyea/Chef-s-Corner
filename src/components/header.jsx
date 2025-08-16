import logo from '../images/chef.png';
function Header() {
  return (
    <header>
        <div className="header">
            <img className="logo" src={logo} alt="Chef Logo" />
            <h1 className='chef'>Chef's Corner</h1>
        </div>
        
    </header>
  );
}
export {Header}
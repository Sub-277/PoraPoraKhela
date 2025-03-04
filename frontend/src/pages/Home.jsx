import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <h1>
          <span className="welcome">Welcome</span>
          <br />
          <span className="to">To</span>
          <br />
          <span className="brand-name">PoraPoraKhela</span>
        </h1>
        <p>Your journey to learning starts here.</p>
        <button className="cta-button">Get Started</button>
      </div>

      {/* User Login Section */}
      <div className="user-login">
        <h2>Login</h2>
        <form className="login-form">
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">Login</button>
        </form>

        <div className="or-divider">OR</div>

        {/* Social Login Buttons */}
        <div className="social-login">
          <button className="google-login">Sign in with Google</button>
          <button className="apple-login">Sign in with Apple</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

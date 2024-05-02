const About = () => {
  return (
    <main>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>Lorem ipsum dolor sit amet.</p>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>\
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corrupti sed consequuntur architecto assumenda culpa omnis praesentium modi quidem ut obcaecati ipsum, aut ratione! Aut odio dicta nemo labore quos.</p>

            <div className="btn-group">
              <a href="/conatct">
                <button className="btn">contact now</button>
              </a> <span> </span>
              <a href="/services">
                <button className="btn">learn more</button>
              </a>
            </div>
          </div>

          <div className="home-image">
            <img src="/images/login.png" alt="" width="500" height="400" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default About

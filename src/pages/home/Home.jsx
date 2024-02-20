import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Heading from "../../components/heading/Heading";
import ImgSection from "../../components/imageSec/ImageSec";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="main">
        <div className="content">
          <h2 className="heading-secondary">Only Quality Food</h2>
          <p className="paragraph">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architectoeaque ipsa quae
            ab illo inventore.
          </p>
          <div className="buttons">
            <button className="trans">view menu</button>
            <button className="btn">Reservation</button>
          </div>
        </div>
      </section>

      <section className="welcome">
        <div className="content2">
          <div className="content-text">
            <Heading text={"our story"} wUnderline={"5rem"} punderline={""} />
            <h1 className="hBig">Welcome To Royal</h1>
            <p
              style={{ textAlign: "left", width: "90%" }}
              className="paragraph"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              sit iusto maiores commodi deserunt architecto eligendi repellat,
              illum numquam, odio, reiciendis debitis vero earum blanditiis
              doloribus? Accusantium repellendus laborum consequatur nostrum?
              Earum dolorem iusto nesciunt itaque voluptatum dolor, quae et?
            </p>
            <p
              style={{ textAlign: "left", width: "90%" }}
              className="paragraph"
            >
              mquam, odio, reiciendis debitis vero earum blanditiis doloribus?
              Accusantium repellendus laborum consequatur nostrum? Earum dolorem
              iusto nesciunt itaque voluptatum dolor, quae et?
            </p>
          </div>
        </div>
        <img
          width="50%"
          src="italian-restaurant-kitchen-design.jpg.webp"
          alt=""
        />
      </section>

      <section className="about">
        <Heading
          text={"only the best"}
          wUnderline={"10rem"}
          punderline={"center"}
        />
        <h1 className="hBig">Fresh Ingredients,tasty meals</h1>
        <p className="paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          quibusdam, accusantium obcaecati eius alias quasi placeat earum at
          recusandae eum, iusto voluptatum. Illo quasi doloremque explicabo?
          Iusto debitis aliquam placeat!
        </p>
        <button className="btn">view menu</button>
      </section>

      <ImgSection />
      <section className="event">
        <Heading
          text={"dont't miss"}
          wUnderline={"10rem"}
          punderline={"center"}
        />
        <h1 className="hBig">our new and event</h1>
        <p className="paragraph">
          amet consectetur adipisicing elit. Officiis quibusdam, accusantium
          obcaecati eius alias quasi placeat earum at recusandae eum, iusto
          voluptatum.
        </p>
        <div className="carDs">
          <div className="carD">
            <img
              src="italian-restaurant-kitchen-design.jpg.webp"
              className="carD-img"
              alt=""
            />
            <div className="carD-text">
              <h5 className="carD-title">Lorem, ipsum dolor.</h5>
              <h6 className="category">Category</h6>
              <p
                style={{ width: "80%", textAlign: "left" }}
                className="paragraph"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                natus. Reprehenderit voluptates explicabo optio reiciendis,
                architecto voluptatum ducimus fuga earum!
              </p>
            </div>
          </div>
          <div className="carD">
            <img
              src="italian-restaurant-kitchen-design.jpg.webp"
              className="carD-img"
              alt=""
            />
            <div className="carD-text">
              <h5 className="carD-title">Lorem, ipsum dolor.</h5>
              <h6 className="category">Category</h6>
              <p
                style={{ width: "80%", textAlign: "left" }}
                className="paragraph"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                natus. Reprehenderit voluptates explicabo optio reiciendis,
                architecto voluptatum ducimus fuga earum!
              </p>
            </div>
          </div>
          <div className="carD">
            <img
              src="italian-restaurant-kitchen-design.jpg"
              className="carD-img"
              alt=""
            />
            <div className="carD-text">
              <h5 className="carD-title">Lorem, ipsum dolor.</h5>
              <h6 className="category">Category</h6>
              <p
                style={{ width: "80%", textAlign: "left" }}
                className="paragraph"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                natus. Reprehenderit voluptates explicabo optio reiciendis,
                architecto voluptatum ducimus fuga earum!
              </p>
            </div>
          </div>
        </div>
        <button className="btn">read more</button>
      </section>

      

      <section className="contact">
        <div className="opacity">
          <div className="container">
            <h3 className="cHeading">Hours of operation</h3>
            <h6 className="week"> mon - fri</h6>
            <p className="time">10:00am - 1:00pm</p>
            <p className="time">4:00pm - 10:30pm</p>

            <div className="underline2"> </div>
            <h6 className="week"> sat</h6>
            <p className="time">3:00pm - 10:30pm</p>
            <div className="underline2"> </div>

            <h6 className="week"> sun</h6>
            <p className="time">We are closed</p>
            <button className="btn">make a reservation</button>
          </div>
          <div className="container">
            <h3 className="cHeading">Drop us a line</h3>
            <p
              className="paragraph"
              style={{ width: "100%", margin: "0px", fontSize: "1.5rem" }}
            >
              Don't be shy. Let us know if you have any questions!
            </p>
            <button className="btn">Contact us </button>

            <div className="form">
              <h3 className="cHeading">Our New Letter</h3>
              <p
                className="paragraph"
                style={{
                  width: "100%",
                  margin: "0px",
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                }}
              >
                Dialogue is an essential part of our script
              </p>
              <input type="text" className="inp" placeholder="firstname" />
              <input type="text" className="inp" placeholder="lastname" />
              <input type="text" className="inp" placeholder="email" />
              <button style={{ width: "100%", margin: "1rem" }} className="btn">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

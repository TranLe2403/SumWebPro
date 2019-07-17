import Layout from '../components/MyLayout.js'
import Img from '../components/Logo'



export default function Blog() {
  return (
    <Layout>
      <div className="bg">
        <div className="home">
          <div className="des_logo">
            <Img />
          </div>
          <h1 className="title">LIFT STUDIO</h1>
          <p className="description">Ut enim ad minim veniam,laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <style jsx>
        {`
        .title {
          font-family: 'Orbitron';
          font-size:45px;
          letter-spacing: 5px;
          color: white;
        }
        .description {
          font-family: 'Montserrat';
          font-size: 20px;
          color: white;
        }
        .des_logo {
          width: 265px;
          height: 265px;
          padding-top: 80px;
          position: relative;
        }
        .des_logo::after {
          z-index: 1;
          opacity: 1; 
          position: absolute;
        }

        .home {
          display: flex;
          align-items: center;
          flex-direction: column; 
          height: 700px;
          position: relative;
          z-index: 1;
          
        }
        .home::before {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: -1;
          content: " ";
          background-image: linear-gradient(to right, rgba(4,4,4,0.85), rgba(4,4,4,0.85)),
                            url("/static/home1.png"), 
                            url("/static/home2.png"),
                            url("/static/home3.png"),
                            url("/static/home4.png");
          background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
          background-position: 0 0, 33% 0, 66.5% 0, 100% 0;
        }
        `}
      </style>
    </Layout>
  );
}

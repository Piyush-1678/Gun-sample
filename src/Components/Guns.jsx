import Images from "./Data";

const Guns= ({ tomap }) => {
    return (
      <div className="container">
        <div className="row">
        {Images[tomap].images.map((img) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-4">
              <img className="img-fluid border-custom-2" src={img} alt="gun" />
            </div>
          );
        })}
        </div>
     
      </div>
    );
  };
export default Guns;
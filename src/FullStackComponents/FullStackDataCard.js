import React from "react";

const FullStackDataCard = ({ fullStackDataData }) => {
  return (
    <div>
      <section className="py-4">
        <div className="container px-4 px-lg-4 mt-5">
          <div className="row gx-3 gx-lg-4 row-cols-3 row-cols-md-4 row-cols-xl-3 justify-content-center">
            {fullStackDataData.map((curElem, index) => {
              return (
                <div className="col mb-4">
                  <div className="card height-100">
                    <img
                      className="card-img-top"
                      src={curElem.Courseimage}
                      alt="..."
                    />

                    <div className="card-body p-4">
                      <div className="text">
                        <h3 className="fw-bolder">{curElem.Courseheading}</h3>

                        <h5 className="Descb">{curElem.Coursedescription}</h5>

                        <h5>
                          <b>
                            <a href="#" className="btn ">
                              {curElem.Readmore}
                            </a>
                          </b>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default FullStackDataCard;

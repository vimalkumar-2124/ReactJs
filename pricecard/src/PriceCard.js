import React from "react";

export default function PriceCard(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {props.data.plan}
            </h5>
            <h6 className="card-price text-center">
              ${props.data.price}
              <span className="period">/month</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              <li className={props.data.isuser ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      props.data.isuser ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {props.data.user}
              </li>
              <li className={props.data.isstorage ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      props.data.isstorage ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {props.data.storage} Storage
              </li>
              <li className={props.data.isPublicProjects ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      props.data.isPublicProjects ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {props.data.publicProjects}
              </li>
              <li className={props.data.isCommunityAccess ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      props.data.isCommunityAccess
                        ? "fas fa-check"
                        : "fas fa-times"
                    }
                  ></i>
                </span>
                {props.data.communityAccess}
              </li>
              <li className={props.data.isprivateProjects ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      props.data.isprivateProjects
                        ? "fas fa-check"
                        : "fas fa-times"
                    }
                  ></i>
                </span>
                {props.data.privateProjects}
              </li>
              <li className={props.data.isPhoneSupport ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      props.data.isPhoneSupport
                        ? "fas fa-check"
                        : "fas fa-times"
                    }
                  ></i>
                </span>
                {props.data.phoneSupport}
              </li>
              <li className={props.data.issubdomain ? "" : "text-muted"}>
              <span className="fa-li">
                  <i
                    className={
                      props.data.issubdomain ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {props.data.subDomain}
              </li>
              <li className={props.data.isReports ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      props.data.isReports ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {props.data.reports}
              </li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

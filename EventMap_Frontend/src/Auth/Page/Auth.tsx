import "bootstrap/dist/css/bootstrap.min.css";
import { Registry } from "../Components/Registry";
import { Login } from "../Components/Login";


export function Auth() {
  return (
    <>
      <div className="container">
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="border p-4" style={{width: "1000px"}}>
                <div className="row">
              <div className="col-6 mb-3 mb-sm-0">
                <div className="card-body">
                  <Registry></Registry>
                </div>
              </div>
              <div className="col-6">
                <div className="card-body">
                  <Login></Login>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

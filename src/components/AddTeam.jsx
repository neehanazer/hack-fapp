import React from "react";
import axios from "axios";
import NavBar from "./NavBar";

const AddTeam = () => {
  const [data, setData] = React.useState({
    teamid: "",
    teamname: "",
    teamldname: "",
    lemail: "",
    lphone: "",
    clgname: "",
    noofmem: "",
    projecttitle: "",
    pstrack: "",
    technostack: "",
    mentname: "",
    regdate: "",
    tableno: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/add-team", data)
      .then((res) => {
        alert("Team Added Successfully");

        setData({
          teamid: "",
          teamname: "",
          teamldname: "",
          lemail: "",
          lphone: "",
          clgname: "",
          noofmem: "",
          projecttitle: "",
          pstrack: "",
          technostack: "",
          mentname: "",
          regdate: "",
          tableno: "",
        });
      })
      .catch((err) => {
        alert("Error Adding Team");
        console.log(err);
      });
  };

  return (
    <div>
      <NavBar />

      <div className="container" style={{ padding: 10, margin: 50 }}>
        <h2 style={{ marginBottom: 40 }}>Add Hackathon Team</h2>

        <form onSubmit={handleSubmit} className="row g-3">

          <div className="col-md-6">
            <label className="form-label">Team ID</label>
            <input
              type="text"
              className="form-control"
              name="teamid"
              value={data.teamid}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Team Name</label>
            <input
              type="text"
              className="form-control"
              name="teamname"
              value={data.teamname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Team Leader Name</label>
            <input
              type="text"
              className="form-control"
              name="teamldname"
              value={data.teamldname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Leader Email</label>
            <input
              type="email"
              className="form-control"
              name="lemail"
              value={data.lemail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Leader Phone</label>
            <input
              type="text"
              className="form-control"
              name="lphone"
              value={data.lphone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">College Name</label>
            <input
              type="text"
              className="form-control"
              name="clgname"
              value={data.clgname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Number of Members</label>
            <input
              type="number"
              className="form-control"
              name="noofmem"
              value={data.noofmem}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Project Title</label>
            <input
              type="text"
              className="form-control"
              name="projecttitle"
              value={data.projecttitle}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Problem Statement / Track</label>
            <input
              type="text"
              className="form-control"
              name="pstrack"
              value={data.pstrack}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Technology Stack</label>
            <input
              type="text"
              className="form-control"
              name="technostack"
              value={data.technostack}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Mentor Name</label>
            <input
              type="text"
              className="form-control"
              name="mentname"
              value={data.mentname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Registration Date</label>
            <input
              type="date"
              className="form-control"
              name="regdate"
              value={data.regdate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Table Number</label>
            <input
              type="number"
              className="form-control"
              name="tableno"
              value={data.tableno}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddTeam;
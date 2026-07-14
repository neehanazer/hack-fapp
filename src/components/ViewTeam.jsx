import React, { useEffect, useState } from "react";
import axios from "axios";
// import NavBar from "./NavBar";

const ViewTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3000/view-team")
      .then((response) => {
        setTeams(response.data);
      })
      .catch((error) => {
        console.error("Error fetching team details:", error);
      });
  }, []);

  return (
    <div>
      {/* <NavBar /> */}

      <div className="container" style={{ padding: 10, margin: "50px auto" }}>
        <h1 style={{ marginBottom: 30 }}>View Hackathon Teams</h1>

        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Team ID</th>
                <th>Team Name</th>
                <th>Leader Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>College</th>
                <th>No. of Members</th>
                <th>Project Title</th>
                <th>Problem Statement</th>
                <th>Technology Stack</th>
                <th>Mentor</th>
                <th>Registration Date</th>
                <th>Table No.</th>
              </tr>
            </thead>

            <tbody>
              {teams.map((team, index) => (
                <tr key={index}>
                  <td>{team.teamid}</td>
                  <td>{team.teamname}</td>
                  <td>{team.teamldname}</td>
                  <td>{team.lemail}</td>
                  <td>{team.lphone}</td>
                  <td>{team.clgname}</td>
                  <td>{team.noofmem}</td>
                  <td>{team.projecttitle}</td>
                  <td>{team.pstrack}</td>
                  <td>{team.technostack}</td>
                  <td>{team.mentname}</td>
                  <td>{team.regdate}</td>
                  <td>{team.tableno}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewTeam;
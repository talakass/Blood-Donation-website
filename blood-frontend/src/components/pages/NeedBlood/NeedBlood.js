import React, { useState } from "react";
import DonorCards from "../../DonorCards";
import BloodGroupSelect from "../../BloodGroupSelect";

const NeedBlood = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [reason, setReason] = useState("");
  const [donors, setDonors] = useState([]);

  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const mockDonors = [
      // Mock donor data
    ];
    setDonors(mockDonors);
  };

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-4">Request Blood</h1>
            <p className="lead mb-4">
              Fill out the form below to request blood from our donors.
            </p>
            <form name="needblood" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="bloodGroup" className="font-weight-bold">
                  Blood Group<span className="text-danger">*</span>
                </label>
                <BloodGroupSelect
                  id="bloodGroup"
                  value={bloodGroup}
                  onChange={handleBloodGroupChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="reason" className="font-weight-bold">
                  Reason, why do you need blood?
                  <span className="text-danger">*</span>
                </label>
                <textarea
                  id="reason"
                  className="form-control"
                  name="reason"
                  value={reason}
                  onChange={handleReasonChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
          <div className="col-md-6">
            {donors.length > 0 ? (
              donors.map((donor, index) => (
                <DonorCards key={index} {...donor} />
              ))
            ) : (
              <div className="alert alert-danger mt-4">
                No donors found for your blood group and reason.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedBlood;
import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function EditResume() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState("");
  const [experience, setExperience] = useState([
    { company: "", year: "", designation: "" },
  ]);
  const [education, setEducation] = useState([
    { institution: "", year: "", degree: "" },
  ]);
  const [skills, setSkills] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleProfileChange = (e) => {
    setProfile(e.target.value);
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { company: "", year: "", designation: "" }]);
  };

  const handleAddEducation = () => {
    setEducation([...education, { institution: "", year: "", degree: "" }]);
  };

  const handleSkillInputChange = (event, value) => {
    setSelectedSkills(value);
  };

  const handleRemoveSkill = (index) => {
    setSelectedSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resumeData = {
      name,
      email,
      address,
      phone,
      profile,
      experience,
      education,
      skills: selectedSkills,
    };
    setShowPreview(true);
    console.log(resumeData);
  };

  const handleSkillKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const skill = e.target.value.trim();
      if (skill) {
        setSkills((prevSkills) => [...prevSkills, skill]);
        e.target.value = "";
      }
    }
  };

  const handleRemoveExperience = (index) => {
    setExperience((prevExperience) => {
      const updatedExperience = [...prevExperience];
      updatedExperience.splice(index, 1);
      return updatedExperience;
    });
  };

  const handleRemoveEducation = (index) => {
    setEducation((prevEducation) => {
      const updatedEducation = [...prevEducation];
      updatedEducation.splice(index, 1);
      return updatedEducation;
    });
  };

  const availableSkills = [
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "NextJs",
    "Tailwind CSS",
    "Angular",
    "My SQL",
    "MongoDB",
    "Node.Js",
    "Express.Js",
    "Spring",
    "C Language",
    // Add more skills as needed
  ];

  return (
    <div className="container mt-5">
      {!showPreview ? (
        <>
          {/* Resume form code */}
          {/* ... */}
          <div className="container mt-5">
            <h1 className="text-center mb-4">Resume Builder</h1>
            <form onSubmit={handleSubmit}>
              <h3>Personal Information</h3>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Address</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    value={address}
                    onChange={handleAddressChange}
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-10">
                  <input
                    type="tel"
                    className="form-control"
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Profile</label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    rows={4}
                    value={profile}
                    onChange={handleProfileChange}
                    required
                  ></textarea>
                </div>
              </div>

              <h3>Experience</h3>
              {experience.map((exp, index) => (
                <div key={index} className="row mb-3">
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control"
                      value={exp.company}
                      onChange={(e) =>
                        handleExperienceChange(index, "company", e.target.value)
                      }
                      placeholder="Company"
                      required
                    />
                  </div>
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control"
                      value={exp.year}
                      onChange={(e) =>
                        handleExperienceChange(index, "year", e.target.value)
                      }
                      placeholder="Year"
                      required
                    />
                  </div>
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control"
                      value={exp.designation}
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "designation",
                          e.target.value
                        )
                      }
                      placeholder="Designation"
                      required
                    />
                  </div>
                  <div className="col-sm-2">
                    {index !== 0 && (
                      <button
                        type="button"
                        className="btn btn-danger btn-block"
                        onClick={() => handleRemoveExperience(index)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleAddExperience}
              >
                Add More
              </button>

              <h3>Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="row mb-3">
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control"
                      value={edu.institution}
                      onChange={(e) =>
                        handleEducationChange(
                          index,
                          "institution",
                          e.target.value
                        )
                      }
                      placeholder="Institution"
                      required
                    />
                  </div>
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control"
                      value={edu.year}
                      onChange={(e) =>
                        handleEducationChange(index, "year", e.target.value)
                      }
                      placeholder="Year"
                      required
                    />
                  </div>
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control"
                      value={edu.degree}
                      onChange={(e) =>
                        handleEducationChange(index, "degree", e.target.value)
                      }
                      placeholder="Degree"
                      required
                    />
                  </div>
                  <div className="col-sm-2">
                    {index !== 0 && (
                      <button
                        type="button"
                        className="btn btn-danger btn-block"
                        onClick={() => handleRemoveEducation(index)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleAddEducation}
              >
                Add More
              </button>

              <h3>Skills</h3>
              <Autocomplete
                multiple
                options={availableSkills}
                value={selectedSkills}
                onChange={handleSkillInputChange}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" label="Add skill" />
                )}
              />

              <button type="submit" className="btn btn-primary mt-4">
                Submit
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-center mb-4">Resume Preview</h1>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">{name}</h2>
              {experience.length > 0 && (
                <h5 className="card-subtitle mb-3 text-muted text-center">
                  {experience[0].designation}
                </h5>
              )}

              <h4 className="mt-4">Contact Information</h4>
              <hr />
              <div className="row">
                <div className="col-sm-6">
                  <p>
                    <strong>Email:</strong> {email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {phone}
                  </p>
                </div>
                <div className="col-sm-6">
                  <p>
                    <strong>Address:</strong> {address}
                  </p>
                </div>
                <h2 className="card-title text-center">Profile</h2>
                <div>{profile}</div>
              </div>

              <h4 className="mt-4">Experience</h4>
              <hr />
              {experience.map((exp, index) => (
                <div className="mb-3" key={index}>
                  <h5>{exp.company}</h5>
                  <p>
                    {exp.designation} | {exp.year}
                  </p>
                </div>
              ))}

              <h4 className="mt-4">Education</h4>
              <hr />
              {education.map((edu, index) => (
                <div className="mb-3" key={index}>
                  <h5>{edu.institution}</h5>
                  <p>
                    {edu.degree} | {edu.year}
                  </p>
                </div>
              ))}

              <h4 className="mt-4">Skills</h4>
              <hr />
              <ul className="list-inline">
                {selectedSkills.map((skill, index) => (
                  <li className="list-inline-item" key={index}>
                    <span className="badge bg-primary">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default EditResume;

import React from "react";

export const ProfileProgress = data => (
  <div className="profile-progress-card">
    <div className="profile-progress-head">
      <div className="profile-progress-title">{data.data.project}</div>
      <div className="profile-progress-amount">{data.data.amount} CHF</div>
    </div>
    <div className="profile-progress-date">{data.data.date}</div>

    <div className="profile-progress">
      <div className="profile-progress-fill" style={data.data.cssstyle}>
        {data.data.progress}
      </div>
    </div>
  </div>
);

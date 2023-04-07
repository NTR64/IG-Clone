import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
            <Avatar src="https://d1lss44hh2trtw.cloudfront.net/assets/article/2018/10/31/devil-may-5-preview-shacknews_feature.jpg" alt="Dante" />            
            </span>
            <div className="username__info">
              <span className="username">Dante</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar src="https://i.ytimg.com/vi/pL3mv_BkHh4/maxresdefault.jpg" alt="Ada Wong" />
            </span>
            <div className="username__info">
              <span className="username">Ada_Wong</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar src="https://i.ytimg.com/vi/Wghn3tYYVNw/maxresdefault.jpg" alt="Jill Valentine" />
            </span>
            <div className="username__info">
              <span className="username">Jill_Valentine</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar src="https://insomniac.games/wp-content/uploads/2018/09/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg" alt="Spider-Man" />
            </span>
            <div className="username__info">
              <span className="username">Spider-Man</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;

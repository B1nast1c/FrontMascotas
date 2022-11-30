import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faLanguage, faPenFancy } from "@fortawesome/free-solid-svg-icons";
import "./styles/topbar.css"

const TopbarAdmin = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="text-logo logo">WildAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <FontAwesomeIcon icon={faBell} />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <FontAwesomeIcon icon={faLanguage} />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <FontAwesomeIcon icon={faPenFancy} />

                    </div>
                    <img src="https://i.pinimg.com/736x/5b/7c/98/5b7c982cbb49108a6a32222b4a8f8d28.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default TopbarAdmin
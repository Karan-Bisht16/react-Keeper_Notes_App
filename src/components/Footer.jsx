import React from "react";

function Footer() {
    return (
        <div className="custom-footer">
            <div className="addn-info">
                <h3 style={{ paddingBottom: "5px" }}> &nbsp; Created with ❤️</h3>
                <h4> Copyright &copy;{new Date().getFullYear()}</h4>
            </div>
        </div>
    );
}

export default Footer;
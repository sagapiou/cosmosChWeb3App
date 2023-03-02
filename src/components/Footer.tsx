import React, { CSSProperties } from "react"

const styles: CSSProperties = {
    bottom: 0,
    height: "100px",
    left: 0,
    position: "absolute",
    width: "100%",
}

const Footer = () => (
    <footer style={styles}>
        <hr />
        <h4 className="small text-center">Cosmos checkers</h4>
    </footer>
)
export default Footer

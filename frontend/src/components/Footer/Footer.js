import "./Footer.css";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="column">
            <h2>USEFUL INFO</h2>
            <div className="paragraphs" style={{ maxHeight: "1000px" }}>
              <ul>
                <li>
                  <a
                    href="https://www.masterclass.com/articles/how-to-play-tennis"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.masterclass.com/articles/how-to-play-tennis"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Terms AND Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.masterclass.com/articles/how-to-play-tennis"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.masterclass.com/articles/how-to-play-tennis"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
        </div>
        <div className="column">
            <h2>YOU CAN FIND US IN</h2>
            <div className="paragraphs" style={{ maxHeight: "1000px" }}>
              <ul>
                <li>
                  <a
                    href="https://www.rfet.es/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Madrid, SP
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.frt.ro/ro/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Bucharest, RO
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.federtennis.it/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Rome, IT
                  </a>
                </li>
                <li>
                  <a
                    href="https://bgtennis.bg/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sofia, BG
                  </a>
                </li>
              </ul>
            </div>
        </div>

        <div className="column">
            <h2>ABOUT US</h2>
            <div className="paragraphs" style={{ maxHeight: "1000px" }}>
              <ul>
                <li>
                  <a
                    href="http://www.frt.ro/ro/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.frt.ro/ro/"
                    target="_blank"
                    rel="noreferrer"
                  >
                   Contact us
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>
      <div id="tm">@AMG TENNIS CLUB.</div>
    </footer>
  );
}

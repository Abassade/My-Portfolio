import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              {resumeData.message}
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
              <h6>Phones : {resumeData.phones}</h6>
                <h6>Email : {resumeData.email}</h6>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}

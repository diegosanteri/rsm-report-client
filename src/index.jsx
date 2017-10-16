import React, { Component } from 'react';
import Modal from 'react-modal';
import MarkupFrame from 'markup-frame';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {runReport, closePreview} from  './action'

class ReportClient extends Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this)
  }

  componentWillMount(){
    this.props.runReport(this.props.reportId)
  }

  closeModal() {
      this.props.closePreview()
  }

  render() {
   return (
     (this.props.report.preview.show ? (<Modal
          isOpen={this.props.report.preview.show}
          onRequestClose={this.closeModal}
          style={customStyles}
          >
          <MarkupFrame markup={this.props.report.preview.html} />
          <button type="button" className="btn btn-danger btn-block" onClick={()=>{this.closeModal()}}>Close</button>
      </Modal>) : <div/>)
      
    );
  }
}

const mapStateToProps = state => ({report: state.report})
const mapDispatchToProps = dispatch => bindActionCreators({
    closePreview,
    runReport
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ReportClient)

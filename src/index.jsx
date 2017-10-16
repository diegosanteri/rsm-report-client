import './style.css'
import React, { Component } from 'react';
import Modal from 'react-modal';
import MarkupFrame from 'markup-frame';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {runReport, closePreview} from  './action'
import reducer from './reducer'

const customStyles = {
  content : {
    top                   : '40%',
    left                  : '60%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

class ReportClient extends Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this)
  }

  componentWillMount(){
    var data = []

    this.props.data.forEach(function(element) {
      data.push({axis: element})
    });

    this.props.runReport(this.props.reportId, data, this.props.envData)
  }

  closeModal() {
      this.props.closePreview()
      this.props.onClose()
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

export {reducer};
